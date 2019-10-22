var express = require("express");
 //Set Up
var app = express();
var PORT = process.env.PORT || 8080;

//Parse utility. Research further
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
//require("../../../routes/apiRoutes")(app);
require("../../../routes/htmlRoutes")(app);

// LISTENER
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
