import { Accounts } from 'meteor/accounts-base'

Meteor.startup(function () {

    sAlert.config({
        effect: '',
        position: 'top-right',
        timeout: 5000,
        html: false,
        onRouteClose: true,
        stack: true,
        offset: 0, // in px - will be added to first alert (bottom or top - depends of the position in config)
        beep: false,
        onClose: _.noop //
    });//end Salert config

});//end startup scripts

//https://www.sitepoint.com/creating-custom-login-registration-form-with-meteor/

var emails = [];

if (Meteor.isClient) {



var teamTypes = ["adult","adult","adult","corporate","adult","adult","adult","adult","adult","adult","adult","adult","family","adult","family","family","family","family","corporate","corporate","family","family","corporate","corporate","corporate","corporate","family","family","adult","adult","family","adult","adult","family","adult","adult","family","family","family","family","family","family","adult","adult", "dev","dev","dev","adult","adult","adult","family","family","family","dev","dev","dev", "judges"];


var teams = ["THE GRAPE ESCAPE", "FIGHTING BROWNS", "FAB 4", "CAROLINA ORTHO PEDO", "PIGGLY WIGGLY PRINCESSES", "Trox", "Team West Cary", "Campbell Clan", "Team LooDu", "Riddle E-Racers", "Scholars & Ballers", "The 52'ers", "SimTown", "Red Field Trackers", "The Blue Whales", "There's Something About Cary", "Plaque busters", "x Marx the spot", "Mr. Roof's Minions", "Nannies & Sitters & Tutors, OH MY!", "Grinin Lizards", "Dam Those Beavers", "Super Certified", "Rain Makers", "SearStone #1", "SEARSTONE #2", "The Wimbledon Wolfpack", "Jalapeno Hotties", "Aloha Six", "It's Five O'clock Somewhere", "Eeyore's Buddies", "The Lip BALMs", "For Cake and Glory!", "A-Mades-ing", "Ack Attack", "The Hunter Games", "Meat Knuckles", "NC Myers Crew", "Marvelous Morellos", "The Cary Cats", "The Memphians", "The Hungry Hungry Hippos", "Cary Underwoods", "The Mandonias", "awesometeam5000", "adultwalkup1", "adultwalkup2", "adultwalkup3", "familywalkup1", "familywalkup2", "familywalkup3", "cary citizen", "app store test", "judges"];

for(var f=0;f<teams.length; f++){
  console.log("------------------------")
  console.log("team Name: "+teams[f]);
  console.log("team type: "+teamTypes[f]);
  //here we insert into our collection
}

// var users =
// _.each(users, function(user){
//   console.log(user.email + "added to " + user.roles)
//   Meteor.call('setRegisteredUser', user.email, user.roles)
// })


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

          event.preventDefault();
          var regEmail = event.target.registerEmail.value;
          var regName = event.target.registerName.value
          var regPass = event.target.registerPassword.value;
          var confirmPass = event.target.confirmPassword.value;
          console.log(regEmail, regName, regPass, confirmPass);
          if(regPass === confirmPass){

            var user = registeredUsers.findOne({email: regEmail});
            console.log(user)
            if(user === undefined){
              sAlert.error("Please use the email address you used to register for this event on eventbrite.")
            } else {
              Meteor.call('registerUser', regEmail, regPass, regName, user.role, function(error, result){
                if(error){
                  sAlert.error(error);
                } else {

                  console.log(result)
                  sAlert.success('You have been registered, please Log In!');
                  $("#regEmail").val('');
                  $("#regName").val('');
                  $("#regPass").val('');
                  $("#regPassConf").val('');
                  $("#regModal").addClass('off');
                  $(".modalGrey").addClass('off');
                  $(".needLog").removeClass('off');
                }
              })
              // var id;
              //
              // id = Accounts.createUser({
              //   email: regEmail,
              //   password: regPass,
              //   profile:{name: regName}
              // })
              // console.log(id)
              // if(user.role.length > 0){
              //   Roles.addUsersToRoles(id, user.role, 'defaultGroup')
              // }


            }

          } else{
            sAlert.error('Please enter a matching password');
            $("#regPass").val('');
            $("#regPassConf").val('');
          }
      },//end 'submit form' function

      //this closes the registartion modal
      'click .cancelReg': function(event){
        event.preventDefault();
        console.log("register modal is down");
        $("#regModal").addClass('off');
        $(".modalGrey").addClass('off');
        $(".needLog").removeClass('off');
        $("#regEmail").val('');
        $("#regName").val('');
        $("#regPass").val('');
        $("#regPassConf").val('');
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
              if(error)//if there is a problem with the login info
              {
                  console.log(error)
                if(error.message === "Incorrect password [403]"){
                  $('.resetPassBtn').removeClass('off');
                  console.log(error);
                  sAlert.error(error.message)
                }else{
                  sAlert.error(error.message)
                }
              }
              else
              {
                console.log(Meteor.user())
                if(Meteor.user().roles.defaultGroup[0] === "judges")
                {
                  FlowRouter.go("/teamsPg");
                }
                else
                {
                  FlowRouter.go('/dashboard');
                }
              }
            })//end loginwithpassword
        },//end 'submit form'

        'click .resetPassBtn' : function(){
          event.preventDefault();
          var userEmail = $('#loginEmail').val().toLowerCase().toString();
          console.log(userEmail)
          Accounts.forgotPassword({email: userEmail}, function(err){
            if (err) {
              if (err.message === 'User not found [403]') {
                sAlert.error('This email does not exist.');
              } else {
                sAlert.error(err.message);
              }
            } else {
              sAlert.success('Email Sent. Check your mailbox.');
            }
          })
        }

        if (Accounts._resetPasswordToken){
          
        }
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
  },//end click.logoutbtn

  'click .closeBurger': function(event){
    $(".hamMenu").addClass('off');
    $(".modalGrey").addClass('off');
    console.log("closed hamburger menu");
  },//end click modalGrey event

  'click .sponsorsPg' : function(){
    FlowRouter.go('/sponsorsPg');
  },//end back to questions button event

  'click .aboutPg' : function(){
    FlowRouter.go('/aboutPg');
  },//end back to questions button event

  'click .qBox': function(event){
    // event.preventDefault();
    // sAlert.error('Questions Are not Currently Available')
    FlowRouter.go('/answerPage')
    console.log("clicked the answer");
    var questionId = this._id;
    console.log(questionId)
    Session.set('selectedQuestion', questionId);
    var testId = Session.get('selectedQuestion')

    console.log(testId)
  }//end anwser the q event

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

//----------Sponsors page events-------------------//

Template.sponsorsPg.events({
  'click .back' : function(){
    FlowRouter.go('/dashboard');
  },//end back to questions button event
});

//----------aboutPg page events-------------------//

Template.aboutPg.events({
  'click .back' : function(){
    FlowRouter.go('/dashboard');
  },//end back to questions button event
});

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
        Meteor.call('submitAnswer', questionID, SAnswer, itemAnswer, gpsLoc, function(error, result){
          if(error){
            sAlert.error(error);
          } else{
            // console.log(result);
            FlowRouter.go('/dashboard');
          }
        });

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
          // console.log(error)
          console.error('Error uploading' );
          sAlert.error(error);
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



//----------JUDGES PORTAL----------//


  //----------------------teamsPg events ---------------------------

Template.teamsPg.events({

  'click .teamLink': function() {
    FlowRouter.go('verifyPg');
  },

  'click .backToLogin': function () {
    Meteor.logout();
    FlowRouter.go("/loginPg");
  }

});

//--------------------TEAMLISTCONTAINER HELPERS----------------------
  Template.teamListContainer.helpers({

  'teams': function () {
    // return ["dusty Jorgens", "stinging bunnies", "lightning ducks", "fire ferrets", "the wow doggos"];

    var users = Meteor.users.find().fetch()

    function isUserInRole(userId, role){
      console.log(Roles.userIsInRole(userId, role))
    }

    _.each(users, function(user){

    })



    if(type === adult)
    {
      return fakeCTeams;
    }
    else if(type === family)
    {
      return fakeATeams;
    }
    else if(type === corporate)
    {
      return fakeFTeams;
    }
  }//end teams function

  });//end teamlist helpers

//---------------------verifyPg helpers----------------------

Template.verifyPg.helpers({

  'questions': function () {
    return fakeQuestions;
  },//end questions function

  'questionSelected': function () {
      return questionSelected;
  }//end questions function

  }); //end helpers

//------------------------verify pg events-----------------------

Template.verifyPg.events({

  'click .oneQuestion': function (e) {
      var qNum = $(e.target).attr("id");

      questionSelected = true;
      $(".oneQuestion").removeClass("selected");
      $(e.target).addClass("selected");
      $(".qNum").text(qNum);
      $(".questionText").text(fakeQuestions[qNum-1].questionText);
      $(".SA").text(fakeQuestions[qNum-1].shortAnswer);

      if(fakeQuestions[qNum-1].hasItem)
      {
        $(".item").text("yes they do, ask to see it.");
      }
      else
      {
        $(".item").text("no they dont.");
      }

      $(".URL").text(fakeQuestions[qNum-1].picURL);
      $(".URL > img").attr("src", fakeQuestions[qNum-1].picURL);

    },//end questions function

    'click .backToTeams': function () {
      FlowRouter.go("teamsPg");
    },

    'click .yep': function (e) {
      console.log("this question counts!");
      //fakeScore = fakeScore + this.
    },

    'click .nope': function (e) {
      console.log("this question doesnt count!");
    }

  });//end verifypg events




}//end isclient
