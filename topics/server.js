const express = require('express')
require ('dotenv').config()
//We need Express and Port to create aserver
//We therefore create two variables to hold port and express
const app = express()
//const port = 3000
const Port = process.env.PORT 
console.log(process.env.PORT)
//We need our server to listen to our port using app.listen method
app.listen(Port, ()=> console.log(`Dolphin app listening on port ${Port}!`))

//app.get(port, (req, res) => {res.send("Hello World")});