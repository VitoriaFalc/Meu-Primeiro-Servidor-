const express = require("express")
const router = express.Router()//conf da rota

const app = express()
const porta = 3333 
function mostraMulher(request, response){//func que produz a rota
    response.json({
        nome: 'Vitoria Falcadi',
        imagem: 'https://static.wikia.nocookie.net/beeandpuppycat/images/8/86/D7aa470aedc50caa8434ea034e657cea.jpg/revision/latest?cb=20240419031530',
        minibio: 'Desenvolvedora e universitaria',
    })//mandando agora um objeto, por isso .json
}

function mostraPorta() {
        console.log("servidor rodando na porta", porta)
}

app.use(router.get('/mulher', mostraMulher))//conf da rota
app.listen(porta, mostraPorta)