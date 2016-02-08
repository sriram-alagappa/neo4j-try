
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



CREATE
(make111:Project { id:111,name : 'Make it now 111'}),
(make112:Project { id:112,name : 'Make it now 112'}),
(make113:Project { id:113,name : 'Make it now 113'}),
(make114:Project { id:114,name : 'Make it now 114'}),
(make115:Project { id:115,name : 'Make it now 115'})



CREATE 
(user111:User { id:111,name : 'Sree111'}),
(user112:User { id:112,name : 'Sree112'}),
(user113:User { id:113,name : 'Sree113'}),
(user114:User { id:114,name : 'Sree114'}),
(user115:User { id:115,name : 'Sree115'})


//relationship

CREATE
(make111)-[:BOOKMARKED {year:2016}]->(user111),
(make111)-[:BOOKMARKED {year:2016}]->(user112),
(make111)-[:BOOKMARKED {year:2016}]->(user113),
(make111)-[:BOOKMARKED {year:2016}]->(user114),
(make111)-[:BOOKMARKED {year:2016}]->(user115)

CREATE
 (user112)-[:LIKED {year:2016}]->(make112),
 (user112)-[:LIKED {year:2016}]->(make113),
 (user112)-[:LIKED {year:2016}]->(make114),
 (user112)-[:LIKED {year:2016}]->(make114),
 (user112)-[:LIKED {year:2016}]->(make115)

 CREATE
 (user112)-[:FOLLOWS]->(user115),
 (user112)-[:FOLLOWS]->(user114),
 (user112)-[:FOLLOWS]->(user113),
 (user112)-[:FOLLOWS]->(user112),
 (user112)-[:FOLLOWS]->(user111)


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