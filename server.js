require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();

const PORT = process.env.PORT;


connectDB();


app.use(express.json());


const userRoutes = require("./routes/users");

app.use("/api/users", userRoutes);


app.get("/", (req, res) => {
    res.send("Backend API with Database is running...");
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});