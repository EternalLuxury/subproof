const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    guild: String,
    role: String,
    channel: String,
    logchannel: String,
    youtube: String
});

module.exports = mongoose.model("subscriptionproof", Schema);
