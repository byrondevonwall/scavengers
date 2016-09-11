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


if (Meteor.isClient) {










//----------login page helpers and events----------//
    //this instantiates the modal
    Template.loginPg.events({
      'click .needRegBtn': function(event){
        event.preventDefault();
        // console.log("register modal is up");
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
          var regEmail = event.target.registerEmail.value.toLowerCase();
          var regName = event.target.registerName.value
          var regPass = event.target.registerPassword.value;
          var confirmPass = event.target.confirmPassword.value;
          // console.log(regEmail, regName, regPass, confirmPass);
          if(regPass === confirmPass){




            var user = registeredUsers.findOne({email: regEmail});
            // console.log(user)
            if(user === undefined){
              sAlert.error("Please use the email address you used to register for this event on eventbrite.")
            } else {
              Meteor.call('registerUser', regEmail, regPass, regName, user.role, function(error, result){
                if(error){
                  sAlert.error(error);
                } else {

                  // console.log(result)
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
        // console.log("register modal is down");
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
          var logEmail = event.target.loginEmail.value.toLowerCase();
          var logPass = event.target.loginPassword.value;
            // console.log("Form submitted.", event.target.loginEmail.value);
            Meteor.loginWithPassword(logEmail, logPass, function(error){
              if(error)//if there is a problem with the login info
              {
                  // console.log(error)
                if(error.message === "Incorrect password [403]"){
                  $('.resetPassBtn').removeClass('off');
                  // console.log(error);
                  sAlert.error(error.message)
                }else{
                  sAlert.error(error.message)
                }
              }
              else
              {
                // console.log(Meteor.user())
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
          //get the user's email address

          // Accounts.emailTemplates.sendResetPasswordEmail.text = function(user, url){
          //   return "Click this link to reset your password: " + url +
          // }
          var userEmail = $('#loginEmail').val().toLowerCase().toString();
          // console.log(userEmail)
          //try sending an email to that address
          Accounts.forgotPassword({email: userEmail}, function(err){
            if (err) {
              if (err.message === 'User not found [403]') {
                sAlert.error('This email does not exist, please Register');
              } else {
                sAlert.error(err.message);
              }
            } else {
              sAlert.success('Email Sent. Check your mailbox.');
              $('.resetPassBtn').addClass('off');
            }
          })
        }
    });//end login template events


//----------reset pasword form helpers and events----------//

//reset password forms and functions modifiied from https://gist.github.com/LeCoupa/9879066


  Template.ResetPassword.events({

    'submit #resetPasswordForm': function(e, t) {
      e.preventDefault();
      //get token from url
      var url = FlowRouter.current().path
      var token = url.substring(url.lastIndexOf('/')+1, url.length);
      // console.log(token)

      var resetPasswordForm = $(e.currentTarget),
          password = resetPasswordForm.find('#resetPasswordPassword').val(),
          passwordConfirm = resetPasswordForm.find('#resetPasswordPasswordConfirm').val();


      if (password != '' && passwordConfirm != '' && password === passwordConfirm) {
        Accounts.resetPassword(token, password, function(err) {
          if (err) {
            sAlert.error('We are sorry but something went wrong.');
          } else {
            sAlert.success('Your password has been changed. Welcome back!');
            var token = '';
            // console.log(Meteor.user())
            FlowRouter.go('/dashboard')
          }
        });
      } else if(password === '' || passwordConfirm === ''){
        sAlert.error('You must input a password')
      } else if(password != passwordConfirm){
        sAlert.error('Your Passwords must match')
      }
      return false;
    },

    'click .reset-go-home' : function(){
      FlowRouter.go('/loginPg')
    }

  });//end events

//----------dashboard helpers and events----------//

Template.dashboard.events({
  'click .logoutBtn': function(event){
    // event.preventDefault();
    Meteor.logout();
    FlowRouter.go("/loginPg");
    // console.log("logged out");
  },//end click.logoutbtn

  'click .hamburger': function(event){
    // event.preventDefault();
      $(".hamMenu").removeClass('off');
      $(".modalGrey").removeClass('off');
      // console.log("opened hamburger menu");
  },//end click.logoutbtn

  'click .closeBurger': function(event){
    $(".hamMenu").addClass('off');
    $(".modalGrey").addClass('off');
    // console.log("closed hamburger menu");
  },//end click modalGrey event

  'click .sponsorsPg' : function(){
    FlowRouter.go('/sponsorsPg');
  },//end back to questions button event

  'click .aboutPg' : function(){
    FlowRouter.go('/aboutPg');
  },//end back to questions button event

  'click .qBox': function(event){
    var timeNow = new Date();
    var startTime = new Date('September 17, 2016 09:00:00')
    var endTime = new Date('September 17, 2016 13:30:00')
    // console.log(timeNow, startTime, endTime)

    if(timeNow > startTime && timeNow < endTime){
      FlowRouter.go('/answerPage')
    } else{
      // sAlert.error("Questions can only be answered between 9:00AM and 1:30PM on September 17, 2016")
      FlowRouter.go('/answerPage')
    }
    // event.preventDefault();
    // sAlert.error('Questions Are not Currently Available')

    // console.log("clicked the answer");
    var questionId = this._id;
    // console.log(questionId)
    Session.set('selectedQuestion', questionId);
    var testId = Session.get('selectedQuestion')

    // console.log(testId)
  }//end anwser the q event

});//end template.dashboard.events

    Template.dashboard.helpers({
      //pull questions from mongo collection based on user's team name
      'questions' : function(){
        //get user, the using that var get team name
        var currentUser = Meteor.user();
        var team = currentUser.roles.defaultGroup[0];
        // console.log(team)
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
        // console.log("do we have the item? "+itemAnswer);
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
  // Slingshot.fileRestrictions("myFileUploads", {
  //   allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
  //   maxSize: 10 * 1024 * 1024 // 10 MB (use null for unlimited)
  // });

  //click .picBox
  //change #imgUpload
  Template.uploader.events({

    // 'click .picBox' : function(){
    //   console.log("clicked the big img upload.")
    //   $("#uploadInput").trigger('click');
    // },//end back to questions button event


    //upload to AWS once file is selected
    'change #imgUpload' : function(){
      var files = $("#uploadInput")[0].files;
      // console.log(files[0].name)
      var userTeam = Meteor.user().roles.defaultGroup[0]
      var questionId = Session.get('selectedQuestion');

      S3.upload({
        files: files,
        path: userTeam
      }, function(err, res){
        if(err){
          sAlert.error(err)
        } else if(res){
          // console.log(res.secure_url)
          Meteor.call('uploadImage', questionId, res.secure_url)
        }
      }
    );
  }
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

  //---------------------leaderPg events--------------------------------

Template.leaderPg.events({

  'click .backToTeams': function () {
    FlowRouter.go("/teamsPg");
  }

  });

  //--------------------leaderContainer HELPERS----------------------
    Template.leaderContainer.helpers({

    'leaderboard': function (type) {
      console.log("we're in leaderteams");

      if(type === "adult")
      {
        var adultTeams = teams.find({type: 'adult'}, {sort: { overallPoints: -1 }}).fetch();
        //var adultTeams = teams.find({type: 'adult'}).fetch();
        //console.log(adultTeams);
        return adultTeams;
      }
      else if(type === "family")
      {
        var familyTeams = teams.find({type: 'family'}, {sort: { overallPoints: -1 }}).fetch();
        //var familyTeams = teams.find({type: 'family'}).fetch();
        //console.log(familyTeams);
        return familyTeams;
      }
      else if(type === "corporate")
      {
        var corporateTeams = teams.find({type: 'corporate'},{sort: { overallPoints: -1 }}).fetch();
        //var corporateTeams = teams.find({type: 'corporate'}).fetch();
        //console.log(corporateTeams);
        return corporateTeams;
      }
    }//end teams function

  });//end leaderPg helpers

  //----------------------teamsPg events ---------------------------
//these two variables are used by multiple helpers and events in the teamspg and verifypg which is why theyre global in scope.
var clickedTeam;
var selectedQ;
var ourQuestions;
var qnum;

Template.teamsPg.events({

  'click .teamLink': function(e) {
    clickedTeam = $(e.target).attr("id");
    // console.log("i clicked on: "+clickedTeam);
    FlowRouter.go('verifyPg');
  },

  'click .backToLogin': function () {
    Meteor.logout();
    FlowRouter.go("/loginPg");
  },

  'click .toLeader': function () {
    FlowRouter.go("/LeaderPg");
  }

});

//--------------------TEAMLISTCONTAINER HELPERS----------------------
  Template.teamListContainer.helpers({

  'teams': function (type) {
    //console.log("we;re in teamslistcontainer helpper");

    if(type === "adult")
    {
      var adultTeams = teams.find({type: 'adult'}).fetch();
      return adultTeams;
    }
    else if(type === "family")
    {
      var familyTeams = teams.find({type: 'family'}).fetch();
      //$(".dumb").text(familyTeams);
      return familyTeams;
    }
    else if(type === "corporate")
    {
      var corporateTeams = teams.find({type: 'corporate'}).fetch();
      return corporateTeams;
    }
  }//end teams function

  });//end teamlist helpers

//---------------------verifyPg helpers----------------------

Template.verifyPg.helpers({

  'questions': function () {
    //console.log("inside the questions helper");
    //console.log(clickedTeam);
    ourQuestions = questionsList.find({groupName: clickedTeam, isAnswered: true}).fetch();
    //console.log(ourQuestions);

    return ourQuestions
  },//end questions function

  'questionToVerify': function () {
    //console.log("in selectedQuestion");

    return Session.get('questionToVerify');
  },//end questions function

  'selectedTeam': function(){
    //console.log("inside the selectedTeam helper, clickedTeam = "+clickedTeam)
    var ourTeam = teams.find({teamName: clickedTeam}).fetch();
    //console.log("selectedTeam: ")
    //console.log(ourTeam);
    return ourTeam;
  }

  }); //end helpers

//------------------------verify pg events-----------------------

Template.verifyPg.events({

  'click .oneQuestion': function (e) {
      qNum = $(e.target).attr("id");
      //console.log("number of clicked question: "+qNum);

      //questionSelected = true;
      $(".oneQuestion").removeClass("selected");
      $(e.target).addClass("selected");

      for(var i = 0;i < ourQuestions.length;i++)
      {
        if(ourQuestions[i].questionNumber == qNum)
        {
          // console.log("found a match!");
          Session.set('questionToVerify', ourQuestions[i]);

          selectedQ = ourQuestions[i];
          // console.log(selectedQ);
        }
      }
      if(!selectedQ)
      {
          sAlert.error("Question " + ourQuestions[i] +" Not Found")
          // console.log("question not found?");
      }

    },//end onequestions function

    'click .backToTeams': function () {
      FlowRouter.go("teamsPg");
    },

    'click .yep': function (e) {

      var tempQ = Session.get('questionToVerify');
      var tempQnum = ("#"+tempQ.questionNumber);

      if(tempQ.ptsAwarded == -1)
      {

        // console.log("...pop up the variable points modal...");

        $(".modalGray").removeClass("off");
        $(".variablePtsModal").removeClass("off");

        $("#variableBtn").click(function(){
          if(isNaN($("#variablePtsinput").val()))
          {
            //console.log("please enter a number fool.");
          }
          else
          {
            var tempName = tempQ.groupName;
            var tempTeam = teams.findOne({teamName: tempName});
            var tempID = tempTeam._id;
            var tempPts = 0;
            var tempQID = tempQ._id;
            //console.log("question ID: "+tempQID);

            tempPts = Number($("#variablePtsinput").val());
            //console.log("variable pts: "+ tempPts);
            Meteor.call('updateTeamScore', tempID, tempPts);
            Meteor.call('questionVerified', tempQID);

            $(".modalGrey").addClass("off");
            $(".variablePtsModal").addClass("off");
            $(tempQnum).addClass("verified");
          }
        });

        $('#variableCancelBtn').click(function(){
          $("#variablePtsinput").val(0);
          $(".modalGray").addClass("off");
          $(".variablePtsModal").addClass("off");
        });

        //console.log("...pop up the variable points modal...");

      }
      else
      {
        var tempName = tempQ.groupName;
        var tempTeam = teams.findOne({teamName: tempName});
        // console.log("tempTeam: "+tempTeam.teamName);
        // console.log(tempTeam.overallPoints+"+"+tempQ.ptsAwarded);
        var tempID = tempTeam._id;
        var tempPts = tempQ.ptsAwarded;
        var tempQID = tempQ._id;
        //console.log("question ID: "+tempQID);

        // console.log("team");
        // console.log(tempTeam);
        // console.log(" gets +"+tempPts);

        Meteor.call('updateTeamScore', tempID, tempPts);
        Meteor.call('questionVerified', tempQID);
        $(tempQnum).removeClass("rejected");
        $(tempQnum).addClass("verified");

        //console.log("for "+tempTeam.overallPoints+" points overall!");

      }
    },

    'click .nope': function (e) {
      var tempQ = Session.get('questionToVerify');
      var tempQnum = '#'+tempQ.questionNumber;
      $(tempQnum).removeClass("verified");
      $(tempQnum).addClass("rejected");

      // console.log("this question doesnt count!");
    }

  });//end verifypg events


}//end isclient
