var express = require("express");
var mysql = require("mysql")
 //Set Up
var app = express();
var PORT = process.env.PORT || 8080;

//Heroku Stuff
var connection 
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
  
//Parse utility. Research further
app.use(express.urlencoded({ exstended: true }));
app.use(express.json());
app.use(express.static('public'));

// ROUTER
require("../../../routes/apiRoutes")(app);
require("../../../routes/htmlRoutes")(app);

// LISTENER
app.listen(PORT, function() {
  console.log("App listening on PORT: http//:localhost:" + PORT);
});
