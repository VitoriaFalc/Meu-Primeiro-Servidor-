/**Rodando o servidor local */
/**colamos do server */
const express = require("express")
const router = express.Router()//1 part configuracao de rota - que vem de dentro do express


const app = express()
const porta = 3333 

function mostraOla(request, response) { 
    response.send("Ola, Mundo!") //renponde send=envia
}

function mostraPorta() {
        console.log("servidor rodando na porta", porta)
}

app.use(router.get('/ola', mostraOla)) //fun que produz a resposta da rota - no chrome localhost:3333/ola
app.listen(porta, mostraPorta)