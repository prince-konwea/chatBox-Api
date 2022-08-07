const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  channelId: {
    type: Array,
    ref: 'channels',
    required: true,
  },

  userId: {
    type: Array,
    ref: 'users',
    required: false,
    default: [],
  },
  chat: {
    type: Array,
    required: false,
    
    default: []
  },
});

module.exports = Chat = mongoose.model('chat', ChatSchema);
