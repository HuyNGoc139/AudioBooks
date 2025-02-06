const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
    {
        accountname: { type: String, required: true, unique: true },
        username: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        favorite: { type: [String], default: [] },
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
