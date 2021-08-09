const express = require('express')
const app = express()
const router = require('./routers/index')
const bodyParser = require('body-parser')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const {sequelize} = require('./models')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())
app.use(cookieParser())
sequelize.sync({force:true})
.then(()=>{
    console.log('db success')
})
.catch((err)=>{
    console.log('db fail',err)
})

app.use(bodyParser.urlencoded({extended:false}))


app.use('/',router)

app.listen(3500,(e)=>{
    console.log('server start port:3500',e);
})