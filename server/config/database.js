const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        // Use local MongoDB for development
        await mongoose.connect('mongodb://localhost:27017/portfolio', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        console.log('Server will continue without database connection');
        // Don't exit, allow server to run without DB for now
    }
};

module.exports = connectDB;