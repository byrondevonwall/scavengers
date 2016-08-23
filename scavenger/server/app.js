//always use the heroku server


if(Meteor.isServer){

  // var questionsArray =[
//     [false, false, true, '', false, "Years ago this sculpture was in another station, Did it 'Getaway' to its new location? Have a team member climb inside and take a seat. Take their photo: it will look pretty neat. TEAM MEMBER PHOTO", '', false, '', 175, '', 4],
//     [false, false, true, '', false, "Dragon Boats will race on Symphony Lake today. Asian Focus brings this unique Chinese event annually to Cary. Take a photo with a boat. TEAM PHOTO", '', false, '', 225, '', 5],
//     [false, false, true, '', false, "While you're eating Thanksgiving turkey, this high school's marching band will travel far. Find where they practice and take your team photo on the star TEAM PHOTO", '', false, '', 185, '', 6],
//     [false, false, true, '', false, "Waverly Place continues to grow and evolve, find one of the three newest places is the puzzle you'll solve. Here's a hint: Think beauty, fitness and wellness. Take a team photo in front of just one for your points. TEAM PHOTO", '', false, '', 250, '', 7],
//     [false, true, false, '', false, "This farm in the west started their Agri-tourism business  last fall with pumpkins, hayrides and a corn maze to test. You can see cotton getting ripe by Louis Stevens Road now I bet. Pick a bole and bring back proof of your visit. ITEM", '', false, '', 250, '', 8],
//     [false, false, true, '', false, "Rodney Carroll created this iconic statue in 1999 and it's come to stand for Cary by and by. Go find it and take your team photo interacting with our town symbol TEAM PHOTO", '', false, '', 125, '', 9],
//     [false, false, true, '', false, "These charming quiet children sit with their dog on a bench downtown- take a seat between them to show you're a mensch. Then take your photo TEAM MEMBER PHOTO", '', false, '', 55, '', 10],
//     [false, false, true, '', false, "Part A)Carolina Orthodontics & Children's Dentistry and Triangle Family Dentistry at Cary Park are conveniently located in the same office suite. They can serve all your dental needs from your first tooth to your last tooth and all the crowding in between!  Take a team photo with the tooth fairy to prove you were there! TEAM PHOTO", '', false, '', 400, '', 11],
//     [false, true, false, '', false, "Part B) Triangle Family Dentistry has a 2nd location down the road in Morrisville- make a visit and pick up a White Now! button. Show up at the finish with your team captain wearing the button for these points. ITEM", '', false, '', 300, '', 11.5],
//     [false, false, true, '', false, "Rated the top public high school in NC, 'Dare to Soar' with the 'spirit of the falcon' on this campus. Take a team photo flapping your wings with this bird. TEAM PHOTO", '', false, '', 155, '', 12],
//     [false, true, false, '', false, "A tennis championship named for one of our sponsors takes place here today. As proof of your visit bring back an order of play. ITEM", '', false, '', 230, '', 13],
//     [true, false, false, '', false, "A tennis championship named for one of our sponsors takes place here today. As proof of your visit bring back an order of play. ITEM", '', false, '', 85, '', 14],
//     [false, false, true, '', false, "Maximillians has been in Cary 25 years, and in 2016 the Hennessees bought it -everyone cheered! Come have a seat where their family's displayed. Take your team photo to prove that you played TEAM PHOTO", '', false, '', 250, '', 15],
//     [true, false, false, '', false, "A park is named for this former mayor who guided the growth of Cary including the installation of our first water treatment plant. Find the statue of this man- who is he and when did he serve?", '', false, '', 95, '', 16],
//     [false, true, false, '', false, "So many programs and events take place, this Program Guide might help you win the race. The Fall 2016 Parks Recreation and Cultural Resources Guide has it all.  Find one today and you will be set for the fall. ITEM", '', false, '', 50, '', 17],
//     [false, false, true, '', false, "Ashworth's Drugstore is the longest continually operating drugstore in Cary. Over 60 years they've served Cary customers with the courtesy they deserved. Pay them a visit, come on inside to find the mannequinn wearing Ashworth's tshirt with pride. Put your arm around him and shout HOTDOG! for your team photo", '', false, '', 350, '', 18],
//     [false, false, true, '', false, "Cary has 3 community centers that offer a variety of classes and activities but only one offers fencing. Have your team don masks and have a team photo taken by staff. UPLOAD TEAM PHOTO", '', false, '', 300, '', 19],
//     [false, true, false, '', false, "Cary's unique skate, bike and scooter park recently added a mural. Check the hours! Visit and have staff take your team photo in front of it.. UPLOAD TEAM PHOTO", '', false, '', 120, '', 20],
//     [true, false, false, '', false, "During renovation of this downtown theater an actual piece of film was found. Name the film and the stars", '', false, '', 75, '', 21],
//     [true, false, false, '', false, "This converted school has lots of history. Find the plaque in The Hall that states 'proud traditions' and lists all the Principals - name them. ENTER ALL NAMES IN PHONE APP for 175 pts total (all or nothing)", '', false, '', 175, '', 22],
//     [false, false, true, '', false, "I spy with my little eye - Cary Family Eye Care in their newly expanded location. They evaluate the entire eye for Glaucoma, Cataracts, or anything they spy. Have every team member put on a pair and snap a team photo to complete the equation. UPLOAD TEAM PHOTO for 250 pts", '', false, '', 250, '', 23],
//     [false, true, true, '', false, "Cary's C Tran expands ridership every year. It's a very good service from what we hear. On Maynard and Kildaire sit many cool shelters, they have art too so you won't swelter. Take a team photo sitting in a bus shelter with art visible. Extra points: Hold up a C-Tran BUS schedule!!! TEAM PHOTO", '', false, '', 250, '', 24],//this question needs variable points
//     [false, false, true, '', false, "Carpenter Farm Supply Co has been operating in Cary since 1895, and once served as the Carpenter post office. Pay them a visit and take a photo with the Company sign plainly visible TEAM PHOTO", '', false, '', 127, '', 25],
//     [false, false, true, '', false, "Did you know the Catamount's school is 10 years old this fall? Show your claws when you find the sign with the date and take your team's photo TEAM PHOTO", '', false, '', 155, '', 26],
//     [false, false, true, '', false, "Whether you call it table tennis or ping pong, at Triangle Table Tennis you can’t go wrong, as your team takes a table to play at the largest facility in the USA. Take a team photo playing table tennis today TEAM PHOTO", '', false, '', 350, '', 27],
//     [false, false, true, '', false, "here's a beach in Cary. Find it and take a photo on the shore TEAM PHOTO", '', false, '', 125, '', 28],
//     [false, false, true, '', false, "This water tower is the coolest in town, it's painted every year, they're not tearing it down. Can you take a photo with the new class of 2017 shown in the background? TEAM PHOTO", '', false, '', 100, '', 29],
//     [false, true, false, '', false, "This library is growing and will soon move down the road to become a Wake County Regional we are told. Use your library card today to check out a book. Then bring back your reciept for the judges to take a look. ITEM", '', false, '', 90, '', 30],
//     [false, true, true, '', false, "A) Orangetheory Fitness uses heart-rate monitor technology to make you work hard, mixing cardio and weights right from the start. Visit them in Morrisville and take a picture with a staff member… if you can get them to stand still! Pick up your folder, it's what you need to do, to complete this task and get credit for your clue TEAM PHOTO AND ITEM", '', false, '', 200, '', 31],
//     [false, false, true, '', false, "B) Orangetheory Fitness's newest location in Cary is out West where everything's new. Find the large Splat logo and take a team photo, its what you need to do TEAM PHOTO", '', false, '', 200, '', 31.33],
//     [false, false, true, '', false, "Bonus: If there was a class going on while you were there - extra bonus of 25 points", '', false, '', 25, '', 31.66],
//     [true, false, false, '', false, "Reading is the 'Cornerstone' for so many things. Find this art at a library, and see what it brings. Roman numerals on one bench can be seen, Translate what they say if you are so keen.  ANSWER", '', false, '', 75, '', 32],
//     [false, false, false, '', false, "The game of Cricket is played here today. It's not very far; it's on your way. Try to meet a player to take a team photo. TEAM PHOTO", '', false, '', 205, '', 33],
//     [false, true, false, '', false, "If you are a Cary town resident you can take your trash to the Convenience Center, its evident. They'll take even TVs that don't work any more, pick up the Talk Trash brochure so you know the score . ITEM", '', false, '', 55, '', 34],
//     [false, true, false, '', false, "Many think this high school is in Apex, but they'd be wrong. The stampede is strong in southern Cary. Find a Mustang and take a team photo TEAM PHOTO", '', false, '', 350, '', 35],
//     [false, false, true, '', false, "At this kiosk 2 Cary greenways collide - White Oak and Black Creek on the East Coast Greenway reside. Take a photo to show your pride. TEAM PHOTO", '', false, '', 135, '', 36],
//     [false, false, true, '', false, "'Mother always told you to eat a good breakfast'. This little spot has been open a year, did you know it? Have you been here? Find Bacon, Egg and Pancakes at The Egg & I and take your team photo. TEAM PHOTO", '', false, '', 250, '', 37],
//     [false, false, true, '', false, "In a park named for a mayor this greenway does run. Tucked away in Lockmere, it's lots of fun. Find the Eagle Scout project and take a photo", '', false, '', 150, '', 38],
//     [false, true, false, '', false, "Our pro soccer team is in Cary for good reason. Go to the stadium, there's games left in the season. To be sure you're on the up and up, bring back your souvenir Railhawks cup. ITEM", '', false, '', 225, '', 39],
//     [false, false, true, '', false, "Make the Michelin Man part of your team! You'll find him at Atlantic Tire & Service. This year The NC Tire Industry awarded them Dealer of the Year. Find this award, now hold it up high and give us a cheer! Team Photo holding award with Michelin Man. TEAM PHOTO", '', false, '', 350, '', 40],
//   ];//end questionsArray
// //isSA, isItem, isPic, picUrl, hasItem, questionText, shortAnswer, isAnswered, answerTime, ptsAwarded, groupName, questionNumber)
//   for(var team=0;team<=3;team++)
//   {
//
//     for(var q=0;q<questionsArray.length;q++)
//     {
//       Meteor.call('createQuestion', questionsArray[q][0], questionsArray[q][1], questionsArray[q][2], questionsArray[q][3], questionsArray[q][4], questionsArray[q][5], questionsArray[q][6], questionsArray[q][7], questionsArray[q][8], questionsArray[q][9], "team-"+team, questionsArray[q][11]);
//     }//end question for loop
//   }//end team for loop

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
