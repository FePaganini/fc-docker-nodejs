const express = require("express")
const mysql = require("mysql2")

const app = express()
const port = 3000

const config = {
    host: 'mysql-database',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const promisePool = mysql.createPool(config).promise()

app.get("/",  async (req, res) => {
    const sqlInsertQuery = 'INSERT INTO people(name) VALUES("Mario")'
    await promisePool.query(sqlInsertQuery)

    let names = ""
    const sqlSelectQuery = 'SELECT name FROM people'
    const [rows, fields] = await promisePool.query(sqlSelectQuery)
    rows.forEach(row => {
        names += `<li>${row.name}</li>`
    });
    res.send(`<h1>Full Cycle Rocks</h1> <ul>${names}</ul>`)
})

app.listen(port, ()=>{
    console.log("Rodando na porta: ", port)
})