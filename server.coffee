path = require 'path'
express = require 'express'
jsonserver = require 'json-server'
proxy = require 'express-http-proxy';

fs = require 'fs'
url = require 'url'

app = express()

PORT = process.env.PORT or 3000
process.env.PWD = process.cwd()

app.use '/assets', express.static path.join process.env.PWD,'assets'
#app.use '/api', jsonserver.router path.join process.env.PWD, 'db.json'
app.use '/api', proxy '127.0.0.1:8000',
  forwardPath: (req, res) ->
    '/api' + url.parse(req.url).path

app.get '*', (req, res) ->
  file = url.parse(req.url).pathname

  file += '.html' unless file.endsWith '.html'

  htmlpath = path.join process.env.PWD,'assets/html'
  filepath = path.join htmlpath,file

  if fs.existsSync filepath
    res.sendFile filepath
  else
    res.sendFile path.join htmlpath,'index.html'


app.listen PORT, ->
  console.log 'Listening to ' + PORT
