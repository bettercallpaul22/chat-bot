import { intent_handler } from "./controller/intent_handler"
import express, { Response, Request } from "express"
// import path from "path"
// import bodyParser from "body-parser"
// import { Response, Request } from "express"
// import { Response, Request } from "express"

// import { Request } from "express"

// const bodyParser = require('body-parser')
// const express = require('express')
// const path = require('path')
const bodyParser = require('body-parser')
// const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

// app.use(bodyParser.json())
  // app.use(express.static(path.join(__dirname, 'public')))
  // app.set('views', path.join(__dirname, 'views'))
  // app.set('view engine', 'ejs')
  app.get('/', (req:express.Request, res:express.Response) => res.send('Heeloo bot'))
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))


  app.post('/webhook', intent_handler)
