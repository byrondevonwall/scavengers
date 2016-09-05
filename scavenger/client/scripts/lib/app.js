import { Accounts } from 'meteor/accounts-base'

Meteor.startup(function () {

    sAlert.config({
        effect: '',
        position: 'top-right',
        timeout: 5000,
        html: false,
        onRouteClose: true,
        stack: true,
        offset: 0, // in px - will be added to first alert (bottom or top - depends of the position in config)
        beep: false,
        onClose: _.noop //
    });//end Salert config

});//end startup scripts

//https://www.sitepoint.com/creating-custom-login-registration-form-with-meteor/


if (Meteor.isClient) {

  // var teamNames =["THE GRAPE ESCAPE", "FIGHTING BROWNS", "FAB 4", "CAROLINA ORTHO PEDO", "PIGGLY WIGGLY PRINCESSES", "Trox", "Team West Cary", "Campbell Clan", "Team LooDu", "Riddle E-Racers", "Scholars & Ballers", "The 52'ers", "SimTown", "Red Field Trackers", "The Blue Whales", "There's Something About Cary", "Plaque busters", "x Marx the spot", "Mr. Roof's Minions", "Nannies & Sitters & Tutors, OH MY!", "Grinin Lizards", "Dam Those Beavers", "Super Certified", "Rain Makers", "SearStone #1", "SEARSTONE #2", "The Wimbledon Wolfpack", "Jalapeno Hotties", "Aloha Six", "It's Five O'clock Somewhere", "Eeyore's Buddies", "The Lip BALMs", "For Cake and Glory!", "A-Mades-ing", "Ack Attack", "The Hunter Games", "Meat Knuckles", "NC Myers Crew", "Marvelous Morellos", "awesometeam5000", "adultwalkup1", "adultwalkup2", "adultwalkup3", "familywalkup1", "familywalkup2", "familywalkup3", "cary citizen", "app store test"];
  //
  //
  // //a point value of -1 indicates a variable point question.
  //   var questionsArray =[
  //     [false, true, false, '', false, "Kramden Institute refurbishes used computers and laptops to donate them to kids without access at home. They accept laptops, CPUs, monitors, cellphones and peripherals. Did you bring any donations this morning? Show your Kramden tax receipt to get extra points today. CAPPED at 500 pts", '', false, '', -1, '', 1],
  //     [false, true, false, '', false, "Dorcas Ministries operates a very successful food pantry right here in Cary. Did you drop off non-perishables today at Morning Check-in? Please show your receipt.", '', false, '', -1, '', 2],
  //     [false, true, false, '', false, "Operation Eagle sends our overseas troops care packages as part of their mission. Did you drop off socks this morning when you checked in? Show your receipt", '', false, '', -1, '', 3],
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
  //     [true, false, false, '', false, "Find the statue of Walter Hines Page. He was a notable scholar, author, social reformer and ambassador to Great Britain. He's holding a book looking like a sage. What date was the book published to prove your visit was certain? ANSWER", '', false, '', 85, '', 14],
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
  //     [true, false, false, '', false, "In the children's nature trail of this Nature Center there's a mini scavenger hunt. Find the hidden mouse. Tell us where he lives ANSWER", '', false, '', 195, '', 41],
  //     [false, true, true, '', false, "The Friends of Page-Walker came up with a guide so you'll know Hillcrest Cemetery and what lies inside. The earliest burial is Nathaniel Jones. Bring a guide back and find his headstone among other famous Jones family members and take a TEAM PHOTO. Must have BOTH photo and & ITEM", '', false, '', 250, '', 42],
  //     [false, false, true, '', false, "This new memorial honors the victims and survivors of 2 American Eagle flights that crashed in Cary 6 years apart. Find this memorial and take a team photo.  TEAM PHOTO", '', false, '', 245, '', 43],
  //     [false, false, true, '', false, "The Shuckin' Shack Oyster Bar is a fun family place. Have a seat at the bar, they've saved you a space. Grab yourself an oyster and pick up a knife, they'll put you to work, having the time of your life. Ttake a team photo. TEAM PHOTO", '', false, '', 250, '', 44],
  //     [false, false, true, '', false, "Many think this high school is in Apex, but they'd be wrong. The stampede is strong in southern Cary. Find a Mustang and take a team photo TEAM PHOTO", '', false, '', 299, '', 45],
  //     [false, false, true, '', false, "Its call letters date back to the former longtime owner of the station, Durham Life Insurance Company, whose motto was 'We Protect The Family.' The studio is located in Raleigh, and the transmitter tower is in Cary. Go find the transmitter and see if you can take a team photo with the station call letters in the background. TEAM PHOTO", '', false, '', 200, '', 46],
  //     [false, false, true, '', false, "The Piedmont and Carolinian come to the Cary Depot twice a day. Get a schedule to learn when they arrive at Platform A.  Take a team photo with the train. Missed the train? Pick up a schedule and get some points. TEAM PHOTO = 350 pts  OR ITEM 100 pts", '', false, '', 350, '', 47.0],
  //     [false, true, false, '', false, "Missed the train? Pick up a schedule, you will still earn some points", '', false, '', 100, '', 47.5],
  //     [true, false, false, '', false, "Reply Ob/Gyn & Fertility is a new kind of Ob/Gyn Clinic.  What makes Reply so unique?  Come find “Ferti the Uterus” at their office and ask her why!  And while you’re there, just for fun, take a team photo with Ferti and upload it to Facebook! Ask Ferti the Uterus, “What makes Reply so unique?”  ANSWER", '', false, '', 250, '', 48],
  //     [false, false, true, '', false, "This Pollinator Garden was just declared a Certified Wildlife Habitat by the National Wildlife Federation. The Cary Garden for Wildlife Program was created to bolster efforts for the Town to earn standing as a Community Wildlife Habitat. Join the effort to “make a beautiful and healthy space for the three Bs - birds, bees and butterflies” . FIND THE STONE and take a photo. PHOTO OF ITEM", '', false, '', 90, '', 49],
  //     [false, false, true, '', false, "Do you like donuts to start your day? Duck Donuts are warm, delicious & made-to-order your way. Have each team member pick out their own little duck. Then take your team photo with plenty of pluck  TEAM PHOTO", '', false, '', 250, '', 50],
  //     [true, false, false, '', false, "On Cary's 100th anniversary, a time capsule was buried. It will be opened 100 years hence. Find the Sue Rowland Courtyard where it's buried and tell us what year will it be opened. ANSWER", '', false, '', 180, '', 51],
  //     [true, false, false, '', false, "Find Curvacious Kiss by Russ RuBert in a park out west. To find it will put you all to the test. Now stand beneath it to find its secret - what does it do? ANSWER", '', false, '', 249, '', 52],
  //     [false, false, true, '', false, "The votes were cast --- Chick-fil-A is still America’s most beloved fast-food chain (according to the American Consumer Satisfaction Index). So, CELEBRATE with the COW that says 'Eat More Chicken'. Find her at her 'home' in Waverly Place and enjoy a new, delicious 'treat'. Take that team photo with this icon, enjoy your 'treat' and be on your way! TEAM PHOTO", '', false, '', 350, '', 53],
  //     [false, false, true, '', false, "This empty house was built in 1803. It is one of only two exisiting examples of Board and Batten construction in Wake County. It has been placed on the National Register of Historic Places. A project Downtown may cause this to move. Take a Team Photo on the Porch  TEAM PHOTO", '', false, '', 111, '', 54],
  //     [false, false, true, '', false, "The Waldo House is the second example of Board and Batten construction in Wake County. It was moved from its originalto become a Bridal Cottage. Find it and take your team photo TEAM PHOTO", '', false, '', 91, '', 55],
  //     [true, false, false, '', false, "Everyone knows this famous Town mural. There's so much history in every detail. Find the grocery store pictured within it and tell us its name if you think you can win it. ANSWER", '', false, '', 105, '', 56],
  //     [false, false, true, '', false, "Did you know Cary has a Liberty Tree? Find Cary's Liberty Tree Memorial. It honors the people who made America Free. Take a photo of the plaque to prove it. PHOTO", '', false, '', 150, '', 57],
  //     [false, false, true, '', false, "'Let the fun begin at the Mayton Inn', Cary's Downtown Hotel. Come in through the lobby where the decor is so lovely you'll want to stay a spell. Find the library across from Highball, the bar. Relax on a cozy couch, it's not very far. Take your team photo  TEAM PHOTO", '', false, '', 250, '', 58],
  //     [false, false, true, '', false, "Thrift Shop, food pantry, job training and more. Dorcas Ministries helps people in transition. It's 'Christian Community In Action' with volunteers galore. Try on clothes in the thrift shop and make an exhibition. TEAM PHOTO ", '', false, '', 150, '', 59],
  //     [false, false, true, '', false, "The park with 2 names is where kids of all abilities can play together. It's their Anniversary party today. Find the landmark: KATAL the dragon and have your team photo taken with him.  TEAM PHOTO", '', false, '', 85, '', 60],
  //     [false, false, true, '', false, "'Come bounce off the walls' in a Jumpstreet dodgeball court. Get your team together for a team photo, now be a good sport!  TEAM PHOTO", '', false, '', 250, '', 61.0],
  //     [false, true, false, '', false, "Bonus points if you collect a coupon", '', false, '', 25, '', 61.5],
  //     [true, false, false, '', false, "The Town of Cary was declared a Bronze Level Bike Friendly Town. If you are spending some time on the roads today, notice the Bike Route Signs and tell us the Bike Route number of Cary Parkway ANSWER", '', false, '', 55, '', 62],
  //     [false, false, true, '', false, "The Town of Cary was declared a Bronze Level Bike Friendly Town. If you are spending some time on the roads today, notice the Bike Route Signs and tell us the Bike Route number of Cary Parkway ANSWER", '', false, '', 170, '', 63],
  //     [false, true, false, '', false, "Cary Y is a great place to get and stay fit, they have cardio equipment and classes that are really legit. Great programs designed just for teens. Leaders Club, Youth & Government, and Camp High Hopes teach what leadership means.  Find the 3 signs they want you to hold that feature their mission, take your team photo standing in position. TEAM PHOTO", '', false, '', 250, '', 64],
  //     [false, false, true, '', false, "Cary's newest Fire Station was a result of service demand growth over the last 38 years. The service area has a population of 14,371 and contains a total of 3,941 commercial and multifamily properties, more than any other service area in Town. Take a photo with a fireman at this station. TEAM PHOTO", '', false, '', 165, '', 65],
  //     [false, false, true, '', false, "This community center celebrates 25 years of serving Cary residents this year. Visit the lobby and find the timeline that was unveiled at the Lazy Daze re-dedication here! Prove it with a photo of your team's celebration. TEAM PHOTO", '', false, '', 125, '', 66],
  //     [false, false, true, '', false, "Dave & Busters was founded by a guy named Dave who loved all things fun & games and a guy named Buster who loved fine food and drink. Find the Giant Crane in the Midway, take your team photo, grab your 20 for 20 coupon to come back another day! TEAM PHOTO", '', false, '', 250, '', 67],
  //     [false, false, true, '', false, "Cary's newest park will be dedicated in the fall. Find the sheep and you might win it all!  Hang with the herd of sheep say BAAAA! Take a photo with the sheep TEAM PHOTO", '', false, '', 300, '', 68],
  //     [false, false, true, '', false, "Did you know this wonderful amphitheatre with the funny name honors a former Mayor? Find his likeness and take your team photo and shout 'Thanks Koka!' TEAM PHOTO", '', false, '', 150, '', 69],
  //     [true, false, false, '', false, "This new directional sign in Cary tells the way to our four Sister Cities. From the Sign, tell us the distance to Le Touquet France in kilometers. ANSWER", '', false, '', 110, '', 70]
  //  ];//end questionsArray

  // // //isSA, isItem, isPic, picUrl, hasItem, questionText, shortAnswer, isAnswered, answerTime, ptsAwarded, groupName, questionNumber)

  //   for(var team=0;team<teamNames.length;team++)
  //   {console.log("generating"+teamNames[team]+"'s questions");
  //
  //     for(var q=0;q<questionsArray.length;q++)
  //     {
  //       Meteor.call('createQuestion', questionsArray[q][0], questionsArray[q][1], questionsArray[q][2], questionsArray[q][3], questionsArray[q][4], questionsArray[q][5], questionsArray[q][6], questionsArray[q][7], questionsArray[q][8], questionsArray[q][9], teamNames[team], questionsArray[q][11]);
  //     }//end question for loop
  //   }//end team for loop


/*
var teamTypes = ["adult","adult","adult","corporate","adult","adult","adult","adult","adult","adult","adult","adult","family","adult","family","family","family","family","corporate","corporate","family","family","corporate","corporate","corporate","corporate","family","family","adult","adult","family","adult","adult","family","adult","adult","family","family","family","family","family","family","adult","adult", "dev","adult","adult","adult","family","family","family","dev","dev", "judges"];
=======
  //



var teamTypes = ["adult","adult","adult","corporate","adult","adult","adult","adult","adult","adult","adult","adult","family","adult","family","family","family","family","corporate","corporate","family","family","corporate","corporate","corporate","corporate","family","family","adult","adult","family","adult","adult","family","adult","adult","family","family","family","family","family","family","adult","adult", "dev","dev","dev","adult","adult","adult","family","family","family","dev","dev","dev", "judges"];
>>>>>>> 0b7304f10694e7823ad9e0dee46e9c610ea7ff33


var teams = ["THE GRAPE ESCAPE", "FIGHTING BROWNS", "FAB 4", "CAROLINA ORTHO PEDO", "PIGGLY WIGGLY PRINCESSES", "Trox", "Team West Cary", "Campbell Clan", "Team LooDu", "Riddle E-Racers", "Scholars & Ballers", "The 52'ers", "SimTown", "Red Field Trackers", "The Blue Whales", "There's Something About Cary", "Plaque busters", "x Marx the spot", "Mr. Roof's Minions", "Nannies & Sitters & Tutors, OH MY!", "Grinin Lizards", "Dam Those Beavers", "Super Certified", "Rain Makers", "SearStone #1", "SEARSTONE #2", "The Wimbledon Wolfpack", "Jalapeno Hotties", "Aloha Six", "It's Five O'clock Somewhere", "Eeyore's Buddies", "The Lip BALMs", "For Cake and Glory!", "A-Mades-ing", "Ack Attack", "The Hunter Games", "Meat Knuckles", "NC Myers Crew", "Marvelous Morellos", "The Cary Cats", "The Memphians", "The Hungry Hungry Hippos", "Cary Underwoods", "The Mandonias", "awesometeam5000", "adultwalkup1", "adultwalkup2", "adultwalkup3", "familywalkup1", "familywalkup2", "familywalkup3", "cary citizen", "app store test", "judges"];

for(var f=0;f<teams.length; f++){
  Meteor.call('createTeam', teams[f], teamTypes[f], 0);
  console.log("------------------------")
  console.log("team Name: "+teams[f]);
  console.log("team type: "+teamTypes[f]);
}
*/

var users =[
{email:"miketrombley88@yahoo.com", roles:["THE GRAPE ESCAPE", "adult"]},
{email:"mysterymaniac@aol.com" , roles:["FIGHTING BROWNS", "adult"]},
{email:"nannettecollier@hotmail.com", roles:["FAB 4", "adult"]},
{email:"lindsay@carolinaorthopedo.com", roles:["CAROLINA ORTHO PEDO", "corporate"]},
{email:"parkerlodder@gmail.com", roles:["PIGGLY WIGGLY PRINCESSES","adult"]},

{email:"ashley.pirolli@gmail.com", roles:["Trox","adult"]},
{email:"westcary@rainbowccc.com", roles:["Team West Cary", "adult"]},
{email:"lcampbellnc@gmail.com", roles:["Campbell Clan", "adult"]},
{email:"dydulaney11@gmail.com", roles:["Team LooDu", "adult"]},
{email:"mimi0643@gmail.com", roles:["Riddle E-Racers", "adult"]},
{email:"ashleyp18@gmail.com", roles:["Scholars & Ballers", "adult"]},
{email:"sheila@crosstowndowntown.com", roles:["The 52'ers", "adult"]},

{email:"juliahsimmons@gmail.com", roles:["SimTown", "family"]},
{email:"ncdouglasnc@gmail.com", roles:["Red Field Trackers", "adult"]},
{email:"ushma.shukla@gmail.com", roles:["The Blue Whales", "family"]},
{email:"stephgnc25@gmail.com", roles:["There's Something About Cary","family"]},

{email:"norabarber@gmail.com", roles:["Plaque busters", "family"]},
{email:"dan.marx@sas.com", roles:["x Marx the spot", "family"]},
{email:"Aaronz@mrroof.com", roles:["Mr. Roof's Minions","corporate"]},
{email:"abeard@collegenannies.com", roles:["Nannies & Sitters & Tutors, OH MY!","corporate"]},

{email:"glen.tetrault@yahoo.com", roles:["Grinin Lizards","family"]},
{email:"parents@julienmaia.com", roles:["Dam Those Beavers","family"]},
{email:"llynn@roofsbyaspen.com", roles:["Super Certified","corporate"]},
{email:"cwinnett@roofsbyaspen.com", roles:["Rain Makers","corporate"]},
{email:"lroach@searstone.com", roles:["SearStone #1","corporate"]},
{email:"aligay@searstone.com", roles:["SEARSTONE #2","corporate"]},

{email:"ersafarz@gmail.com", roles:["The Wimbledon Wolfpack","family"]},
{email:"lauratice22@yahoo.com", roles:["Jalapeno Hotties","family"]},
{email:"mike@mjdavis.org", roles:["Aloha Six","adult"]},
{email:"mccouch2@gmail.com", roles:["It's Five O'clock Somewhere","adult"]},

{email:"jenjen30@gmail.com", roles:["Eeyore's Buddies","family"]},
{email:"ortizbsn@gmail.com", roles:["The Lip BALMs","adult"]},
{email:"acsaville@gmail.com", roles:["For Cake and Glory!","adult"]},
{email:"rmades@gmail.com", roles:["A-Mades-ing","family"]},
{email:"jnet318@aol.com", roles:["Ack Attack","adult"]},

{email:"martha.sorrentino@gmail.com", roles:["The Hunter Games","adult"]},
{email:"kjones124@yahoo.com", roles:["Meat Knuckles","family"]},
{email:"scottmyersp@gmail.com", roles:["NC Myers Crew","family"]},
{email:"jeanniemmorello@gmail.com", roles:["Marvelous Morellos","family"]},

{email:"teenykins@gmail.com", roles:["The Cary Cats", "family"]},
{email:"memphis_whitleys@yahoo.com", roles: ["The Memphians", "Family"]},
{email:"j2newman@gmail.com", roles:["The Hungry Hungry Hippos", "Family"]},
{email:"testa023@gmail.com", roles:["Cary Underwoods", "adult"]},
{email:"bcouchon@nc.rr.com", roles:["The Mandonias", "adult"]},

{email:"byronssupersweetdevacct@gmail.com", roles:["awesometeam5000", "dev"]},//a
{email:"byrondevonwall@gmail.com", roles:["awesometeam5000", "dev"]},
{email:"mattkun@gmail.com", roles:["awesometeam5000", "dev"]},
{email:"walkup1@adultteam.com", roles:["adultwalkup1","adult"]},
{email:"walkup2@adultteam.com", roles:["adultwalkup2","adult"]},
{email:"walkup3@adultteam.com", roles:["adultwalkup3","adult"]},
{email:"walkup1@familyteam.com", roles:["familywalkup1","family"]},
{email:"walkup2@familyteam.com", roles:["familywalkup2","family"]},
{email:"walkup3@familyteam.com", roles:["familywalkup3","family"]},
{email:"lindsey.chester@carycitizen.com", roles:["cary citizen","dev"]},
{email:"2much4cary@gmail.com",roles:["cary citizen","dev"]},
{email:"test@appstoretester.com", roles:["app store test","dev"]},
{email:"judges@judges.judges", roles:["judges"]}
]
_.each(users, function(user){
  console.log(user.email + "added to " + user.roles)
  Meteor.call('setRegisteredUser', user.email, user.roles)
})


//----------login page helpers and events----------//
    //this instantiates the modal
    Template.loginPg.events({
      'click .needRegBtn': function(event){
        event.preventDefault();
        console.log("register modal is up");
        $("#regModal").removeClass('off');
        $(".modalGrey").removeClass('off');
        $(".needLog").addClass('off');
      }//end click .needReg event

    });//end loginPg events



//----------register page helpers and events----------//
    Template.register.events({
      //this creates a user based on whether they have a valid registration
      'submit form': function(event) {

          event.preventDefault();
          var regEmail = event.target.registerEmail.value;
          var regName = event.target.registerName.value
          var regPass = event.target.registerPassword.value;
          var confirmPass = event.target.confirmPassword.value;
          console.log(regEmail, regName, regPass, confirmPass);
          if(regPass === confirmPass){

            var user = registeredUsers.findOne({email: regEmail});
            console.log(user)
            if(user === undefined){
              sAlert.error("Please use the email address you used to register for this event on eventbrite.")
            } else {
              Meteor.call('registerUser', regEmail, regPass, regName, user.role, function(error, result){
                if(error){
                  sAlert.error(error);
                } else {

                  console.log(result)
                  sAlert.success('You have been registered, please Log In!');
                  $("#regEmail").val('');
                  $("#regName").val('');
                  $("#regPass").val('');
                  $("#regPassConf").val('');
                  $("#regModal").addClass('off');
                  $(".modalGrey").addClass('off');
                  $(".needLog").removeClass('off');
                }
              })
              // var id;
              //
              // id = Accounts.createUser({
              //   email: regEmail,
              //   password: regPass,
              //   profile:{name: regName}
              // })
              // console.log(id)
              // if(user.role.length > 0){
              //   Roles.addUsersToRoles(id, user.role, 'defaultGroup')
              // }


            }

          } else{
            sAlert.error('Please enter a matching password');
            $("#regPass").val('');
            $("#regPassConf").val('');
          }
      },//end 'submit form' function

      //this closes the registartion modal
      'click .cancelReg': function(event){
        event.preventDefault();
        console.log("register modal is down");
        $("#regModal").addClass('off');
        $(".modalGrey").addClass('off');
        $(".needLog").removeClass('off');
        $("#regEmail").val('');
        $("#regName").val('');
        $("#regPass").val('');
        $("#regPassConf").val('');
      }//end click modalGrey event


  });//end template.register.events



//----------login helpers and events----------//

    Template.login.events({
      'submit form': function(event) {
          var isGood = false;
          event.preventDefault();
          var logEmail = event.target.loginEmail.value;
          var logPass = event.target.loginPassword.value;
            console.log("Form submitted.", event.target.loginEmail.value);
            Meteor.loginWithPassword(logEmail, logPass, function(error){
              if(error)//if there is a problem with the login info
              {
                  console.log(error)
                if(error.message === "Incorrect password [403]"){
                  $('.resetPassBtn').removeClass('off');
                  console.log(error);
                  sAlert.error(error.message)
                }else{
                  sAlert.error(error.message)
                }
              }
              else
              {
                console.log(Meteor.user())
                if(Meteor.user().roles.defaultGroup[0] === "judges")
                {
                  FlowRouter.go("/teamsPg");
                }
                else
                {
                  FlowRouter.go('/dashboard');
                }
              }
            })//end loginwithpassword
        },//end 'submit form'

        'click .resetPassBtn' : function(){
          event.preventDefault();
          //get the user's email address

          // Accounts.emailTemplates.sendResetPasswordEmail.text = function(user, url){
          //   return "Click this link to reset your password: " + url +
          // }
          var userEmail = $('#loginEmail').val().toLowerCase().toString();
          console.log(userEmail)
          //try sending an email to that address
          Accounts.forgotPassword({email: userEmail}, function(err){
            if (err) {
              if (err.message === 'User not found [403]') {
                sAlert.error('This email does not exist, please Register');
              } else {
                sAlert.error(err.message);
              }
            } else {
              sAlert.success('Email Sent. Check your mailbox.');
              $('.resetPassBtn').addClass('off');
            }
          })
        }
    });//end login template events


//----------reset pasword form helpers and events----------//

//reset password forms and functions modifiied from https://gist.github.com/LeCoupa/9879066


  Template.ResetPassword.events({

    'submit #resetPasswordForm': function(e, t) {
      e.preventDefault();
      //get token from url
      var url = FlowRouter.current().path
      var token = url.substring(url.lastIndexOf('/')+1, url.length);
      // console.log(token)

      var resetPasswordForm = $(e.currentTarget),
          password = resetPasswordForm.find('#resetPasswordPassword').val(),
          passwordConfirm = resetPasswordForm.find('#resetPasswordPasswordConfirm').val();


      if (password != '' && passwordConfirm != '' && password === passwordConfirm) {
        Accounts.resetPassword(token, password, function(err) {
          if (err) {
            sAlert.error('We are sorry but something went wrong.');
          } else {
            sAlert.success('Your password has been changed. Welcome back!');
            var token = '';
            console.log(Meteor.user())
            FlowRouter.go('/dashboard')
          }
        });
      } else if(password === '' || passwordConfirm === ''){
        sAlert.error('You must input a password')
      } else if(password != passwordConfirm){
        sAlert.error('Your Passwords must match')
      }
      return false;
    },

    'click .reset-go-home' : function(){
      FlowRouter.go('/loginPg')
    }

  });//end events

//----------dashboard helpers and events----------//

Template.dashboard.events({
  'click .logoutBtn': function(event){
    // event.preventDefault();
    Meteor.logout();
    FlowRouter.go("/loginPg");
    console.log("logged out");
  },//end click.logoutbtn

  'click .hamburger': function(event){
    // event.preventDefault();
      $(".hamMenu").removeClass('off');
      $(".modalGrey").removeClass('off');
      console.log("opened hamburger menu");
  },//end click.logoutbtn

  'click .closeBurger': function(event){
    $(".hamMenu").addClass('off');
    $(".modalGrey").addClass('off');
    console.log("closed hamburger menu");
  },//end click modalGrey event

  'click .sponsorsPg' : function(){
    FlowRouter.go('/sponsorsPg');
  },//end back to questions button event

  'click .aboutPg' : function(){
    FlowRouter.go('/aboutPg');
  },//end back to questions button event

  'click .qBox': function(event){
    // event.preventDefault();
    // sAlert.error('Questions Are not Currently Available')
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

//----------Sponsors page events-------------------//

Template.sponsorsPg.events({
  'click .back' : function(){
    FlowRouter.go('/dashboard');
  },//end back to questions button event
});

//----------aboutPg page events-------------------//

Template.aboutPg.events({
  'click .back' : function(){
    FlowRouter.go('/dashboard');
  },//end back to questions button event
});

//----------answer page helpers and events----------//

    Template.answerPage.helpers({
      'theQuestion' : function(){
        var testId = Session.get('selectedQuestion')
        var q = questionsList.findOne(testId);
        return q
      }
    });

    Template.answerPage.events({
      'click .submitAnswerBtn' : function(){
        var SAnswer = $('#sa-answer').val();
        var itemAnswer = $('input[name="gotItem"]:checked').val();
        console.log("do we have the item? "+itemAnswer);
        var questionID = Session.get('selectedQuestion');
        var gpsLoc = Geolocation.latLng();

        //so check doesnt get hung on empty answers/not being able to pull geoloc in time
        if(SAnswer == null || undefined){
          SAnswer = 'not answered'
        };
        if (itemAnswer == null || undefined){
          itemAnswer = 'false';
        };
        if(gpsLoc == null){
          gpsLoc = {};
        }
        //call method to submit the answer
        // console.log(questionID, SAnswer, itemAnswer, gpsLoc)
        Meteor.call('submitAnswer', questionID, SAnswer, itemAnswer, gpsLoc, function(error, result){
          if(error){
            sAlert.error(error);
          } else{
            // console.log(result);
            FlowRouter.go('/dashboard');
          }
        });

      },//end submitanswer event

      'click .back' : function(){
        FlowRouter.go('/dashboard');
      },//end back to questions button event


    });//end all answer page events.



//----------file-uploader directives events and helpers----------//

  //this restricts the type/size of file that users can upload to AWS
  // Slingshot.fileRestrictions("myFileUploads", {
  //   allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
  //   maxSize: 10 * 1024 * 1024 // 10 MB (use null for unlimited)
  // });

  //click .picBox
  //change #imgUpload
  Template.uploader.events({

    // 'click .picBox' : function(){
    //   console.log("clicked the big img upload.")
    //   $("#uploadInput").trigger('click');
    // },//end back to questions button event


    //upload to AWS once file is selected
    'change #imgUpload' : function(){
      var files = $("#uploadInput")[0].files;
      console.log(files[0].name)
      var userTeam = Meteor.user().roles.defaultGroup[0]
      var questionId = Session.get('selectedQuestion');

      S3.upload({
        files: files,
        path: userTeam
      }, function(err, res){
        if(err){
          sAlert.error(err)
        } else if(res){
          console.log(res.secure_url)
          Meteor.call('uploadImage', questionId, res.secure_url)
        }
      }
    );

      // var uploader = new Slingshot.Upload("uploadFiles");
      // var questionId = Session.get('selectedQuestion');
      // uploader.send(document.getElementById('uploadInput').files[0], function (error, downloadUrl) {
      //   if (error) {
      //     // Log service detailed response
      //     // console.log(error)
      //     console.error('Error uploading' );
      //     sAlert.error(error);
      //   }
      //   else {
      //     //change to meteor method
      //     Meteor.call('uploadImage', questionId, downloadUrl);
      //   }
      // });

    }//end click picBox fn
  });

//----------geolocation helpers events and directives----------//
  //this is the map zoom variable for google maps
  var MAP_ZOOM = 15;

  //this loads google maps for geolocation
  Meteor.startup(function(){
    GoogleMaps.load({key: 'AIzaSyA4eOr-DCvq3nHOFBDMzm6hXJRFYp0jnQI'});
  });

  Template.map.helpers({
    //set up geolocation error handling
    geolocationError : function(){
      var error = Geolocation.error()
      return error && error.message;
    },

    //set up google map options
    mapOptions: function(){
      //declare user's current lat/lng
      var latLng = Geolocation.latLng();

      //init map once latLng is grabbed
      if (GoogleMaps.loaded() && latLng){
        return{
          center: new google.maps.LatLng(latLng.lat, latLng.lng),
          zoom: MAP_ZOOM
        };
      }
    }
  });//end helpers

  //set map marker and make map update dynamically as the user moves around
  Template.map.onCreated(function(){

    var self = this;


    GoogleMaps.ready('map', function(map){
      //this code can be modified to show a the item's location with a marker
      // var latLng = Geolocation.latLng();
      // //position marker at latLng
      // var marker = new google.maps.Marker({
      //   position: new google.maps.LatLng(latLng.lat, latLng.lng),
      //   map: map.instance
      // });

      var marker;
      //create and move the marker as lat/lng change
      self.autorun(function(){
        var latLng = Geolocation.latLng();
        if (! latLng)
        return;

        //if the marker doesn't exist, create it.
        if (! marker){
          marker  = new google.maps.Marker({
            position: new google.maps.LatLng(latLng.lat, latLng.lng),
            map: map.instance
          });
        }

        //the marker already exists, but position needs to update
        else {
          marker.setPosition(latLng);
        }

        //center and zoom map vie to current position
        map.instance.setCenter(marker.getPosition());
        map.instance.setZoom(MAP_ZOOM);
      });
    });
  });


  //----------------------teamsPg events ---------------------------
//these two variables are used by multiple helpers and events in the teamspg and verifypg which is why theyre global in scope.
var clickedTeam;
var selectedQ;
var ourQuestions;
var qnum;

Template.teamsPg.events({

  'click .teamLink': function(e) {
    clickedTeam = $(e.target).attr("id");
    console.log("i clicked on: "+clickedTeam);
    FlowRouter.go('verifyPg');
  },

  'click .backToLogin': function () {
    Meteor.logout();
    FlowRouter.go("/loginPg");
  }

});

//--------------------TEAMLISTCONTAINER HELPERS----------------------
  Template.teamListContainer.helpers({

  'teams': function (type) {

    if(type === "adult")
    {
      var adultTeams = teams.find({type: 'adult'}).fetch();
      return adultTeams;
    }
    else if(type === "family")
    {
      var familyTeams = teams.find({type: 'family'}).fetch();
      //$(".dumb").text(familyTeams);
      return familyTeams;
    }
    else if(type === "corporate")
    {
      var corporateTeams = teams.find({type: 'corporate'}).fetch();
      return corporateTeams;
    }
  }//end teams function

  });//end teamlist helpers

//---------------------verifyPg helpers----------------------

Template.verifyPg.helpers({

  'questions': function () {
    console.log("inside the questions helper");
    console.log(clickedTeam);
    ourQuestions = questionsList.find({groupName: clickedTeam, isAnswered: true}).fetch();
    console.log(ourQuestions);
    return ourQuestions
  },//end questions function

  'questionToVerify': function () {
    console.log("in selectedQuestion");
    return Session.get('questionToVerify');
  },//end questions function

  'selectedTeam': function(){
    //console.log("inside the selectedTeam helper, clickedTeam = "+clickedTeam)
    var ourTeam = teams.find({teamName: clickedTeam}).fetch();
    //console.log("selectedTeam: ")
    //console.log(ourTeam);
    return ourTeam;
  }

  }); //end helpers

//------------------------verify pg events-----------------------

Template.verifyPg.events({

  'click .oneQuestion': function (e) {
      qNum = $(e.target).attr("id");
      console.log("number of clicked question: "+qNum);

      //questionSelected = true;
      $(".oneQuestion").removeClass("selected");
      $(e.target).addClass("selected");

      for(var i = 0;i < ourQuestions.length;i++)
      {
        if(ourQuestions[i].questionNumber == qNum)
        {
          console.log("found a match!");
          Session.set('questionToVerify', ourQuestions[i]);

          selectedQ = ourQuestions[i];
          console.log(selectedQ);
        }
        else
        {
          console.log("question not found?");
        }
      }

    },//end onequestions function

    'click .backToTeams': function () {
      FlowRouter.go("teamsPg");
    },

    'click .yep': function (e) {
      var tempQ = Session.get('questionToVerify');
      var tempQnum = tempQ.questionNumber;
      $("#"+tempQnum).addClass("verified");

      if(tempQ.ptsAwarded == -1)
      {
        console.log("...pop up the variable points modal...");
      }
      else
      {
        var tempName = tempQ.groupName;
        var tempTeam = teams.findOne({teamName: tempName});
        console.log("tempTeam: "+tempTeam.teamName);
        console.log(tempTeam.overallPoints+"+"+tempQ.ptsAwarded);
      }
      console.log("this question counts!");
      //fakeScore = fakeScore + this.
    },

    'click .nope': function (e) {
      var tempQ = Session.get('questionToVerify');
      var tempQnum = tempQ.questionNumber;
      $("#"+tempQnum).addClass("rejected");

      console.log("this question doesnt count!");
    }

  });//end verifypg events


}//end isclient
