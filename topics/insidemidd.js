const express = require("express")
const app = express()


app.get('/',(req,res)=>{
    console.log("Home Page")
    res.send('Home Page')
})

app.get('/inside', auth, (req,res)=>{
    console.log("Middleware Inside Another")
    res.send('Middleware Inside Another')
})

//Auth middleware
function auth(req, res, next){
    console.log('Middleware Inside Another')
    next()
}

app.listen(7000)