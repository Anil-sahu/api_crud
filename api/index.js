const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

//create express app
const app = express();


//setup the serrver express
const port = process.env.port || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//define root route


app.get("/", (req, res) => {
    res.send("hello world ");
})


const studentRoute = require("./src/route/student.route");

app.use("/api/v1/student", studentRoute);

app.listen(port, () => console.log("My server is running at port:", port));