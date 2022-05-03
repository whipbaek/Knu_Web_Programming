const express = require('express');
const fs = require('fs');
const app = express();

app.get('image', (request, response) =>{
    fs.readFile('image.png', (error, data) => {
        response.type('image/png');
        response.send(data);
    });
});

app.listen(52773, () => {
    console.log('Server running at http://127.0.0.1:52773');
});