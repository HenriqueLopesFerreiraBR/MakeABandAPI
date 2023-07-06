const mongoose = require("mongoose");

const GenderSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Instrument',GenderSchema)