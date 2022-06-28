const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

//create express app
const app = express();


//setup the serrver express
const port = process.env.port || 3000;

app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,UPDATE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,  Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
    });
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//define root route


app.get("/", (req, res) => {
    res.send("hello world ");
})


const studentRoute = require("./src/route/student.route");

app.use("/api/v1/student", studentRoute);

const server = app.listen(port, () => console.log("My server is running at port:", port));

module.exports = server;