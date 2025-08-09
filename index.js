// const express = require('express')
// require("dotenv").config()

// const app = express()
// const port = 3000


// app.get("/" ,(req,res)=>{
//     res.send("   this is me mujtaba baid ")
// })

// app.get("/facebook" ,(Req,res)=>{
//     res.send("this is faceBook path ")
// })

// app.get("/login" ,(req,res)=>{
//     res.send("<h1>this is login page</h1> ")
// })

// app.get("/youtube", (req,res)=>{
//     res.send("<h1> this is you tube </h1>")
// })
// app.listen(process.env.port, ()=>{
//     console.log("ye mne bbnaya he listen")
// })
// app.listen(process.env.port, () => {
//   console.log(`Example app listening on port ${port}`)
// })



const express = require('express');
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
    res.send("this is me mujtaba abid");
});

app.get("/facebook", (req, res) => {
    res.send("this is Facebook path");
});

app.get("/login", (req, res) => {
    res.send("<h1>this is login page</h1>");
});

app.get("/youtube", (req, res) => {
    res.send("<h1>this is YouTube</h1>");
});

// Vercel will handle listening
module.exports = app;
