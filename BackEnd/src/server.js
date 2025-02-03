const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

// Kết nối MongoDB
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Định nghĩa User schema và model
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

// Middleware mã hóa mật khẩu trước khi lưu
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

const chapterSchema = new mongoose.Schema({
    content: { type: String, required: true },
    audioFile: { type: String, required: true }, // Tên file hoặc đường dẫn file
});

// Model chương
const Chapter = mongoose.model("Chapter", chapterSchema);

// Schema sách
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedDate: { type: Date, required: true },
    chapterCount: { type: Number, required: true },
    chapters: [{ type: mongoose.Schema.Types.ObjectId, ref: "Chapter" }], // Liên kết với collection Chapters
});

// Model sách
const Book = mongoose.model("Book", bookSchema);

module.exports = { Book, Chapter };

// Đăng ký
app.post("/register", async (req, res) => {
    const { username, password } = req.body;

    try {
        // Kiểm tra xem người dùng đã tồn tại chưa
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "Username already exists" });
        }

        // Tạo người dùng mới
        const newUser = new User({ username, password });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({
            message: "Error registering user",
            error: err.message,
        });
    }
});

// Đăng nhập
app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        // Tìm người dùng
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Kiểm tra mật khẩu
        // const isMatch = await bcrypt.compare(password, user.password);
        // if (!isMatch) {
        //     return res.status(400).json({ message: "Invalid credentials" });
        // }

        // Tạo token JWT
        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN,
            }
        );

        res.json({ message: "Login successful", token });
    } catch (err) {
        res.status(500).json({
            message: "Error logging in",
            error: err.message,
        });
    }
});

app.post("/chapters", async (req, res) => {
    const { content, audioFile } = req.body;
    try {
        const newChapter = new Chapter({ content, audioFile });
        const savedChapter = await newChapter.save();
        res.status(201).json(savedChapter);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// 2. API thêm sách
app.post("/books", async (req, res) => {
    const { title, author, publishedDate, chapters } = req.body;

    try {
        // Tính số chương từ danh sách ID chương
        const chapterCount = chapters.length;

        // Tạo sách mới
        const newBook = new Book({
            title,
            author,
            publishedDate,
            chapterCount,
            chapters,
        });
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// 3. API lấy danh sách sách (bao gồm chương)
app.get("/books", async (req, res) => {
    try {
        const books = await Book.find().populate("chapters"); // Populate để lấy thông tin chương
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 4. API lấy sách theo ID
app.get("/books/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id).populate("chapters");
        if (!book) return res.status(404).json({ message: "Book not found" });
        res.status(200).json(book);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Middleware xác thực token
const authenticate = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        return res.status(401).json({ message: "Access Denied" });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(401).json({ message: "Invalid Token" });
    }
};

// Route được bảo vệ
app.get("/protected", authenticate, (req, res) => {
    res.json({
        message: `Welcome ${req.user.username}! This is a protected route.`,
    });
});

// Khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
