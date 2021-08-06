const express = require('express');
const router = express.Router();
const controller = require('./controller')




router.post('/modify',controller.modify_succece)
//router.post('/write',controller.write_succece)

router.get('/delete',controller.Delete)
router.get('/modify',controller.modify)
router.get('/list',controller.list)
router.post('/write',controller.write)
router.get('/reply',controller.view_reply)

module.exports = router;