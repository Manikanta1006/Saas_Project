const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
const connectDB = require("./config/db")

const authRoutes = require("./Routes/auth.Routes")
const files = require("./Routes/file.upload.Routes")
const projectRoutes = require("./Routes/Project.Routes")
const app = express()
app.use(cors())
app.use(express.json())
connectDB()

app.use("/api/auth",authRoutes)
app.use("/api/files",files)
app.use("/api/project",projectRoutes)

app.listen(()=>{
    console.log("server is running on 5000 port")
},5000)