const Book = require("../models/bookModel");

exports.createBook = async (req, res) => {
    const { title, author, publishedDate, chapters } = req.body;

    try {
        const chapterCount = chapters.length;
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
};

exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find().populate("chapters");
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id).populate("chapters");
        if (!book) return res.status(404).json({ message: "Book not found" });
        res.status(200).json(book);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
