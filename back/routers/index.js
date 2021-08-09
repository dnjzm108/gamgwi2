const express = require('express');
const router = express.Router();
const user = require('./user/index');
 const board = require('./board/index');
 const main = require('./main/index');
const admin = require('./admin/index')

router.use('/admin',admin)
router.use('/user',user);
router.use('/board',board);
router.use('/',main);

module.exports = router;