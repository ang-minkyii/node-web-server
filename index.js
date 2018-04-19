const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Hello World!');
    res.end('Hello World!');
});

app.listen(8082, () => {
    console.log('Listening on port 8082');
});