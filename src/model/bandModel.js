const mongoose = require("mongoose");

const BandSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        cnpj: {
            type: Number,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        senha: {
            type: String,
            required: true,
        },
        integrant: {
            type: Array,
        },
        gender: {
            type: Array,
        },
        desri: {
            type: String,
        },
        instruments: {
            type: Array,
        },
        endereco: {
            estado: {
                type: String,
            },
            cidade: {
                type: String,
            },
            bairro: {
                type: String,
            },
            numero: {
                type: String,
            },
            complemento: {
                type: String,
            },
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Instrument", BandSchema);
