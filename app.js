// Config
var port = 8080;
var app = require("express")();
app.set("view engine", "pug");

// Routes
app.get("/", (req, res) => {
    res.status(200).sendFile(`${__dirname}/public/index.html`)
});
app.get("/public/:file", (req, res) => {
    res.status(200).sendFile(`${__dirname}/public/${req.params.file}`);
});
app.get("/game/:file", (req, res) => {
    res.status(200).sendFile(`${__dirname}/game/${req.params.file}`);
});
app.get("/assets/:file", (req, res) => {
    res.status(200).sendFile(`${__dirname}/game/assets/${req.params.file}`);
});

// 404 error
app.use(function (req, res, next) {
    res.status(404).sendFile(`${__dirname}/public/404.html`);
});

// Listen
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});