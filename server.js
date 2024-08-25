const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/ethan",(req,res)=>{
    res.send("this is my  World and you are just inside it")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
