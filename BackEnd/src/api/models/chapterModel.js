const mongoose = require("mongoose");

const chapterSchema = new mongoose.Schema({
    content: { type: String, required: true },
    audioFile: { type: String, required: true },
});

module.exports = mongoose.model("Chapter", chapterSchema);
