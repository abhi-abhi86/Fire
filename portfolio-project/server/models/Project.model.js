const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    fullDescription: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    githubUrl: {
        type: String
    },
    liveUrl: {
        type: String
    },
    techTags: [{
        type: String
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);