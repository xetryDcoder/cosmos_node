const express = require('express')
const app = express()
const path = require('path')
const port = 4000
const cors = require('cors')

//DB Connection
const db = require('./model/index')
db.sequelize.sync({force: false})


const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

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
const todoRouter = require('./api/todo')

app.use(indexRouter)
app.use(studentRouter)
app.use(authRouter)
app.use(todoRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})