const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Question = require("./TallyQuestion");
const Question1 = require("./QuestionSchemaBasic");
const User = require("./Schema/Register");

// Import the schema
// const questionsData = require('./questionsData'); // Import the MCQ data
const AnswerSubmit = require("./AnswerSubmit");
const Score = require("./Schema/Score");

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
mongoose.connect("mongodb+srv://ashik123:7872145792@cluster0.iptlfq6.mongodb.net/iiitwb?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/register", async (req, res) => {
  const { user, course, registrationno, password, cpassword } = req.body;
  const userNameCheck = await User.findOne({ user: user });
  if (userNameCheck) {
    return res.json({ msg: "Username already used", status: false });
  }

  let data = new User({
    user,
    course,
    registrationno,
    password,
    cpassword,
  });
  await data.save();
  return res.json({
    msg: "Account Successfully Created, Please Login Now",
    status: true,
  });
});
app.post("/login", async (req, res) => {
  const { user, password } = req.body;
  const userCheck = await User.findOne({ user: user });
  if (!userCheck) {
    return res.json({ msg: "Incorrect Username", status: false });
  }
  let isMatch = password === userCheck.password;
  if (!isMatch) {
    return res.json({ msg: "Incorrect Password", status: false });
  }
  return res.json({
    status: true,
    userdetails: userCheck,
  });
});

app.get("/getstudent", async (req, res) => {
  try {
    const student = await User.find({});
    res.json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/getuser/:name", async (req, res) => {
  const name = req.params.name;
  try {
    const employee = await User.findOne({ user: name });
    res.json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/details/:reg", async (req, res) => {
  const reg = req.params.reg;
  try {
    const details = await AnswerSubmit.find({ registrationNumber: reg });
    res.json(details);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

function getRandomQuestions(questionsArray, count) {
  const shuffledQuestions = questionsArray.sort(() => 0.5 - Math.random());
  return shuffledQuestions.slice(0, count);
}

app.get("/questions", async (req, res) => {
  try {
    const questionsFromSchemaA = await Question.find();
    const questionsFromSchemaB = await Question1.find();

    const randomQuestionsFromSchemaA = getRandomQuestions(
      questionsFromSchemaA,
      60
    );
    const randomQuestionsFromSchemaB = getRandomQuestions(
      questionsFromSchemaB,
      40
    );

    const questions = randomQuestionsFromSchemaA.concat(
      randomQuestionsFromSchemaB
    );
    res.json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

app.post("/submit-responses", async (req, res) => {
  try {
    const { responses } = req.body;
    const { user } = req.body;
    let score = 0;
    responses.forEach((response, index) => {
      if (response.selectedOptionIndex != undefined) {
        if (response.selectedOptionIndex === response.correctOptionIndex) {
          score++;
        }
      }
    });

    await AnswerSubmit.insertMany(responses);

    const { userName, registrationNumber,course,takenTime } = user

    await Score.create({
      userName,
      course,
      registrationNumber,
      takenTime,
      score,
    });

    res.json({ status: 200, message: "Responses submitted successfully" });
  } catch (error) {
    console.error("Error saving user responses:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

app.get("/api/get-responses", async (req, res) => {
  try {
    const responses = await Score.find(); // Assuming you have a UserResponse model
    res.json(responses);
  } catch (error) {
    console.error("Error fetching responses:", error);
    res.status(500).json({ message: "Server Error" });
  }
});
app.get("/api/get-response/:id", async (req, res) => {
  
  const id=req.params.id;
  try {
    const responses = await Score.findOne({registrationNumber:id});
    res.json(responses);
  } catch (error) {
    console.error("Error fetching responses:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
