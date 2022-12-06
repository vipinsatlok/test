const express = require("express")
const app = express()

const path = require('path')
const route = path.join(__dirname, "../../BhaktiSite/frontend/dist")
console.log(route)
app.use(express.static(route))

module.exports = app