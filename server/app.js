//imports
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Feedback = require("./models/feedback");
constbodyParser = require("body-parser");
const app = express();
//DB Connection
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://admin:admin123@fmsmern.laux6.mongodb.net/fmsmern?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.connection.on("connected", () => {
  console.log("Database is connected");
});
mongoose.connection.on("error", () => {
  console.log("error ocuured");
});
//Middleware

app.use(cors());
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  Feedback.find()
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
//res.send("get request successful");
///});
app.post("/feedback", (req, res) => {
  console.log(req.body.username);
  console.log(req.body.coursename);
  console.log(req.body.rating);
  const feedback = new Feedback({
    _id: new mongoose.Types.ObjectId(),
    username: req.body.username,
    coursename: req.body.coursename,
    rating: req.body.rating,
  });

  feedback
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({ msg: "Successfullt posted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "Error Occurred" });
    });
});
app.post("/summary", (req, res) => {
  console.log(req.body.username);
  console.log(req.body.coursename);
  console.log(req.body.rating);
  console.log(req.body.comments);
  const feedback = new Feedback({
    _id: new mongoose.Types.ObjectId(),
    username: req.body.username,
    coursename: req.body.coursename,
    rating: req.body.rating,
    comments:req.body.comments,
  });

  feedback
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({ msg: "Successfullt posted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "Error Occurred" });
    });
});
app.get("/summary", (req, res) => {
  Feedback.find()
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
////res.send("posted data successfully");
app.delete("/feedback/:id", (req, res) => {
  const id = req.params.id;
  Feedback.remove({ _id: id }, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("error occurred");
    } else {
      res.status(200).json({ msg: "successfully deleted" });
    }
  });
});
app.put("/feedback/:id", (req, res) => {
  const username = req.body.username;
  const coursename = req.body.coursename;
  const rating = req.body.rating;
  const id = req.params.id;
  Feedback.update(
    { _id: id },
    {
      $set: {
        username: username,
        coursename: coursename,
        rating: rating,
      },
    }
  )
    .then((result) => {
      console.log(result);
      res.status(200).json({ msg: "Successfullt updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "Error Occurred" });
    });
});

//server
app.listen(5000, () => {
  console.log("server is liestening on 5000");
});
