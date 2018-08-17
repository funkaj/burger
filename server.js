const express = require("express")
const bodyParser = require("body-parser")
let PORT = process.env.PORT || 8080
let app = express()

// middleware
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Set Handlebars.
let exphbs = require("express-handlebars")

app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

// Import routes
let routes = require("./controllers/burgersController.js")

app.use(routes)

// Start our server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT)
})
