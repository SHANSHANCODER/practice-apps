require("dotenv").config();
const express = require("express");
const path = require("path");
const { callbackify } = require("util");
const db = require("./db.js");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.post("/glossories", function (req, res) {
  console.log(req.body);
  db.save(req.body, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});
//app.post
//store the information to db
console.log("123");

app.get("/glossories", (req, res) => {
  db.retrieveall((err, result) => {
    if (err) {
      res.send("err");
    } else {
      res.status(200).send(result);
      //   console.log("result>>>",result)
    }
  });
});

app.delete("/glossories", (req, res) => {
  var keywordtodelte = req.body;
  console.log("req.body.data>>>>", req.body);
  db.deleteGlossary(keywordtodelte, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.status(200).send();
    }
  });
});

//app.put("/glossories".(req,res)=> {
//update the key and the meaning to the same _id data entry
//})
//app.get
//retrive the info from db

//app.delete
//delete info from db

/****
 *
 *
 * Other routes here....
 *
 *
 */

console.log("abd");

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
