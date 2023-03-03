
//const express = require('express')
//const data = require('./data/mock.json')
const express = require('express')
//import { data} from "./data/mock.json"
const mock = require('mock')


const app = express()
const PORT = 6000

app.listen(PORT, (req,res)=>{
    console.log(`Server Listening at ${PORT}`)
    console.log(data)
})

