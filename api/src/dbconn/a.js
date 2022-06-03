// const { json } = require("express");
// const express = require("express");
// var mysql = require('mysql');

// const app = express();
// app.use(express.json())
// const port = process.env.port || 3000;

// // var pool = mysql.createPool({

// //     host: 'localhost',
// //     user: 'root',
// //     password: '',
// //     database: 'cruddb',
// // });

// var connection = mysql.createConnection(
//     {
//         host: 'localhost',
//         user: 'root',
//         password: '',
//         database: 'cruddb',


//     }
// );
// connection.connect(function (err) {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }

//     console.log('connection succesfull and server connected as id ' + connection.threadId);
// });
// var sql = 'SELECT * FROM `student`';
// connection.query(sql, function (error, results, fields) {
//     if (error) throw error;
//     app.get("/api", (req, res) => {
//         console.log()
//         res.json(results);
//     })

// });
// connection.end(function (err) {
//     // The connection is terminated now
//     console.log(err);
// });
// // require("./models/students");
// // const a = require("./dbconn/conn");
// // var a = require("./models/students");

// class Students {

//     constructor(name, mobile, email, branch, fee) {
//         this.name = name;
//         this.mobile = mobile;
//         this.email = email;
//         this.branch = branch;
//         this.fee = fee;
//     }
// }

// app.post("/api/students", (req, res) => {
//     const obj = new Students();
//     var mybody = req.body;
//     obj.name = mybody.name;
//     obj.mobile = mybody.mobile;
//     obj.email = mybody.email;
//     obj.branch = mybody.branch;
//     obj.fee = mybody.fee;
//     var sqlInsert = 'INSERT INTO student(name,mobile,email,branch,fee) VALUE (?,?,?,?,?)';
//     var senddata = connection.query(sqlInsert, [obj.name, obj.mobile, obj.email, obj.branch, obj.fee], function (err, results, fields) {

//     });
//     res.send(senddata);


// });

// app.listen(port, () => console.log('Server is running at port number ${port}'))