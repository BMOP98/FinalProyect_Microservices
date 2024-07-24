const express = require('express');
const router = express.Router();
const connection = require('../../modules/dbconect');

router.get('/', async (req, res) => {
    connection.query('SELECT * FROM services', (err, results) => {
        if (err) {
            console.log("ERROR " + err.message);
            return res.status(500).json({ err: err.message });
        }
        if(results.length > 0){
            res.status(200).json(results);
        }else{
            res.status(404).json("Services not found");
        }
    });
});

router.get('/:idservice', async (req, res) =>{
    const { idservice } = req.params;
    connection.query('SELECT * FROM services WHERE idservices = ?', [idservice], (err, results) =>{
        if(err){
            console.log("ERROR " + err.message);
            return res.status(500).json({err: err.message});
        }
        if(results.length > 0){
            res.status(200).json(results);
        }else{
            res.status(404).json("Service not found");
        }
    } );
});

module.exports = router;
