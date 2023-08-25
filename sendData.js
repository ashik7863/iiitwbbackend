const mongoose = require('mongoose');

const Question=require('./TallyQuestion');

const tallyData=require('./questionsData');

const Basic=require('./basicQuestion');
const BasicSchema=require('./QuestionSchemaBasic');

mongoose.connect('mongodb+srv://ashik123:7872145792@cluster0.iptlfq6.mongodb.net/iiitwb?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// async function seedData() {
//   await Question.deleteMany({}); // Clear existing data

//   for (const questionData of tallyData) {
//     await Question.create(questionData);
//   }

//   console.log('Data seeded successfully');
//   mongoose.disconnect();
// }

// seedData();

async function seedData() {
  await BasicSchema.deleteMany({}); // Clear existing data

  for (const questionData of Basic) {
    await BasicSchema.create(questionData);
  }

  console.log('Data seeded successfully');
  mongoose.disconnect();
}

seedData();
