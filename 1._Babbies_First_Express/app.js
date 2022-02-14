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

app.listen(8080);
