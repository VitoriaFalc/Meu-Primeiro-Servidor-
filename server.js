//estrutura basica de um server
const express = require("express")//func que ajuda a trazer as informaçoes


const app = express()
const porta = 3333 //definimos nossa variavel constante porta
function mostraPorta() {
        console.log("servidor rodando na porta", porta)//exiba
}

app.listen(porta, mostraPorta)// app escuta se a porta esta funcionando
// para testar se esta no ar, localhost:333 -> numero da porta
// se deu Não consegue ter / esta correto, ate porque ate agora não enviamos dados para o servidor