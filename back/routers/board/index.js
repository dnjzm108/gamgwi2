const Board = require('../../models')

const express = require('express');
const router = express.Router();
const controller = require('./controller')

router.post('/list',controller.post_list)

router.get('/list',controller.get_list)
router.post('/likes',controller.get_likes)

router.get('/write',controller.get_write)
router.post('/view',controller.post_view)

router.post('/modify',controller.modify_succece)

router.post('/delete',controller.Delete)
router.get('/modify',controller.modify)
router.post('/write',controller.write)
router.get('/reply',controller.view_reply)

router.post('/addLike',controller.addLike)
router.post('/del_Like',controller.del_Like)

router.post('/addComment',controller.addComment)
router.post('/get_comment',controller.get_comment)
router.post('/delete_comment',controller.delete_comment)

router.post('/friend',controller.add_friend)
router.post('/subscribe/writer',controller.subscribe_writer)
router.post('/subscribe/post',controller.subscribe_post)
router.post('/cancel/post',controller.cancel_post)
router.post('/cancel',controller.cancel_friend)



module.exports = router;