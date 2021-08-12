const express = require('express');
const router = express.Router();
const controller = require('./controller')

router.post('/list',controller.post_list)

router.get('/list',controller.get_list)
router.get('/likes',controller.get_likes)

router.get('/write',controller.get_write)
router.post('/view',controller.post_view)







router.post('/modify',controller.modify_succece)
//router.post('/write',controller.write_succece)

router.post('/delete',controller.Delete)
router.get('/modify',controller.modify)
// router.get('/list',controller.list) //
router.post('/write',controller.write)
router.get('/reply',controller.view_reply)

module.exports = router;