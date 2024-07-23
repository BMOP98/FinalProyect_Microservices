const express = require('express');
const router = express.Router();
const connection = require('../../modules/dbconect');

router.post('/', async (req, res) => {
    const { name, price, description } = req.body;
    var query = 'INSERT INTO services (name, price, description) VALUES (?, ?, ?)'
    connection.query(query, [name, price, description], (err, results) => {
        if (err) {
            console.log("ERROR " + err.message);
            return res.status(500).json({ err: err.message });
        }
        if (results.affectedRows > 0) {
            res.status(201).json('Service successfully created');
        } else {
            res.status(404).json('Service could not be created');
        }
    })
});

module.exports = router;