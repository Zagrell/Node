const express = require("express");
const app = express();

app.use(express.static("public"));

const fs = require("fs");

const header = fs.readFileSync("./public/components/header.html").toString();
const footer = fs.readFileSync("./public/components/footer.html").toString();

const frontpageHtml = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const javascriptHtml = fs.readFileSync("./public/pages/javascript/javascript.html").toString();
const nodeHtml = fs.readFileSync("./public/pages/node/node.html").toString();
const expressHtml = fs.readFileSync("./public/pages/express/express.html").toString();

const frontpagePage = header.replace("%%DOCUMENT_TITLE%%","Frontpage") + frontpageHtml + footer;
const javascriptPage = header.replace("%%DOCUMENT_TITLE%%","Javascript") + javascriptHtml + footer;
const nodePage = header.replace("%%DOCUMENT_TITLE%%","Node") + nodeHtml + footer;
const expressPage = header.replace("%%DOCUMENT_TITLE%%","Express") + expressHtml + footer;

app.get("/", (req, res) =>{
    res.send(frontpagePage);
});

app.get("/javascript", (req, res) =>{
    res.send(javascriptPage);
});

app.get("/node", (req, res) =>{
    res.send(nodePage);
});

app.get("/express", (req, res) =>{
    res.send(expressPage);
});

app.listen(8080, () => console.log("Server is running on", 8080));