const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
    let { username, accountname, email, password } = req.body;

    try {
        // Kiểm tra đầu vào có thiếu dữ liệu không
        if (!username || !accountname || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Chuẩn hóa accountname (viết thường để tránh trùng lặp do chữ hoa/chữ thường)
        accountname = accountname.toLowerCase();

        // Kiểm tra nếu email hoặc accountname đã tồn tại (username có thể trùng lặp)
        const existingUser = await User.findOne({
            $or: [{ email }, { accountname }],
        });
        if (existingUser) {
            return res
                .status(400)
                .json({ message: "Email or accountname already exists" });
        }

        // Tạo người dùng mới
        const newUser = new User({
            username,
            accountname,
            email,
            password,
        });
        await newUser.save();

        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: newUser._id,
                username: newUser.username,
                accountname: newUser.accountname,
                email: newUser.email,
                createdAt: newUser.createdAt, // Thêm thời gian tạo
            },
        });
    } catch (err) {
        res.status(500).json({
            message: "Error registering user",
            error: err.message,
        });
    }
};

exports.login = async (req, res) => {
    const { accountname, password } = req.body;

    try {
        const user = await User.findOne({ accountname });
        if (!user) return res.status(404).json({ message: "User not found" });

        const token = jwt.sign(
            { id: user._id, accountname: user.accountname },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN,
            }
        );

        res.json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                username: user.username,
                accountname: user.accountname,
                email: user.email,
                favorite: user.favorite,
            },
        });
    } catch (err) {
        res.status(500).json({
            message: "Error logging in",
            error: err.message,
        });
    }
};
