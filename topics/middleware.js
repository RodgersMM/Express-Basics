const express = require("express")
const app = express()



//Calling logger middleware
app.use(logger)


app.get('/',(req,res)=>{
    console.log("Middleware Home Page")
    res.send('Middleware Home Page')
})


app.get('/users', auth, (req,res)=>{
    console.log("Users Page")

    res.send('Users Page Displayed')
})


//CALLING MIDDLEWARE INSIDE METHODS
app.get('/inside', auth, (req,res)=>{
    console.log("Middleware Inside Another")
    //res.send('auth')
    res.send('Middleware Inside Another')
})

//Auth Middleware
function auth(req, res, next){
    console.log('Auth ')
    next()
}

//Below is a logger middleware
function logger(req, res, next){
    console.log('log')
    next()
}

//The server is listening in port
app.listen(8000)
