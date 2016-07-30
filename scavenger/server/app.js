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
    Slingshot.fileRestrictions("uploadFiles", {
      allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
      maxSize: 10 * 1024 * 1024 // 10 MB (use null for unlimited)
  });

    Slingshot.createDirective("uploadFiles", Slingshot.S3Storage, {
      bucket: "scavengerhuntphotos",
      acl: "public-read",


      authorize: function(){
        //you can't upload if youre not logged in
        if(!this.userId){
          var message = "Please log in before posting files";
          throw new Meteor.Error("Login Required", message);
        }
        return true;
      },

      key: function(file){
        //store file in a directory based on a users team name
        var teamName = Meteor.user().roles.defaultGroup[0]
        return teamName + "/" + file.name;
      }
    });

};//end isServer


Meteor.methods({
  //method to create question...to do so type in chrome console: `Meteor.call('createQuestion', 'questiontext', 'questiontype', 'teamname')`
  'createQuestion' : function(isSA, isGPS, isItem, isPic, picUrl, targetGps, answerGps, hasItem, questionText, shortAnswer, isAnswered, answerTime, ptsAwarded, groupName, questionNumber){
    check(isSA, Boolean);
    check(isGPS, Boolean);
    check(isItem, Boolean);
    check(isPic, Boolean);
    check(picUrl, String);
    check(targetGps, String);
    check(answerGps, String);
    check(hasItem, Boolean);
    check(questionText, String);
    check(shortAnswer, String);
    check(isAnswered, Boolean);
    check(answerTime, String);
    check(ptsAwarded, Number);
    check(groupName, String);
    check(questionNumber, Number);
    questionsList.insert({
      isSA: isSA,
      isGPS: isGPS,
      isItem: isItem,
      isPic: isPic,
      picUrl: picUrl,
      targetGps: targetGps,
      answerGps: answerGps,
      hasItem: hasItem,
      questionText: questionText,
      shortAnswer: shortAnswer,
      isAnswered: isAnswered,
      answerTime: answerTime,
      ptsAwarded: ptsAwarded,
      groupName: groupName,
      questionNumber: questionNumber
    })
  },//end create question



});//end methods
