
var neo4j = require('neo4j');//https://github.com/thingdom/
var db = new neo4j.GraphDatabase('');

// CREATE (n {name:"World"}) 
// CREATE (n:Person { name : 'Chris', job_title : 'Developer'})

// create (n:Person{name:"sriram"})
// create (n:Project{name:"make it now",time:"30 min"})

/*

Match(p:Person {name:"sriram"}),(pr:Project{name:"make it now"})
create (p) - [:LIKES] ->(pr)
return p,pr



Match (n)
optional match (n) - [r]-()
return n,r


*/





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