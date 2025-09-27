const mongoose = require('mongoose')

const ProjectShema = new mongoose.Schema({
    ProjectName: {
        type: String
    },
    ProjectDescription: {
        type: String
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
},
    { timestamps: true }
)

module.exports = mongoose.model("Project",ProjectShema)