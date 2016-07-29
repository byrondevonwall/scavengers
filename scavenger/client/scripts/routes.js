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

FlowRouter.route( '/loginPg', {
  action: function() {
    // Do whatever we need to do when we visit this page
    console.log( "Okay, we're on the login page!" );
    BlazeLayout.render( 'loginPg', { main: 'loginPg' } );
  },
  name: 'loginPg' // Optional route name.
});

FlowRouter.route( '/', {
  action: function() {
    // Do whatever we need to do when we visit this page
    console.log( "not sure where we're going... so go to login." );
    BlazeLayout.render( 'loginPg', { main: 'loginPg' } );
  },
  name: 'loginPg' // Optional route name.
});