const express = require('express');
const router = express.Router();
const controller = require('./controller')
const auth = require('../../middleware/auth')

router.get('/logined',controller.main)
router.get('/',auth,controller.first_main)




module.exports = router;