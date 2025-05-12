const express = require("express")
const cors = require('cors')
const app = express()
const serverless = require('serverless-http')

app.use(cors())
app.use(express.json())

app.get('/.netlify/functions/index', (req, res) =>{
    res.send("success");
})


module.exports.handler = serverless(app)
