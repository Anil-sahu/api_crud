const mysql = require("mysql");

// createing here mysql connection

const dbconn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "cruddb"
})


dbconn.connect(function (error) {
    if (error) {
        console.log("DB connenction error", error)
    } else {
        console.log("connection successfull");
    }

})

module.exports = dbconn;