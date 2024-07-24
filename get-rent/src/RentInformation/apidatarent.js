const express = require('express');
const router = express.Router();
const connection = require('../../modules/dbconect');

router.get('/', async (req, res) => {
    connection.query('SELECT * FROM rents', (err, results) => {
        if (err) {
            console.log("ERROR " + err.message);
            return res.status(500).json({ err: err.message });
        }
        if(results.length > 0){
            res.status(200).json(results);
        }else{
            res.status(404).json("Rent not found");
        }
    });
});

router.get('/:idrent', async (req, res) => {
    const { idrent } = req.params;
    connection.query('SELECT * FROM rents WHERE idrents = ?', [idrent], (err, results) => {
        if (err) {
            console.log("ERROR " + err.message);
            return res.status(500).json({ err: err.message });
        }
        if(results.length > 0){
            res.status(200).json(results);
        }else{
            res.status(404).json("Rent not found");
        }
    });
});

module.exports = router;
