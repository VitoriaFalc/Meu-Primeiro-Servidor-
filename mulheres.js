const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333 
//quardar lista em uma const
const mulheres = [
    {//criar objetos
        nome: 'Vivian Toledo',
        imagem: 'https://kanto.legiaodosherois.com.br/w1200-q95-k1/wp-content/uploads/2021/11/legiao_fgE1YqwKyiVh.jpg.webp',
        minibio: 'Pessoa maravilhosa, princessa'
    },
    {
        nome: 'Professora Monica',
        imagem:'https://kanto.legiaodosherois.com.br/w1200-q95-k1/wp-content/uploads/2021/11/legiao_4FoMLwNAp_PY.jpg.webp',
        minibio: 'Uma mulher incrivel',
    },
    {
        nome: 'Carol Toledo',
        imagem: 'https://kanto.legiaodosherois.com.br/w1200-q95-k1/wp-content/uploads/2021/11/legiao__e01UhyG6NDi.jpg.webp',
        minibio: 'Maravilhosa',
    },
]
function mostraMulheres(request, response){
    response.json(mulheres)//resposta a partir do json
}

function mostraPorta() {
        console.log("servidor rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres))//o get executa a fun quando /mulheres chamado
app.listen(porta, mostraPorta)