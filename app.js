var express = require('express')
var app =express()
var path = require('path')
var bodyParser = require('body-parser')
require('ejs')
require('dotenv').config()
var apiRouter = require('./routes/Router')

app.set('views', path.resolve(__dirname + '/views'))
app.set('view engine', 'ejs')

//

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/', apiRouter)


//cors 



var cors = require('cors')
app.use(cors())
var port =process.env.PORT || 3000


app.listen(port, ()=>{
  console.log(`Server is Starting at http://localhost:${port}`)
})



