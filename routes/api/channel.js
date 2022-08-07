const express = require("express");
const channel = require("../../models/channel");
const router = express.Router();
const Channel = require("../../models/channel");


router.get("/test", (req, res) => res.json({ msg: "channel routes works!" }))

router.post('/channels/create', (req, res) => {

    const { name, description } = req.body;
    const newChannel = new Channel({
        name,
        description
    });
    newChannel.save()
        .then(channel => res.json(channel))
        .catch(err => console.log(err));
}).get('/all', (req, res) => { 
    Channel.find().populate('members').exec((err, channels) => { 
        if (err) {
            console.log(err);
        } else {
            res.json(channels);
        }
    })
});

router.post("/addUser", (req, res) => {
    const { channelId, userId } = req.body;
    Channel.findById(channelId)
        .then(channel => {
            channel.members.push(userId);
            channel.save()
                .then(channel => res.json(channel))
                .catch(err => console.log(err));
        }).catch(err => console.log(err));
})

router.post("/leaveChannel", (req, res) => {
    const { channelId, userId } = req.body;
    channel.findById(channelId)
        .then(channel => {
            channel.members.pop(userId);
            channel.save()
                .then(channel => res.json(channel))
                .catch(err => console.log(err));
        }).catch(err => console.log (err))
});



module.exports = router;