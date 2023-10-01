var express = require('express')
const SERVER_PORT = 8089
var app = express()


app.get("/hello", (req,res) =>{
    res.send("<h1>Hello Express JS</h1>")
})

//QUERY
//http://localhost:8089/user?fname=Van Dexter&lname=Perez
app.get("/user", (req, res) => {
    const data = req.query
    res.send(data)
})

//PATH
//http://localhost:8089/user/Van Dexter/Perez
app.post("/user/:fname/:lname", (req,res) => {
    const data = req.params
    let fname = req.params.fname
    let lname = req.params.lname
    res.send(data)
})

app.listen(SERVER_PORT, ()=>{
    console.log(`Server running at http://localhost:${SERVER_PORT}`)
})