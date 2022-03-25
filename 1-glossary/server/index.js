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

//---------------------> handle adding new entry
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

//-----------------------> handle retriveing all entries from db
app.get("/glossories", (req, res) => {
    console.log("get got invoked")
  db.retrieveall((err, result) => {
    if (err) {
      res.send("err");
    } else {
      res.status(200).send(result);
      //   console.log("result>>>",result)
    }
  });
});
//---------------------> handle deleting selected word
app.delete("/glossories", (req, res) => {
  var keywordtodelte = req.body;
  // console.log("req.body.data>>>>", req.body);
  db.deleteGlossary(keywordtodelte, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.status(200).send();
    }
  });
});
//-----------------> handle updating existing word
app.put("/glossories", (req, res) => {
  var keywordtoupdate = req.body;
  db.updateGlossary(keywordtoupdate, (err, result) => {
    if (err) {
      res.send("err");
    } else {
      res.status(200).send(result);
    }
  });
  //console.log(req.body)
});
//---------------------> handle search keyword from db
app.get("/glossories/search", (req, res) => {
  console.log("req.query>>>>>>",req.query.searchword);
  db.searchGlossary(req.query.searchword, (err, result) => {
    if (err) {
      res.send("err");
    } else {
      res.status(200).send(result);
     // console.log("searchresult from db>>>>>>",result)
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

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
