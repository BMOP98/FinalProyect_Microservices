const express = require('express');
const router = express.Router();
const connection = require('../../modules/dbconect');

router.post('/', async (req, res) => {
    const { name, price, brand, description } = req.body;
    var query = 'INSERT INTO rents (name, price, brand, description) VALUES ( ?, ?, ?, ?)'
    connection.query(query, [name, price, brand, description], (err, results) => {
        if (err) {
            console.log("ERROR " + err.message);
            return res.status(500).json({ err: err.message });
        }
        if (results.affectedRows > 0) {
            res.status(201).json('Rent successfully created');
        } else {
            res.status(404).json('Rent could not be created');
        }
    })
});

module.exports = router;