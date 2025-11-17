const messageService = require('../services/message.service');

const getMessages = async(req, res) => {
    try {
        const messages = await messageService.getAllMessages();
        res.json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching messages' });
    }
};

const addMessage = async(req, res) => {
    try {
        const message = await messageService.createMessage(req.body);
        res.status(201).json(message);
    } catch (error) {
        res.status(500).json({ message: 'Error creating message' });
    }
};

const readMessage = async(req, res) => {
    try {
        const message = await messageService.markMessageAsRead(req.params.id);
        if (!message) {
            return res.status(404).json({ message: 'Message not found' });
        }
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: 'Error marking message as read' });
    }
};

module.exports = {
    getMessages,
    addMessage,
    readMessage
};