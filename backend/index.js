const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()

mongoose.connect("mongodb://localhost:27017/blogs")
    .then(() => {
        console.log("database connected")
    })
    .catch((error) => {
        console.log(error.message)
    })

const blogShema = new mongoose.Schema({
    title: String,
    description: String
})

const blog = mongoose.model("blog", blogShema)



app.use(cors())




app.get("/blogs", async (req, res) => {
    const blogs = await blog.find()
    res.send(blogs)
})

app.listen(5000, () => {
    console.log("server running")
})