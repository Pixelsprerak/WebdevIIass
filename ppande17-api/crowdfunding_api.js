const express = require('express');
const bodyParser = require('body-parser'); // Use consistent naming
const db = require('./crowdfunding_db.js'); // Use correct import for db

const app = express();
app.use(bodyParser.json());  // Parse incoming JSON data

// Get all active fundraisers
app.get('/api/fundraisers', (req, res) => {
    const sql = 'SELECT * FROM FUNDRAISER WHERE ACTIVE = TRUE';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error retrieving fundraisers' });
        }
        res.json(results);
    });
});

// Get all categories
app.get('/api/categories', (req, res) => {
    const sql = 'SELECT * FROM CATEGORY';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error retrieving categories' });
        }
        res.json(results);
    });
});

// Get fundraisers by search criteria
app.get('/api/search', (req, res) => {
    const { organizer, city, category } = req.query;
    let sql = 'SELECT * FROM FUNDRAISER WHERE ACTIVE = TRUE';
    const params = [];

    if (organizer) {
        sql += ' AND ORGANIZER LIKE ?';
        params.push(`%${organizer}%`);
    }
    if (city) {
        sql += ' AND CITY LIKE ?';
        params.push(`%${city}%`);
    }
    if (category) {
        sql += ' AND CATEGORY_ID = ?';
        params.push(category);
    }

    db.query(sql, params, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error retrieving search results' });
        }
        res.json(results);
    });
});

// Get fundraiser details by ID
app.get('/api/fundraisers/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM FUNDRAISER WHERE FUNDRAISER_ID = ? AND ACTIVE = TRUE';
    db.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error retrieving fundraiser details' });
        }
        res.json(results[0]);
    });
});

// Set server port to 3000 or any valid port
const port = 3000;  // Use a different port than 3306, which is used by MySQL
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
