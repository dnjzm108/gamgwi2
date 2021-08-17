const express = require('express');
const router = express.Router();
const controller = require('./controller')

router.post('/id_check',controller.id_check)
router.get('/logout',controller.logout)
router.get('/info/modify',controller.info_modify)
router.get('/info',controller.info)
router.post('/login',controller.login_success)
router.get('/login',controller.login)
router.post('/join',controller.join_success)
router.get('/join',controller.join)

module.exports = router;