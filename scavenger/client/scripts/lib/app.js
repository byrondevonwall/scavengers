//https://www.sitepoint.com/creating-custom-login-registration-form-with-meteor/

var emails = [];

if (Meteor.isClient) {

//----------login page helpers and events----------//
    //this instantiates the modal
    Template.loginPg.events({
      'click .needRegBtn': function(event){
        event.preventDefault();
        console.log("register modal is up");
        $("#regModal").removeClass('off');
        $(".modalGrey").removeClass('off');
        $(".needLog").addClass('off');
      }//end click .needReg event

    });//end loginPg events



//----------register page helpers and events----------//
    Template.register.events({
      //this creates a user based on whether they have a valid registration
      'submit form': function(event) {
          var isGood = false;
          event.preventDefault();
          var regEmail = event.target.registerEmail.value;
          var regPass = event.target.registerPassword.value;
          for (var e = 0; e < emails.length; e++){
            if(regEmail.toLowerCase() === emails[e]){
              isGood = true;
            }
          }
          if(isGood){
            console.log("Form submitted.", event.target.registerEmail.value);
            //TODO---------------------------------------------------------------------------
            //here we should check if the user is already in the DB, and if not create a user.
            //if he is, just say, sorry thats already in there.
            Accounts.createUser({
              email: regEmail,
              password: regPass
            }), function(error){
            $("#regModal").addClass('off');
            $(".modalGrey").addClass('off');
            $(".needLog").removeClass('off');
            }//end error function
          }//end isgood
          else
          {
              console.log('sorry thats not an approved email address.')
          }
      },//end 'submit form' function

      //this closes the registartion modal
      'click .cancelReg': function(event){
        event.preventDefault();
        console.log("register modal is down");
        $("#regModal").addClass('off');
        $(".modalGrey").addClass('off');
        $(".needLog").removeClass('off');
      }//end click modalGrey event


  });//end template.register.events



//----------login helpers and events----------//

    Template.login.events({
      'submit form': function(event) {
          var isGood = false;
          event.preventDefault();
          var logEmail = event.target.loginEmail.value;
          var logPass = event.target.loginPassword.value;
            console.log("Form submitted.", event.target.loginEmail.value);
            Meteor.loginWithPassword(logEmail, logPass, function(error){
              if(error === undefined)//if there isnt a problem with the login info
              {
                console.log(Meteor.user())
                FlowRouter.go('/dashboard')
              }
              else
              {
                console.log(error);
              }
            })//end loginwithpassword
        }//end 'submit form'
    });//end login template events



//----------dashboard helpers and events----------//

Template.dashboard.events({
  'click .logoutBtn': function(event){
    // event.preventDefault();
    Meteor.logout();
    FlowRouter.go("/loginPg");
    console.log("logged out");
  },//end click.logoutbtn

  'click .hamburger': function(event){
    // event.preventDefault();
      $(".hamMenu").removeClass('off');
      $(".modalGrey").removeClass('off');
      console.log("opened hamburger menu");
  },//end click.hamburger

  'click .modalGrey': function(event){
    $(".hamMenu").addClass('off');
    $(".modalGrey").addClass('off');
    console.log("closed hamburger menu");
  },//end click .modalgrey

  'click .qBox': function(event){
    // event.preventDefault();
    FlowRouter.go('/answerPage')
    console.log("clicked the answer");
    var questionId = this._id;
    console.log(questionId)
    Session.set('selectedQuestion', questionId);
    var testId = Session.get('selectedQuestion')
    console.log(testId)
  },//end anwser the q event

  'click .aboutPg': function(event){
    FlowRouter.go('/aboutPg');
  },//end click .modalgrey

  'click .sponsorsPg': function(event){
    FlowRouter.go('/sponsorsPg');
  },//end click .modalgrey

});//end template.dashboard.events

    Template.dashboard.helpers({
      //pull questions from mongo collection based on user's team name
      'questions' : function(){
        //get user, the using that var get team name
        var currentUser = Meteor.user();
        var team = currentUser.roles.defaultGroup[0];
        console.log(team)
        //find questions marked for relevant team based on team name in Q collections
        return questionsList.find({groupName: team})
      }
    });//end 'questions'

//-------------about page events-------------------//
Template.aboutPg.events({
  'click .back': function(event){
    console.log("back to dash");
    FlowRouter.go("/dashboard");
    }//end click.logoutbtn
  });//end dashboard events

  //-------------sponsors page events-------------------//
  Template.sponsorsPg.events({
    'click .back': function(event){
      console.log("back to dash");
      FlowRouter.go("/dashboard");
      }//end click.logoutbtn
    });//end dashboard events

//----------answer page helpers and events----------//

    Template.answerPage.helpers({
      'theQuestion' : function(){
        var testId = Session.get('selectedQuestion')
        var q = questionsList.findOne(testId);
        return q
      }
    });

    Template.answerPage.events({
      'click .submitAnswerBtn' : function(){
        var SAnswer = $('#sa-answer').val();
        var itemAnswer = $('input[name="gotItem"]:checked').val();
        var questionID = Session.get('selectedQuestion');
        var gpsLoc = Geolocation.latLng();

        //so check doesnt get hung on empty answers/not being able to pull geoloc in time
        if(SAnswer == null || undefined){
          SAnswer = 'not answered'
        };
        if (itemAnswer == null || undefined){
          itemAnswer = 'false';
        };
        if(gpsLoc == null){
          gpsLoc = {};
        }
        //call method to submit the answer
        // console.log(questionID, SAnswer, itemAnswer, gpsLoc)
        Meteor.call('submitAnswer', questionID, SAnswer, itemAnswer, gpsLoc)
        FlowRouter.go('/dashboard');
      },//end submitanswer event

      'click .back' : function(){
        FlowRouter.go('/dashboard');
      },//end back to questions button event


    });//end all answer page events.



//----------file-uploader directives events and helpers----------//

  //this restricts the type/size of file that users can upload to AWS
  Slingshot.fileRestrictions("myFileUploads", {
    allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
    maxSize: 10 * 1024 * 1024 // 10 MB (use null for unlimited)
  });

  //click .picBox
  //change #imgUpload
  Template.uploader.events({

    // 'click .picBox' : function(){
    //   console.log("clicked the big img upload.")
    //   $("#uploadInput").trigger('click');
    // },//end back to questions button event


    //upload to AWS once file is selected
    'change #imgUpload' : function(){
      var uploader = new Slingshot.Upload("uploadFiles");
      var questionId = Session.get('selectedQuestion');
      uploader.send(document.getElementById('uploadInput').files[0], function (error, downloadUrl) {
        if (error) {
          // Log service detailed response
          console.log(error)
          console.error('Error uploading' );
          alert (error);
        }
        else {
          //change to meteor method
          Meteor.call('uploadImage', questionId, downloadUrl);
        }
      });

    }//end click picBox fn
  });

//----------geolocation helpers events and directives----------//
  //this is the map zoom variable for google maps
  var MAP_ZOOM = 15;

  //this loads google maps for geolocation
  Meteor.startup(function(){
    GoogleMaps.load({key: 'AIzaSyA4eOr-DCvq3nHOFBDMzm6hXJRFYp0jnQI'});
  });

  Template.map.helpers({
    //set up geolocation error handling
    geolocationError : function(){
      var error = Geolocation.error()
      return error && error.message;
    },

    //set up google map options
    mapOptions: function(){
      //declare user's current lat/lng
      var latLng = Geolocation.latLng();

      //init map once latLng is grabbed
      if (GoogleMaps.loaded() && latLng){
        return{
          center: new google.maps.LatLng(latLng.lat, latLng.lng),
          zoom: MAP_ZOOM
        };
      }
    }
  });//end helpers

  //set map marker and make map update dynamically as the user moves around
  Template.map.onCreated(function(){

    var self = this;


    GoogleMaps.ready('map', function(map){
      //this code can be modified to show a the item's location with a marker
      // var latLng = Geolocation.latLng();
      // //position marker at latLng
      // var marker = new google.maps.Marker({
      //   position: new google.maps.LatLng(latLng.lat, latLng.lng),
      //   map: map.instance
      // });

      var marker;
      //create and move the marker as lat/lng change
      self.autorun(function(){
        var latLng = Geolocation.latLng();
        if (! latLng)
        return;

        //if the marker doesn't exist, create it.
        if (! marker){
          marker  = new google.maps.Marker({
            position: new google.maps.LatLng(latLng.lat, latLng.lng),
            map: map.instance
          });
        }

        //the marker already exists, but position needs to update
        else {
          marker.setPosition(latLng);
        }

        //center and zoom map vie to current position
        map.instance.setCenter(marker.getPosition());
        map.instance.setZoom(MAP_ZOOM);
      });
    });
  });



}//end isclient
