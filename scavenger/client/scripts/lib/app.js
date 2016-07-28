//https://www.sitepoint.com/creating-custom-login-registration-form-with-meteor/

var emails = [];

if (Meteor.isClient) {

    Template.loginPg.events({
      'click .needRegBtn': function(event){
        event.preventDefault();
        console.log("register modal is up");
        $("#regModal").removeClass('off');
        $(".modalGrey").removeClass('off');
        $(".needLog").addClass('off');
      }//end click .needReg event

    });//end loginPg events

    Template.register.events({
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
            // Meteor.loginWithPassword(regEmail, regPass, function(error){
            //   console.log(error);
            //   window.location.href = "dashboard";
            //})//end loginwithpassword
            }//end error function
          }//end isgood
          else
          {
              console.log('sorry thats not an approved email address.')
          }
      },//end 'submit form' function

      'click .cancelReg': function(event){
        event.preventDefault();
        console.log("register modal is down");
        $("#regModal").addClass('off');
        $(".modalGrey").addClass('off');
        $(".needLog").removeClass('off');
      }//end click modalGrey event


  });//end template.register.events

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
                FlowRouter.go('/dashboard')
              }
              else
              {
                console.log(error);
              }
            })//end loginwithpassword
        }//end 'submit form'
    });//end login template events

    Template.dashboard.events({
      'click .logoutBtn': function(event){
        // event.preventDefault();
        Meteor.logout();
        FlowRouter.go("/loginPg");
        console.log("logged out");
      },//end click.logoutbtn

      'click .anwserTheQ': function(event){
        // event.preventDefault();
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


    Template.answerPage.helpers({
      'theQuestion' : function(){
        var testId = Session.get('selectedQuestion')
        // console.log(testId);
        var q = questionsList.findOne(testId);
        return q
      }
    });

    Template.answerPage.events({
      'click .submitAnswerBtn' : function(){
        var SAanswer = $('#sa-answer').val();
        var questionID = Session.get('selectedQuestion');
        questionsList.update({_id: questionID},
                              {$set: {shortAnswer: SAanswer}} )
      }
    });

}//end isclient
