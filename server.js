var express = require("express");
var path = require("path");

var app = express();

var htmlRoutes = require("./routes/htmlRoutes.js")(app);
var apiRoutes = require("./routes/apiRoutes")(app);



var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(htmlRoutes)

tableData;
waitingData;

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });