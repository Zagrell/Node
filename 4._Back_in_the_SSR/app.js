const express = require("express");
const app = express();

app.get("/", (req, res) =>{
    req.sendFile(__dirname + "/")

});

app.listen(3000, () => {
  console.log("Server is running on port", 3000)  
});