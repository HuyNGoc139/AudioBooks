const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedDate: { type: Date, required: true },
    chapterCount: { type: Number, required: true },
    chapters: [{ type: mongoose.Schema.Types.ObjectId, ref: "Chapter" }],
});

module.exports = mongoose.model("Book", bookSchema);
