var db = require("seraph")({
  server: "http://cricuttest.sb02.stations.graphenedb.com:24789",
  user: "cricuttest",
  pass: "96ov8vbfcVPuQD7F3fC9"
});

// db.save({ name: "Test-Man", age: 40 }, function(err, node) {
//   if (err) throw err;
//   console.log("Test-Man inserted.");
//   });


// db.query('MATCH (n) RETURN n LIMIT 100',{},function(err,result){
// 	console.log(result);
// });


// var txn = db.batch();

// txn.save({ title: 'Kaikki Askeleet' });
// txn.save({ title: 'Sinä Nukut Siinä' });
// txn.save({ title: 'Pohjanmaa' });

// txn.commit(function(err, results) {

// 	console.log(err);
// 	console.log(results);
//   /* results -> [{ id: 1, title: 'Kaikki Askeleet' },
//                  { id: 2, title: 'Sinä Nukut Siinä' },
//                  { id: 3, title: 'Pohjanmaa' }] */
// });

var salagappa= {id: 1, name: 'Salagappa', age: 22};

db.save(salagappa, 'Person', function(err, node) {
  if (err) {
    // An error occurred and the node was not saved.
    // handle the error here.
    console.log(err);
    return;
  }
var lane = {id: 1, name: 'Clane', age: 22};

db.save(lane, 'Person', function(err, node) {
  if (err) {
    // An error occurred and the node was not saved.
    // handle the error here.
    console.log(err);
    return;
  }

  db.relate(salagappa, 'KNOWS', lane, {since: '2000-11-07'}, function(err, relationship) {
  if (err) {
   console.log(err);
    return;
  }
  // The relationship was saved.
  // You can do other operations here if required.
});

});
});





