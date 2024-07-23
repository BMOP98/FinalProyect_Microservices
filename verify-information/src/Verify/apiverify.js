const express = require('express');
const router = express.Router();
const connection = require('../../modules/dbconect');

router.get('/:mail', async (req, res) => {
    const { mail } = req.params;
    const response = await fetch("http://localhost:4003/apiencrypt/" + mail + "/password");
    if (response.ok) {
        const data = await response.json();
        const email = data.mail;
        connection.query('SELECT COUNT(*) AS count FROM clients WHERE mail = ?', [email], (err, results) => {
            if (err) {
                console.log("ERROR " + err.message);
                return res.status(500).json({ err: err.message });
            }

            const userExists = results[0].count > 0;
            if (userExists) {
                res.status(404).json('E-mail already exists');
            } else {
                res.status(200).json('ok');
            }
        });
    }
});

module.exports = router;