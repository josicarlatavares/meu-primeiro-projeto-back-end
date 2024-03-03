const express = require("express")
const router = express.Router()

const app = express ()
const porta = 3333

const mulheres = [
    {
        nome: 'Simara Conceicao',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e instrutora'
    },
    {
        nome: 'Iana Chan',
        imagem: 'http://bit.ly/3JCXBqP',
        minibio: 'Fundadora da programaria',
    },
    {
        nome: 'Nina da Hora',
        imagem: 'http://bit.ly/3FKpFaz',
        minibio: 'Hacker antirracista'

    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta,  mostraPorta)