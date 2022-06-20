// const express = require("express");

// const app = express();
// const cors = require("cors");
// const pool = require("./src/dbconn/conn");
// const { json } = require("body-parser");

// const port = process.env.port || 3000;

// //midlewire
// app.use(cors());
// app.use(express.json());


// //start--------------------------------create post
// app.post("/api/student", async (req, res) => {
//     try {
//         // var a = req.params;
//         var mybody = req.body;
//         const data = {
//             name: mybody.name,
//             mobile: mybody.mobile,
//             email: mybody.email,
//             branch: mybody.branch,
//             fee: mybody.fee,
//         }

//         var sqlInsert = "INSERT INTO student(name,mobile,email,branch,fee) VALUES (?,?,?,?,?);"
//         var sql = await pool.query(sqlInsert, Object.values(data));
//         res.send(sql.json);
//         console.log("Student have added successfully");
//         console.log(req.body);

//     } catch (error) {
//         console.error("error" + error)
//     }
// });
// /*-----------------------------post method compled-----------end*/


// /*start----------------------- get all students---------------------*/

// app.get("/api/student", async (req, res) => {
//     try {
//         var selectStuedent = "SELECT * FROM student";
//         var sql = await pool.query(selectStuedent);
//         res.send(sql.json);
//         console.log("students data get", req.header);
//     } catch (error) {
//         console.error(error);
//     }
// });
// /*--------------------------get method completed------------end*/




// /*start----------------------- get a student---------------------------*/
// app.get("/api/student/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         var selectStuedent = "SELECT * FROM  student WHERE id= ?";
//         var sql = await pool.query(selectStuedent, [id]);
//         res.json(sql.json);
//         console.log("student data getting whith id :", id)
//     } catch (error) {
//         console.error(error);
//     }
// });

// /*------------------get method have completed-----------------end*/




// /*start--------------------update stuendt detail------------------*/
// app.put("/api/student/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         var mybody = req.body;

//         var data = {
//             name: mybody.name,
//             mobile: mybody.mobile,
//             email: mybody.email,
//             branch: mybody.branch,
//             fee: mybody.fee,
//         };
//         const updateQuery = "UPDATE student() SET ? WHERE id=?";
//         const sql = await pool.query(updateQuery, Object.values(data));
//         res.json(sql.json);
//         console.log("student data are update who have id :", id);
//         console.log(req.body);
//     } catch (error) {
//         console.error(error);
//     }
// });
// /*-------------------- put method have completed--------------end*/





// /*------------------------delete student----------------------*/
// app.delete("/api/student/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deleteQuery = "DELETE FROM student WHERE id=?";
//         const sql = await pool.query(deleteQuery, [id]);
//         res.json(sql.json);
//         console.log("student have delete successfull with id :", id);
//         console.log(req.body);
//     } catch (error) {
//         console.error(error);
//     }
// });
// /*-------------------------delete method completed---------------end*/



// app.listen(port, () => {
//     console.log("my server is running at", port)
// });
