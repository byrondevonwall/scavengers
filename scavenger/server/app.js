//always use the heroku server


if(Meteor.isServer){
//------password reset email config functions/vars----------//
  Accounts.emailTemplates.resetPassword.text = function(user, url){
    console.log('url change')
     url = url.replace('#/', '')
     return "Click this link to reset your password: " + url
   }

   Accounts.emailTemplates.siteName = "Cary Scavenger Hunt";
   Accounts.emailTemplates.from = "postmaster@caryscavengerhunt.pw";

   Accounts.emailTemplates.resetPassword.subject = function(){
     return "Cary Scavenger Hunt Password Reset Email"
   }

//this code uploads photos

  S3.config = {
    key: Meteor.settings.AWSAccessKeyId,
    secret: Meteor.settings.AWSSecretAccessKey,
    bucket: 'scavengerhuntphotos'
  }



  //   Slingshot.fileRestrictions("uploadFiles", {
  //     allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
  //     maxSize: 10 * 1024 * 1024 // 10 MB (use null for unlimited)
  // });
  //
  //   Slingshot.createDirective("uploadFiles", Slingshot.S3Storage, {
  //     bucket: "scavengerhuntphotos",
  //     acl: "public-read",
  //
  //
  //     authorize: function(){
  //       //you can't upload if youre not logged in
  //       if(!this.userId){
  //         var message = "Please log in before posting files";
  //         throw new Meteor.Error("Login Required", message);
  //       }
  //       return true;
  //     },
  //
  //     key: function(file){
  //       //store file in a directory based on a users team name
  //       var teamName = Meteor.user().roles.defaultGroup[0]
  //       return teamName + "/" + file.name;
  //     }
  //   });

};//end isServer


Meteor.methods({

  'createTeam' : function(teamName, type, overallPoints){
    check(teamName, String);
    check(type, String);
    check(overallPoints, Number);
    teams.insert({
      teamName: teamName,
      type: type,
      overallPoints: overallPoints,
    })
  },//end create team

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
  },

  'setRegisteredUser' : function(userEmail, userTeam){
    registeredUsers.insert({
      email: userEmail,
      role: userTeam
    });
  },

  'registerUser' : function(email, password, name, roles){
    console.log(email, password, name, roles)
    var id;

    id = Accounts.createUser({
      email: email,
      password: password,
      profile:{name: name}
    })
    console.log(id)
    if(roles.length > 0){
      Roles.addUsersToRoles(id, roles, 'defaultGroup')
    }
  },

  'updateTeamScore' : function(teamID, pts){
    var team = teams.findOne({_id: teamID});
    var oldPts = team.overallPoints;
    var newPoints = Number(oldPts + pts);
    teams.update({_id: teamID},
      {$set: {
        overallPoints: newPoints
      }
    });
  }//end update team score

});//end methods

Meteor.publish('users', function(){
  console.log("Server: publishing all users");
  return Meteor.users.find();
});

Meteor.publish('registeredUsers', function(){
  return Meteor.registeredUsers.find()
});

Meteor.publish('userList', function (){
  return Meteor.users.find({});
});

Meteor.publish('teams', function (){
  return Meteor.teams.find({});
});
