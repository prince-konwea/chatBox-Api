const chat = require(".././models/chat");

module.exports.chats = (req,res,) => {
   
    const {channelId, userId, chat } = req.body;
    const newChat = new chat({
        channelId,
        userId,
        chat
    })
    
};