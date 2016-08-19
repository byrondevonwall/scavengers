//always use the heroku server


if(Meteor.isServer){

  var questionsArray =[
    [false, false, true, '', false, "Years ago this sculpture was in another station, Did it 'Getaway' to its new location? Have a team member climb inside and take a seat. Take their photo: it will look pretty neat. TEAM MEMBER PHOTO", '', false, '', 175, '', 4],
    [false, false, true, '', false, "Dragon Boats will race on Symphony Lake today. Asian Focus brings this unique Chinese event annually to Cary. Take a photo with a boat. TEAM PHOTO", '', false, '', 225, '', 5],
    [false, false, true, '', false, "While you're eating Thanksgiving turkey, this high school's marching band will travel far. Find where they practice and take your team photo on the star TEAM PHOTO", '', false, '', 185, '', 6],
  ];//end questionsArray

  for(var team=0;team>=3;team++)
  {

    for(var q=0;q>questionsArray.length;q++)
    {
      Meteor.call('createQuestion', questionArray[q][0], questionArray[q][1], questionArray[q][2], questionArray[q][3], questionArray[q][4], questionArray[q][5], questionArray[q][6], questionArray[q][7], questionArray[q][8], questionArray[q][9], "team-"+team, questionArray[q][11]);
    }//end question for loop
  }//end team for loop

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

  // Meteor.call('createQuestion', true, false, false, true, '0', '0', '', false, 'What is your name?','',false,'',0,'team-1', 1)
  // isSA, isItem, isPic, picUrl, hasItem, questionText, shortAnswer, isAnswered, answerTime, ptsAwarded, groupName, questionNumber)

  // when we drop the database, this block of code is how we add users
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

//this code uploads photos
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
  'createQuestion' : function(isSA, isItem, isPic, picUrl, hasItem, questionText, shortAnswer, isAnswered, answerTime, ptsAwarded, groupName, questionNumber){
    check(isSA, Boolean);
    check(isItem, Boolean);
    check(isPic, Boolean);
    check(picUrl, String);
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
      isItem: isItem,
      isPic: isPic,
      picUrl: picUrl,
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

  'uploadImage' : function(questionId, downloadUrl){
    check(questionId, String);
    check(downloadUrl, String);
    questionsList.update({_id: questionId},
                          {$set: {
                            picUrl: downloadUrl
                          }
                        });
  }, //end upload image

  'submitAnswer' : function(questionID, SAnswer, itemAnswer, gpsLoc){

  // console.log(questionID, SAnswer, itemAnswer, gpsLoc);
    check(questionID, String);
    check(SAnswer, String);
    check(itemAnswer, String);
    check(gpsLoc, Object);

    questionsList.update({_id: questionID},
                          {$set: {
                            shortAnswer: SAnswer,
                            isAnswered: true,
                            answerTime: new Date(),
                            answerGps: gpsLoc,
                            hasItem: itemAnswer,
                            }
                        })//end the updateCall
  }

});//end methods

Meteor.publish('users', function(){
  console.log("Server: publishing all users");
  return Meteor.users.find();
})
