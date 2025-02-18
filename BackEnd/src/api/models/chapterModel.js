const mongoose = require("mongoose");

const chapterSchema = new mongoose.Schema({
    book_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: true,
    },
    title: { type: String, required: true },
    content: String,
    audio_url: String,
});

module.exports = mongoose.model("Chapter", chapterSchema);
