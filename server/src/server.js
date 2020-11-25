const express = require('express')
const cors = require('cors')
const routes = require('./routes');
const db = require('./database')
const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)
app.listen(3003, console.log('Server Running'))