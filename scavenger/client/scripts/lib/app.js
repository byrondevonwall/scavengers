//https://www.sitepoint.com/creating-custom-login-registration-form-with-meteor/

var emails = ['bob@bob.com', 'matt@matt.com', 'email@email.com'];

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
                window.location.href = "dashboard";
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
        event.preventDefault();
        Meteor.logout();
        window.location.href = "loginPg";
        console.log("logged out");
      },//end click.logoutbtn

      'click .anwserTheQ': function(event){
        event.preventDefault();
        window.location.href = "anwserMe";
        console.log("clicked the awnser");
      }//end anwser the q event

    });//end template.dashboard.events
}//end isclient
