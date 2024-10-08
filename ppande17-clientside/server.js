const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors()); 

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/search', (req, res) => {
    res.sendFile(path.join(__dirname, 'search.html'));
});

//Conecting to the server 8080

const port = 8080;
app.listen(port, () => {
    console.log(`Client-side server running on port ${port}`);
});
