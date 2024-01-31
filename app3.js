const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

mongoose.connect("mongodb://localhost:27017/people");

const peopleSchema = mongoose.Schema({
  name: String,
  age: Number,
  fruit: String,
});

const Person = new mongoose.model("Person", peopleSchema);

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

/*

app.post("/", function (req, res) {
  var name, age, fruit;
  name = req.body.name;
  age = req.body.age;
  if (req.body.fruit) {
    fruit = req.body.fruit;
    const person = new Person({
      name: name,
      age: age,
      fruit: fruit,
    });
    person.save();
  } else {
    const person = new Person({
      name: name,
      age: age,
    });
    person.save();
  }

  res.write("Thanks for posting and updated to DataBase Successfully");
  res.send();
});

*/

app.post("/", function (req, res) {
  var name = req.body.checkName;
  console.log(name);
  res.write("Looking in DataBase for " + name);

  const sol = Person.find({name:'Remy Hadley'});
  console.log(sol);
  res.send();
});

app.listen(3000, function () {
  console.log("Server listening at port 3000");
});
