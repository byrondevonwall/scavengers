FlowRouter.route( '/answerPage', {
  action: function() {
    // Do whatever we need to do when we visit this page
    console.log( "Okay, we're on the answerPage page!" );
    BlazeLayout.render( 'answerPage', { main: 'answerPage' } );
  },
  name: 'answerPage' // Optional route name.
});

FlowRouter.route( '/dashboard', {
  action: function() {
    // Do whatever we need to do when we visit this page
    console.log( "Okay, we're on the dashboard page!" );
    BlazeLayout.render( 'dashboard', { main: 'dashboard' } );
  },
  name: 'dashboard' // Optional route name.
});

FlowRouter.route( '/sponsorsPg', {
  action: function() {
    // Do whatever we need to do when we visit this page
    console.log( "Okay, we're on the sponsors page!" );
    BlazeLayout.render( 'sponsorsPg', { main: 'sponsorsPg' } );
  },
  name: 'sponsorsPg' // Optional route name.
});

FlowRouter.route( '/aboutPg', {
  action: function() {
    // Do whatever we need to do when we visit this page
    console.log( "Okay, we're on the about page!" );
    BlazeLayout.render( 'aboutPg', { main: 'aboutPg' } );
  },
  name: 'aboutPg' // Optional route name.
});

FlowRouter.route( '/loginPg', {
  action: function() {
    // Do whatever we need to do when we visit this page
    console.log( "Okay, we're on the login page!" );
    BlazeLayout.render( 'loginPg', { main: 'loginPg' } );
  },
  name: 'loginPg' // Optional route name.
});

FlowRouter.route( '/reset-password/:token', {
  action: function() {
    BlazeLayout.render('ResetPassword', {main: 'ResetPassword'})
  },
  name: 'reset-password'
})


FlowRouter.route( '/', {
  action: function() {
    // Do whatever we need to do when we visit this page
    console.log( "not sure where we're going... so go to login." );
    BlazeLayout.render( 'loginPg', { main: 'loginPg' } );
  },
  name: 'loginPg' // Optional route name.
});



//this here isthe judges portal routes

FlowRouter.route( '/teamsPg', {
  action: function() {
    // Do whatever we need to do when we visit this page
    console.log( "Okay, we're on the teamsPg page!" );
    BlazeLayout.render( 'teamsPg', { main: 'teamsPg' } );
  },
  name: 'teamsPg', // Optional route name.
  waitOn: function() {
        return Meteor.subscribe('userList');
    }
});

FlowRouter.route( '/verifyPg', {
  action: function() {
    // Do whatever we need to do when we visit this page
    console.log( "Okay, we're on the verifyPg page!" );
    BlazeLayout.render( 'verifyPg', { main: 'verifyPg' } );
  },
  name: 'verifyPg' // Optional route name.
});

FlowRouter.route( '/leaderPg', {
  action: function() {
    // Do whatever we need to do when we visit this page
    console.log( "Okay, we're on the LeaderPg page!" );
    BlazeLayout.render( 'leaderPg', { main: 'leaderPg' } );
  },
  name: 'leaderPg' // Optional route name.
});
