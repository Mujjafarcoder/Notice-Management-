const express = require('express');
const cors = require('cors');

const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());


app.post("/notice/add", (req, res) => {

    const { title, description} = req.body;
    const created_at = new Date();

    const sql = "INSERT INTO notices (title, description, created_at) VALUES (?, ?, ?)";

    db.query(sql, [title, description, created_at], function (error, result) {

        if (!error) {
            res.send("Notice added successfully");
        } else {
            res.send(error);
        }

    });

});

app.get("/notice/show", (req, res) => {

    db.query("SELECT * FROM notices", function (error, result) {

        if (!error) {
            res.send(result);
        } else {
            res.send(error);
        }

    });

});


// 🚀 Start Server
app.listen(9000, () => {
    console.log("Server is running on port 9000");
});