require('dotenv').config()
const express = require("express");
const app = express();
const port = 3000 || process.env.PORT


app.use(express.json())
app.use(express.urlencoded())

app.use('/',(req,res)=>{
    res.send("hello from the server")
})

app.listen(port,()=>{
    console.log(`server listen on port ${port}`)
})