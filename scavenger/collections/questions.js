questionsList = new Mongo.Collection('questions')

const questionsListIndex = new EasySearch.Index({
  collection: questionsList,
  fields: ['questionNumber'],
  engine: new EasySearch.Minimongo()
});
