const express = require('express')
//const sql = require('mssql');
const app = express()
const facensKeys = require('./facensKey.min')
const http = require('http');
// const pool = new sql.ConnectionPool(facensKeys)
// pool.connect()

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(require('./routes/router'))

var server = http.createServer(app);

server.listen(8888, () => {

})