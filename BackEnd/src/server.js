const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();
app.use(bodyParser.json());

connectDB();

// Import routes
const authRoutes = require("./api/routers/authRoutes");
const bookRoutes = require("./api/routers/authRoutes");
const userRoutes = require("./api/routers/userRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
