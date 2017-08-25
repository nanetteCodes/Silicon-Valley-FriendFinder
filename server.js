// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

// Static files
// =============================================================
// must call before the routes  to work
app.use(express.static('app/public'));

// Router
// =============================================================
// the below require statements point our server to the route files that tell our server how to respond when visitors request data from our URLs
require('./app/routing/htmlRoutes')(app);


require('./app/routing/apiRoutes')(app);

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, "./app/public", "home.html"))
// })
// app.get('/survey', function (req, res){
//   res.sendFile(path.join(__dirname, "./app/public", "survey.html"))
// })

// =============================================================
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
