const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
    {
        accountname: { type: String, required: true, unique: true },
        username: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        favorite: { type: [String], default: [] },
        dateOfBirth: { type: Date }, // Ngày tháng năm sinh
        avatarURL: { type: String }, // URL ảnh đại diện
        savedBooks: [
            { type: mongoose.Schema.Types.ObjectId, ref: "Book" }, // Danh sách sách đã lưu
        ],
        readChapters: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Chapter",
                required: true,
            },
        ],
    },
    { timestamps: true } // Tự động thêm createdAt và updatedAt
);

// Mã hóa mật khẩu trước khi lưu
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

module.exports = mongoose.model("User", userSchema);
