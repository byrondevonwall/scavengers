questionsList = new Mongo.Collection('questions')

questionsListIndex = new EasySearch.Index({
  collection: questionsList,
  fields: ['questionNumber'],
  engine: new EasySearch.Minimongo()
});
