
import express,{ Response, Request } from "express"
import bodyParser from 'body-parser'
import path from "path"
import {intent_handler} from './src/controller/intent_handler'


const app = express()
const PORT = process.env.PORT || 5001

app.use(bodyParser.json())
  app.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  app.get('/home', (req, res) => res.send('test bot- add local storage and /home /test'))
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))


  app.post('/webhook', intent_handler)
  app.post('/test', (req, res)=>{
res.send("test")
  })
