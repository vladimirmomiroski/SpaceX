const express = require('express');

const { getMainRouteHandler } = require('../controllers/getMainRouteHandler');
const { getCommentsHandler } = require('../controllers/getCommentsHandler');
const { postCommentHandler } = require('../controllers/postCommentHandler')

router = express.Router();

router.get('/', getMainRouteHandler);
router.get('/comments', getCommentsHandler);
router.post('/comments', postCommentHandler)

module.exports = router;