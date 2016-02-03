var neo4j = require('neo4j');
var db = new neo4j.GraphDatabase('*');

db.cypher({
    query: 'MATCH (n) RETURN n LIMIT 100'
}, callback);

function callback(err, results) {
    if (err) throw err;
    var result = results;
    if (!result) {
        console.log('No user found.');
    } else {
  
        console.log(JSON.stringify(result));
    }
};