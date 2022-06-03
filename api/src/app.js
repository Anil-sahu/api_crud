const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./dbconn/conn");
const port = process.env.port || 3000;

//midlewire
app.use(cors());
app.use(express.json());

//create post
app.post("/api/student", async (req, res) => {
    try {
        var mybody = req.body;
        var name = mybody.name;
        var mobile = mybody.mobile;
        var email = mybody.email;
        var branch = mybody.branch;
        var fee = mybody.fee;
        var sqlInsert = 'INSERT INTO student(name,mobile,email,branch,fee) VALUE (?,?,?,?,?)';
        var sql = await pool.query(sqlInsert, [name, mobile, email, branch, fee],);
        res.json(sql);
        console.log(mybody);
    } catch (error) {
        console.error(error)
    }
});



// get all students

app.get("/api", async (req, res) => {
    try {
        var selectStuedent = "SELECT * FROM student";
        var sql = await pool.query(selectStuedent);
        res.json(sql);
        console.log("students data get ")
    } catch (error) {
        console.error(error);
    }
});


app.listen(port, () => {
    console.log("my server is running at", port)
});
