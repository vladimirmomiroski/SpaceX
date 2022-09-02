const express = require('express');

const { getMainRouteHandler } = require('../controllers/getMainRouteHandler');
const { getCommentsHandler } = require('../controllers/getCommentsHandler');

router = express.Router();

router.get('/', getMainRouteHandler);
router.get('/comments', getCommentsHandler);

module.exports = router;