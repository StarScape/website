const express = require("express")
 
const app = express()
app.use(express.static('./'))

const env = process.env.NODE_ENV || 'dev'
let serverPort = 80
if (env === 'dev') {
  serverPort = 3000
}

const server = app.listen(serverPort, function(){
  const port = server.address().port
  console.log("Server started at http://localhost:%s", port)
})