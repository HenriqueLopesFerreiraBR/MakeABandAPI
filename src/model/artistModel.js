const mongoose = require("mongoose");

const ArtistSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        cpf: {
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
        dataNascimento: {
            type: String,
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
        obser: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Instrument", ArtistSchema);
