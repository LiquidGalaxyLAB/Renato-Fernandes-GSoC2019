const express = require('express')
const app = express()
const http = require('http');
var cors = require('cors');

app.use(cors({credentials: true, origin: 'https://gsoc-renatofernandes-2019.herokuapp.com'}))
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(require('./routes/router'))

var server = http.createServer(app);

server.listen(process.env.PORT , () => {
    console.log("mas rapaz");
    
})