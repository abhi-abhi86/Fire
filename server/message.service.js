const Message = require('./Message.model');

const getAllMessages = async() => {
    return await Message.find().sort({ createdAt: -1 });
};

const createMessage = async(data) => {
    const message = new Message(data);
    return await message.save();
};

const markMessageAsRead = async(id) => {
    return await Message.findByIdAndUpdate(id, { isRead: true }, { new: true });
};

module.exports = {
    getAllMessages,
    createMessage,
    markMessageAsRead
};