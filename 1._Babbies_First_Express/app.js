const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send({ message: "ugg" });
});

app.get("/about", (req, res) => {
    res.send({
        version: "1.0.0",
        info: "this is the best server eva"
    });
});

const books = [{
    id: 0,
    title: "hello"
}];

app.get("/aboutclient/:name", (req, res) => {
    res.send({ greeting: `Hello there ${req.params.name}`})
});

app.get("/libraries", (req, res) => {
    res.send(books);
});

app.post("/opinion", (req, res) => {
    if (req.body.statement === "dogs are cute") {
        res.send({
            opinion: {
                headline: "dogs are shit",
                argument: "because they shit everywhere"
            }
        });
    } else {
        res.send({
            opinion: {
                headline: "dogs are cute",
                argument: "have you looked at them"
            }
        });
    }
});

app.post("/", (req, res) => {
    res.send(req.body);
});

app.listen(8080,(error) =>{
    console.log("Server is running on port", 8080);
});
