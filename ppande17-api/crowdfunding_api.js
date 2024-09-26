const express = require('express');
const bodyParser = require('body-parser'); 
const cors = require('cors');
const db = require('./crowdfunding_db.js'); 

const app = express();

// Enable CORS to connect with the API 
app.use(cors({
    origin: 'http://localhost:8080'  //  allowing the requests from  client-side server
}));

app.use(bodyParser.json());  


app.get('/api/fundraisers', (req, res) => {
    const sql = 'SELECT * FROM FUNDRAISER WHERE ACTIVE = TRUE';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error retrieving fundraisers' });
        }
        res.json(results);
    });
});// code to take the all active fundraisers


app.get('/api/categories', (req, res) => {
    const sql = 'SELECT * FROM CATEGORY';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error retrieving categories' });
        }
        res.json(results);
    });
}); // code to take the all categories


app.get('/api/search', (req, res) => {
    const { organizer, city, category } = req.query;
    let query = 'SELECT * FROM FUNDRAISER WHERE 1=1';  // Base query
    const params = [];

    if (organizer) {
        query += ' AND ORGANIZER LIKE ?';
        params.push(`%${organizer}%`);
    }
    if (city) {
        query += ' AND CITY LIKE ?';
        params.push(`%${city}%`);
    }
    if (category) {
        query += ' AND CATEGORY_ID = ?';
        params.push(category);
    }

    db.query(query, params, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error searching fundraisers' });
        }
        res.json(results);
    });
});////This is the code to search the fundraiser


app.get('/api/fundraisers/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM FUNDRAISER WHERE FUNDRAISER_ID = ? AND ACTIVE = TRUE';
    db.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error retrieving fundraiser details' });
        }
        res.json(results[0]);
    });
});//To get a specific fundraiser by ID


const port = 3000;  
app.listen(port, () => {
    console.log(`API server running on port ${port}`);
});//starting the server in port 3000
