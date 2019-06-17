const express = require('express');
const handler = require('./handlers');
const app = express();
const port = process.env.port || 4000;

// app.get('/', (req, res) => {res.send('hello world')});
app.get('/', (req, res) => res.json({hello: 'world'}));

app.use(handler.notFound);
app.use(handler.errors);

app.listen(port, console.log(`Server started on port ${port}`));