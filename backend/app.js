const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const studentTicketRoutes = require("./routes/studentTicketRouter");
const facultyTicketRoutes = require("./routes/facultyTicketRoutes");
const evaluationTicketRoutes = require("./routes/evaluationRoute");
const solutionRoutes = require("./routes/solutionRoute");

// Connection to MongoDB
mongoose
  .connect("mongodb://localhost:27017/helpdesk")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => console.log(err));

const app = express();
//app.use(cors)// cross resource origin
app.use(express.urlencoded({ extended: true }));
app.use(express.static("assets"));
app.use(express.json()); // To parse the incoming requests with JSON payloads

app.use("/api/student-tickets", studentTicketRoutes);
app.use("/api/faculty-tickets", facultyTicketRoutes);
app.use("api/evaluations", evaluationTicketRoutes);
app.use("api/solutions", solutionRoutes);

module.exports = app;
