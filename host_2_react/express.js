const express = require('express')
const path = require('path')
const server = express()
const port = 3000

server.use(express.static(path.join(__dirname, '/build')))

server.listen(port, ()=>{
    console.log("server is working");
})
