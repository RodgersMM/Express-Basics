//req.query - found in URL
//e.g https://education.io//user?name=rodgers&isAuthor=true
//Query string are key-value pairs
//req.query - populated with 
//Use in Express

//Use of query.string

//Creating Application & Starting Server
var express = require('express');
var app = express();

const PORT = 7500;

app.listen(PORT, ()=>{
  console.log("app running on port "+PORT);
  //res.send('Req Query ')
})

              //ROUTING
//Setting Route for Our Request
// Use of '/' defines the route
app.get("/user", (req, res)=>{
    var name = req.query.name;
    var isAuthor = req.query.isAuthor;
    res.json({ name,isAuthor })
  })

  //Open browser type 

  