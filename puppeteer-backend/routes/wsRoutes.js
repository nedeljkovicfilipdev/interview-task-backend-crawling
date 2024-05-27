const express = require('express')
const {
    getWs,
} = require('../controllers/wsController')

const routes = express.Router()

routes.get("/getProducts", getWs)

module.exports = {
    routes
}