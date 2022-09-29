"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3001;
app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
});
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
// const connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : 'q1w2e3r4t5y6',
//     database : 'usersdb2'
//   });
// connection.connect();
// connection.connect(function(err){
//   if (err) {
//     return console.error("Ошибка: " + err.message);
//   }
//   else{
//     console.log("Подключение к серверу MySQL успешно установлено");
//   }
// });
// connection.query("SELECT * FROM users",
//   function(err, results, fields) {
//     console.log(err);
//     console.log(results); // собственно данные
//     console.log(fields); // мета-данные полей 
// });
// const user = [4,"Tom", "tomphson","sasa"];
// const sql = "INSERT INTO users(name, username, password) VALUES(?, ?, ?, ?)";
// connection.query(sql, user, function(err, results) {
//     if(err) console.log(err);
//     else console.log("Данные добавлены");
// });
// connection.query("SELECT * FROM users")
//           .then(result =>{
//             console.log(result[0]);
//           })
//           .catch(err =>{
//             console.log(err);
//           });
// connection.query("CREATE DATABASE usersdb2",
//   function(err, results) {
//     if(err) console.log(err);
//     else console.log("База данных создана");
// });
// const sql = `create table if not exists users(
//   id int primary key auto_increment,
//   name varchar(255) not null,
//   age int not null
// )`;
// connection.query(sql, function(err, results) {
//     if(err) console.log(err);
//     else console.log("Таблица создана");
// });
// const sql = `INSERT INTO users(name, age) VALUES('Анва', 30)`;
// connection.query(sql, function(err, results) {
//     if(err) console.log(err);
//     console.log(results);
// });
// const users = [
//   ["Bob", 22],
//   ["Alice", 25],
//   ["Kate", 28]
// ];
// const sql = `INSERT INTO users(name, age) VALUES ?`;
// connection.query(sql, [users], function(err, results) {
//     if(err) console.log(err);
//     console.log(results);
// });
// const sqlQuery = `SELECT * FROM users`;
// connection.query(sqlQuery, function(err, results) {
//     if(err) console.log(err);
//     console.log(results);
// });
// const sqlFilter = `SELECT * FROM users WHERE name=? AND age=?`;
// const filter = ["Bob", 22];
// connection.query(sqlFilter, filter, function(err, results) {
//     if(err) console.log(err);
//     console.log(results);
// });
// const sqlUpdate = `UPDATE users SET age=? WHERE name=?`;
// const data = [34, "Bob"];
// connection.query(sqlUpdate, data, function(err, results) {
//     if(err) console.log(err);
//     console.log(results);
// });
// const sqlDelete = "DELETE FROM users WHERE name=?";
// const data = ["Sam"]; // удаляем пользователей с именем Sam
// connection.query(sqlDelete, data, function(err, results) {
//     if(err) console.log(err);
//     console.log(results);
// });
// connection.end(function(err) {
//   if (err) {
//     return console.log("Ошибка: " + err.message);
//   }
//   console.log("Подключение закрыто");
// });
//# sourceMappingURL=app.js.map