const express = require('express');
const router = express.Router();
const messageController = require('./message.controller');
const isAdmin = require('./isAdmin');

router.post('/', messageController.addMessage);
router.get('/', isAdmin, messageController.getMessages);
router.put('/:id', isAdmin, messageController.readMessage);

module.exports = router;