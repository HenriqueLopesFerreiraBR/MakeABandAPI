const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();


const port = process.env.PORT;

const URL = process.env.URL_DB


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

mongoose
    .connect(URL)
    .then(console.log("Banco de dados conectado com sucesso"))
    .catch((error) => {
        console.log(error);
    });

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));



// band = {
// 	nome:
// 	cnpj:
// 	integrantes:[]
// 	Genêro:[]
// 	endereco{
// 		estado:
// 		cidade:
// 		bairro:
// 	}
// }

// artista = {
// 	nome:
// 	cpf:
// 	dataNascimento:
// 	desrição:
// 	instrumentos:[]
// 	estado:
// 	cidade:
// 	bairro:
// 	numero:
// 	complemento:
// 	observação:
// }

// Genêro = {
// 	nome:
// 	decricão:
// }

// instrumentos:{
// 	nome:
// 	descrição
// }