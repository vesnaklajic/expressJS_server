const express = require('express');
const app=express();

// app.get('/', (req,res)=>{
//     res.send("<h1>Hello</h1>from app express server");
// })
app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post('/save', (req,res)=>{
    res.send("Name saved")
})



app.listen(3000,()=>{
console.log("Ciao");
})

