const { Router } = require('express');
const router = new Router();
const crypto = require('crypto')

const algorithm = 'aes-256-ctr'
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3'
const iv = '8fdb43a3846a8807259fc76b4e54e4a6'

const encrypt = (text) => {
    const cipher = crypto.createCipheriv(algorithm, secretKey, Buffer.from(iv, 'hex'));
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
    return encrypted.toString('hex');
};

router.get('/:mail/:password', async (req, res) => {
    try {
        const { mail, password } = req.params;
        const encryptedMail = encrypt(mail);
        const encryptedPassword = encrypt(password);
        res.status(200).json({
            mail: encryptedMail,
            password: encryptedPassword
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});
module.exports = router;