const express = require('express')
const {createUser , setLunchChoice , getLunchChoice}= require('../controllers/userController');
const router = express.Router();



router.post('/create', createUser);
router.put('/choice',setLunchChoice);
// router.get('/choices',getLunchChoice);

module.exports = router;