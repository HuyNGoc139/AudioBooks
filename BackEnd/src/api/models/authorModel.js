const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
    {
        name: { type: String, required: true }, // Tên tác giả
        birthplace: { type: String, required: true }, // Quê quán
        birthdate: { type: Date, required: true }, // Ngày sinh
        biography: { type: String }, // Tiểu sử
        avatarUrl: { type: String },
    },
    { timestamps: true }
); // Tự động tạo createdAt và updatedAt

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
