const express = require('express');
const app = express()
app.get('/',(req,res)=>res.send('My first one...'));
app.listen(8000,()=>{
    console.log["my rest api as port 8000!"];
})