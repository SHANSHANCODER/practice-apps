const mysql = require("mysql2");
const Promise = require("bluebird");
const { application } = require("express");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});
/*
DB_HOST="localhost"
DB_USER="root"
DB_PASS=""
*/
const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS `responses`(`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY, `session_id` VARCHAR(200), `name` VARCHAR(100), `emailaddress` VARCHAR(100), `password` VARCHAR(100),`address1` VARCHAR(100),`address2` VARCHAR(100),`city` VARCHAR(20), `state` VARCHAR(20),`zip` INT, `phone` INT,`card` INT,`expiry` INT, `cvv` INT,`billzip` INT)"
    )
  )
  .catch((err) => console.log(err));

module.exports = db;
