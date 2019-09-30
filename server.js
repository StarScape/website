const express = require("express")
 
const app = express()
app.use(express.static('./'))

const env = process.env.NODE_ENV || 'dev'
// let serverPort = 8081
// if (env === 'dev') {
//   serverPort = 3000
// }

const server = app.listen(8081, function(){
  const port = server.address().port
  console.log("Server started at http://localhost:%s", port)
})