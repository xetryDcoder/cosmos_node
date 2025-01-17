const express = require('express')
const app = express()
const path = require('path')
const port = 3000

//DB Connection
const db = require('./model/index')
db.sequelize.sync({force: false})

//public file
app.use(express.static(path.join(__dirname, "public")))
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//Seting up View Engine
app.set('view engine', 'ejs')
app.set('views', 'view')


//Parsing Data to backend
app.use(express.urlencoded())
app.use(express.json())

//Calling the routers
const indexRouter = require('./routes/index')
const studentRouter = require('./routes/student')
const authRouter = require('./routes/auth')

app.use(indexRouter)
app.use(studentRouter)
app.use(authRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})