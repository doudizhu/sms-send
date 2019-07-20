const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const querystring = require('querystring')

const app = express()


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


app.get('/',(req,res)=>{
  res.send('hello world')
})

const port = process.env.PORT || 5000

app.listen(port,()=>{
  console.log(`Server is running on port ${port}`)
})
