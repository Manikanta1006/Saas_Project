const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema(
    {
        filename:{ type: String, required: true },
        filepath: { type: String, required: true },
        project: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Assets", assetSchema);
