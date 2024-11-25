const express = require('express')
const mongoose = require('mongoose')
const List = require('./models/shopping.models.js')
const listRoute = require('./routers/list.route.js')
const app = express()

//middleware
app.use(express.json())

//router
app.use("/api/list", listRoute)


//listening on port 3000
app.listen(3000, ()=>{
    console.log('listening on port 3000')
})


app.get('/', (req, res)=>{
    res.send("Hello testing 1, 2, 3....")
})




mongoose.connect("mongodb+srv://shivanshudav48:UFRrKY63w2TvVulr@cluster0.3rvrd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("Conncected to the Database")
})

.catch(() => {
    console.log("Connection failed!")
})

