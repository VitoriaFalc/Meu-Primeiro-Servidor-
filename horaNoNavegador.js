const express = require("express")
const router = express.Router()//comecando nossa rota

const app = express()
const porta = 3333 
//const que receba a hora
const hora = [//criando o objeto
    {
        horario: '20:19',
    },
]
function mostraHora(request, response) {//func que capitura hora local

    const data = new Date()
   
    const hora = data.toLocaleTimeString('pt-BR')
   
    response.send(hora)
   
   }

function mostraPorta() {//func para mostrar
        console.log("servidor rodando na porta", porta)
}

app.use(router.get('/horaNoNavegador', mostraHora))//router quando rodar horaNoNavegador pega a func mostraHora
app.listen(porta, mostraPorta)//localhost:3333/horaNoNavegador