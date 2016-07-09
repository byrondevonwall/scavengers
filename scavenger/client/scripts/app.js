//https://www.sitepoint.com/creating-custom-login-registration-form-with-meteor/

var emails = ['bob@bob.com', 'matt@matt.com', 'email@email.com'];

if (Meteor.isClient) {
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
              Accounts.createUser({
                email: regEmail,
                password: regPass
              })
              Meteor.loginWithPassword(regEmail, regPass, function(error){
                console.log(error);
              })

            }

        }
    });

    Template.dashboard.events({
      'click.logout': function(event){
        event.preventDefault;
        Meteor.logout();
      }
    });
}
