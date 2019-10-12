const express = require("express")
 
const app = express()
app.use(express.static('./'))

const server = app.listen(process.env.PORT || 8081, function(){
  const port = server.address().port
  console.log("Server started at http://localhost:%s", port)
})

// Ping server every 5 minutes in production
if (process.env.NODE_ENV === 'production') {
  const http = require("http")
  setInterval(() => http.get("http://jackarrington.com"), 300000)
}
