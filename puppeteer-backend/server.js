//Imports
require('dotenv').config()
const cors = require('cors')
const { requestHandler } = require('./middleware/requestMiddleware')
const express = require('express')
const { routes } = require('./routes/wsRoutes')

//Cors
const corsOptions = {
    origin: 'http://localhost:5000',
    credentials: true
}

//Express app
const app = express()

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors(corsOptions))
app.use(requestHandler)

//PORTS
app.listen(process.env.PORT)
console.log("PORT ? ", process.env.PORT)

//Routes
app.use("/idealo", routes)