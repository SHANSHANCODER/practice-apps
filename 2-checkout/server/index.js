require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");
const e = require("express");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);
app.use(express.json());

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

// app.post('/test',(req,res)=>{

//     console.log("req.body>>>>",req.body)
//     //console.log(req.body)

//     res.status(200).send()
// })
app.post("/f1", (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let pw = req.body.password;
  sessionid = req.session_id;
  queryifexisit =
    `select id from responses where session_id = ` + '"' + sessionid + '";';
  db.query(queryifexisit, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result.length === 0) {
        let insert =
          "insert into responses (session_id,name,emailaddress,password) values (" +
          '"' +
          sessionid +
          '","' +
          name +
          '","' +
          email +
          '","' +
          pw +
          '")';
        console.log("insert>>>>>>>", insert);
        db.query(insert, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.status(200).send(result);
          }
        });
      } else {
        let update =
          "update responses set name=" +
          '"' +
          name +
          '",' +
          "emailaddress=" +
          '"' +
          email +
          '",password=' +
          '"' +
          pw +
          '" where session_id=' +
          '"' +
          sessionid +
          '"';
        db.query(update, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.status(200).send(result);
            console.log("user exists already, update user info");
          }
        });
      }
    }
  });
});
//-------------> second page 
app.post("/f2", (req, res) => {
  let add1 = req.body.add1;
  let add2 = req.body.add2;
  let city = req.body.city;
  let state = req.body.state;
  let zip = req.body.zip;
  let phone=req.body.phone;
  sessionid = req.session_id;
  console.log(req.body);
  let update =
    "update responses set address1=" +
    '"' +
    add1 +
    '",' +
    "address2=" +
    '"' +
    add2 +
    '",city=' +
    '"' +
    city +
    '",state=' +
    '"' +
    state +
    '",zip=' +
    '"' +//might have bug
    phone +
    '",phone=' +
    '"' + //until here 
    zip +
    '" where session_id=' +
    '"' +
    sessionid +
    '"';
  db.query(update, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(result);
      console.log("user exists already, update user info");
    }
  });
});
//-------------> thirdpage 
app.post("/f3", (req, res) => {
    let card = req.body.card;
    let expiry = req.body.expiry;
    let cvv = req.body.cvv;
    let bzip = req.body.bzip;
    sessionid = req.session_id;
    console.log(req.body);
    let update =
      "update responses set card=" +
      '"' +
      card +
      '",' +
      "expiry=" +
      '"' +
      expiry +
      '",cvv=' +
      '"' +
      cvv +
      '",billzip=' +
      '"' +
      bzip +
      '" where session_id=' +
      '"' +
      sessionid +
      '"';
    db.query(update, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send(result);
        console.log("user exists already, update user info");
      }
    });
  });

  //-----------> checkoutpage
  app.get('/checkout',(req,res)=>{
    sessionid = req.session_id;
    console.log(sessionid)
      let search="select * from responses where session_id=" +'"'+sessionid+'"'
db.query(search,(err,results)=>{
    if(err){
        console.log(err);
    } else {
        res.status(200).send(results)
        console.log(results)
    }
})
  })
// app.post('/:x',(req,res)=>{
// res.send("x")
// console.log(req.params)
// console.log(req.query)
// })
/****
 * app.post()
 *
 * Other routes here....
 *
 *
 */


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
