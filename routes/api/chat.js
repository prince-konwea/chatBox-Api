const express = require("express");
const router = express.Router();
const chat = require("../../models/chat");


router.post("/createChat", (req, res) => {
    const { channelId, userId, chat } = req.body;
    const newChat = new Chat({
        channelId,
        userId,
        chat
    });
    newChat.save()
        .then(chat => res.json(chat))
        .catch(err => console.log(err));
});
router.get("/allChat", (req, res) => {
    Chat.find().populate('userId').exec((err, chat) => {
        if (err) {
            console.log(err);
        } else {
            res.json(chat);
        }
    })
});



module.exports = router;

