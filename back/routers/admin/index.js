const express = require('express');
const router = express.Router();
const controller = require('./controller')


router.get('/admin/user_detail',controller.user_detail)
router.get('/admin/user_list',controller.user_list)
router.get('/admin/report_detail',controller.report_detail)
router.get('/admin/report_list',controller.report_list)
router.get('/admin/board_view',controller.board_view)
router.get('/admin/board_list',controller.board_list)
//router.get('/admin',controller.main)

module.exports = router;