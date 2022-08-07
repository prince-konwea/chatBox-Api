const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChannelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  members: {
    type: Array,
    ref: 'users',
    required: false,
    default: [],
  },
});

module.exports = Channel = mongoose.model('channel', ChannelSchema);
