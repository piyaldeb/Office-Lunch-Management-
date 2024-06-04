const express = require('express');
const{createMenu,getMenu}=require('../controllers/menuController');
const router = express.Router();


router.post('/',createMenu)
router.get('/:date',getMenu)

module.exports = router;