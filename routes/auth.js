const express = require('express');
const router = express.Router();

// Controllers
const authCtrl = require('../controllers/authCtrl');

// GET
router.get('/login', (req, res) => { res.send() });

// POST
router.post('/login', authCtrl.login);
router.post('/token', authCtrl.token);

// Delete
router.delete('/logout', authCtrl.logout);

module.exports = router;