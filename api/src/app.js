const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./dbconn/conn");
const port = process.env.port || 3000;

//midlewire
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    try {
        res.send("Connnection successful")
    } catch (error) {
        console.error(error);
    }

})

app.listen(port, () => {
    console.log("my server is running at", port)
});
