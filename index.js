require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('./models');
const handler = require('./handlers');

const app = express();
const port = process.env.port;

app.use(cors());
app.use(bodyParser.json());

// app.get('/', (req, res) => {res.send('hello world')});
app.get('/', (req, res) => res.json({hello: 'world'}));

app.use(handler.notFound);
app.use(handler.errors);

app.listen(port, console.log(`Server started on port ${port}`));