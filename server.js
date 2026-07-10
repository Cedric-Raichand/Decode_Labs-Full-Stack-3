require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const app = express();

const PORT = process.env.PORT;


// Connect Database
connectDB();


// Middleware
app.use(express.json());


// Routes
const userRoutes = require("./routes/users");

app.use("/api/users", userRoutes);


// Test Route
app.get("/", (req, res) => {
    res.send("Backend API with Database is running...");
});


// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});