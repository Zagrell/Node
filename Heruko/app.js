const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/public/time.html")
})

app.listen(8080, (error) => {
    console.log("Server is running on port ", 8080);
});