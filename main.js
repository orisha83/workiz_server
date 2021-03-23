const express = require('express')
var cors = require('cors')
const msgRouter = require('./Routers/msgRouter')

//rabbitmq-plugins enable rabbitmq_management

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cors())

app.use('/api',msgRouter)



let port = process.env.port
if(port == null || port == "")
{
    port = 7000
}
app.listen(port)
