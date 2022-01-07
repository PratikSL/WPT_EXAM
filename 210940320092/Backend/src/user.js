const mysql = require("mysql");
const Promise = require("bluebird");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "wptexam",
};

async function connectionCheck() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("Connection is sucessfull");
  await connection.endAsync();
  console.log("Connection Ended sucessfull");
}

connectionCheck();

async function addMessages(user) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `insert into messaggetable values(?)`;
  await connection.queryAsync(sql, [user.messages]);
  await connection.endAsync();
  console.log("Message added Successfully !! ");
}

async function showMessages() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let sql = `select * from messaggetable`;
  let output = await connection.queryAsync(sql, []);
  console.log(output);
  return output;
}

module.exports = { addMessages, showMessages };
