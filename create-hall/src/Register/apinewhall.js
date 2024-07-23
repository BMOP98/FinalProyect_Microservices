const express = require('express');
const router = express.Router();
const connection = require('../../modules/dbconect');

router.post('/', async (req, res) => {
    const { name, price, description, capacity, address } = req.body;
    var query = 'INSERT INTO halls (name, price, description, capacity, address) VALUES ( ?, ?, ?, ?, ?)'
    connection.query(query, [name, price, description, capacity, address], (err, results) => {
        if (err) {
            console.log("ERROR " + err.message);
            return res.status(500).json({ err: err.message });
        }
        if (results.affectedRows > 0) {
            res.status(201).json('Hall successfully created');
        } else {
            res.status(404).json('Hall could not be created');
        }
    })
});

module.exports = router;