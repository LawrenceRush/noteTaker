
// LOAD DATA
var noteData = require("../db/db.json");

// ROUTING
module.exports = function(app) {
  // API GET Requests
  

  app.get("/api/notes", function(req, res) {
    res.json(noteData);
  });

  

  // API POST Requests


  app.post("/api/notes", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
      noteData.push(req.body);
      res.json(true);
    
   
  });

 //Delete Single Data
  app.post("/api/delete", function(req, res) {
    console.log(req)

    res.json({ ok: true });
  });

 //Clear data
  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    noteData.length = 0;

    res.json({ ok: true });
  });
};
