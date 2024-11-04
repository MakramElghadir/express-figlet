const express = require("express")
const {exec} = require('child process')

const commando = 'Hola figlet'
const app = express()
const port = 3000

app.get("/", (req,res) => {
    exec(command,(error,stdout,stderr) => {
        console.log(error, stdout, stderr)
        console.log(`Stdout: ${stdout}`)
        req.send(stdout)
    })
})

app.listen(port, () => {
    console.log(`servidor ${port} funciona`)
})