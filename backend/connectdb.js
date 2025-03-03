const mongoose = require("mongoose");

const db = async () => {
    try {
        await mongoose.connect("mongodb+srv://rccreationsocialmedia:x42H7bk8wRyjOLrD@cluster0.atpq7.mongodb.net/goldjeans");
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Database connection failed");
    }
}

module.exports = db;