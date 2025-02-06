const User = require("../models/userModel");
exports.updateFavoriteGenres = async (req, res) => {
    const { userId } = req.params; // Lấy ID người dùng từ URL
    const { favorite } = req.body; // Nhận danh sách thể loại từ body

    try {
        // Kiểm tra user có tồn tại không
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Cập nhật mảng favorite
        user.favorite = favorite;
        await user.save();

        res.status(200).json({
            message: "Favorite genres updated successfully",
            user,
        });
    } catch (err) {
        res.status(500).json({
            message: "Error updating favorite genres",
            error: err.message,
        });
    }
};

exports.getUserById = async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({
            message: "Error fetching user",
            error: err.message,
        });
    }
};
