const express = require("express")
const { exec } = require('child_process');

const app = express()
const port = 3000

app.use(express.static("public"))

app.get("/", (req,res) => {
    exec(comando, (error, stdout, stderr) => {
        res.send(`<pre>${stdout}</pre>`)
      });
})

app.get("/ping", (req, res) => {
    const dominio = req.query.dominio
    const comando = "ping -c 4 " + dominio
    exec(comando, (error, stdout, stderr) => {
        res.send(stdout)
    });
})

app.listen(port, () => {
    console.log(`${port} open`)
})