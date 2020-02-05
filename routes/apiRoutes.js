
// LOAD DATA
var noteData = require("../db/db.json");

// ROUTING
module.exports = function(app) {
  // API GET Requests
  

  app.get("/api/notes", function(req, res) {
    res.json(noteData);
  });

  

  // API POST Requests

 let i=1;
  app.post("/api/notes", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    req.body.index = i
    req.body.finished = false
    console.log(req.body)  
    noteData.push(req.body);
    i++ 
    res.json(noteData);
   
   
  });

 //Delete Single Data
  app.post("/api/delete", function(req, res) {
    let queryIndex = (parseInt(req.body.index))
    noteData = noteData.filter( (object) => { return (object.index !== queryIndex)});
    
    res.json(noteData);
  });

 //Clear data
  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    noteData.length = 0;

    res.json({ ok: true });
  });

  app.post("/api/update", function(req, res){
     
    console.log(req.body)
     let finished = req.body.finished
     let index = req.body.index
     
    noteData[index].finished = finished

  })}
