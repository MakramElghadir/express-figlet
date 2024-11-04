const express = require("express")
const app = express()
const port = 3000

app.get("/", (req,res) => {
    req.send("holla")
})

app.listen(port, () => {
    
})