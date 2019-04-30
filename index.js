let express = require('express')
let bodyParser = require('body-parser')
let routes = require('./routes/index.js')

let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

routes(app)

let server = app.listen(8080, function () {
  console.log("App running on port ", server.address().port);
})