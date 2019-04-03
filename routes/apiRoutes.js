var tables = require("data/tableData.js");
var waitlist = require("data/waitingList.js")




//Display all Tables
app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist)
})
app.get("/api/tables", function(req, res) {
    return res.json(tables)
})

//displays a single character
app.get("/api/tables/:tables;", function(req,res) {
    var reservation = req.params.tables;

    console.log(reservation);

    for (var i = 0; i < tables.length; i++) {
        if (reservation === tables[i].routeName) {
          return res.json(tables[i]);
        }
      }
    
      return res.json(false);
});

app.get("/api/tables/:waitlist"), function(req, res) {
  var reservation = req.params.waitlist;

  console.log(reservation);

  for (var i = 0; i < waitlist.length; i++) {
    if (reservation === waitlist[i].routeName) {
      return res.json(waitlist[i]);
    }
  }

  return res.json(false);
}




app.post("/api/tables", function(req, res) {
    var newReservation = req.body;

    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
    console.log(newReservation);

    tables.push(newReservation);
    res.json(newReservation);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });