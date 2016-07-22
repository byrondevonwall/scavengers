if(Meteor.isServer){
  //declare seed users
  var users = [
    {name: "Matt", email:"matt@matt.com", roles: ['team-1']},
    {name: "Damian", email:"damian@damian.com", roles: ['team-1']},
    {name: "Edd", email:"edd@edd.com", roles: ['team-1']},
    {name: "Daniel", email: "daniel@daniel.com", roles: ['team-1']},
    {name: "Mike", email: "mike@mike.com", roles: ['team-1']},
    {name: "Bob", email: "bob@bob.com", roles: ['team-2']},
    {name: "Jim", email: "jim@jim.com", roles: ['team-2']},
    {name: "Molly", email: "molly@molly.com", roles: ['team-2']},
    {name: "John", email: "john@john.com", roles: ['team-2']},
    {name: "Jeremy", email: "jeremy@jeremy.com", roles: ['team-2']},
    {name: "Chessa", email: "chessa@chessa.com", roles: ['team-3']},
    {name: "Karin", email: "karin@karin.com", roles: ['team-3']},
    {name: "Allie", email: "allie@allie.com", roles: ['team-3']},
    {name: "Jesalyn", email: "jesalyn@jesalyn.com", roles: ['team-3']},
    {name: "Katie", email: "katie@katie.com", roles: ['team-3']}
  ];

  //when we drop the database, this block of code is how we add users
    // _.each(users, function(user){
    //   var id;
    //
    //   id = Accounts.createUser({
    //     email: user.email,
    //     password: "password",
    //     profile: {name: user.name}
    //   });
    //
    //   if(user.roles.length > 0){
    //     Roles.addUsersToRoles(id, user.roles, 'defaultGroup')
    //   }
    // });//end each

};//end isServer


Meteor.methods({
  //method to create question...to do so type in chrome console: `Meteor.call('createQuestion', 'questiontext', 'questiontype', 'teamname')`
  'createQuestion' : function(questionNumber, isSA, isGPS, isItem, isPic, questionText, groupName, shortAnswer, isAnswered, answerTime){
    check(questionNumber, Number);
    check(isSA, Boolean);
    check(isGPS, Boolean);
    check(isItem, Boolean);
    check(isPic, Boolean);
    check(questionText, String);
    check(groupName, String);
    check(shortAnswer, String);
    check(isAnswered, Boolean);
    check(answerTime, String);
    questionsList.insert({
      questionNumber: questionNumber,
      isSA: isSA,
      isGPS: isGPS,
      isItem: isItem,
      isPic: isPic,
      questionText: questionText,
      groupName: groupName,
      shortAnswer: shortAnswer,
      isAnswered: isAnswered,
      answerTime: answerTime
    })
  }//end create question
});//end methods






//when we drop the database, this block of code is how we add users
  // _.each(users, function(user){
  //   var id;
  //
  //   id = Accounts.createUser({
  //     email: user.email,
  //     password: "password",
  //     profile: {name: user.name}
  //   });
  //
  //   if(user.roles.length > 0){
  //     Roles.addUsersToRoles(id, user.roles, 'defaultGroup')
  //   }
  // });//end each
