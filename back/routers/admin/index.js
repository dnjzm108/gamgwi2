const express = require('express');
const router = express.Router();
const controller = require('./controller')


router.get('/user_detail',controller.user_detail)
router.get('/user_list',controller.user_list_get)
router.get('/report_detail',controller.report_detail)
router.get('/report_list',controller.report_list)
router.get('/board_view',controller.board_view)
router.get('/board_list',controller.board_list)
//router.get('/admin',controller.main)

router.post('/user_list',controller.user_list_post)

module.exports = router;