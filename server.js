//importar o express
const express = require('express');

//criar aplicação express
const app = express();

//middleware para analisar JSON
app.use(express.json());

//middleware para dados de formulário
app.use(express.urlencoded({extended: true}));

//servindo arquivos estáticos
app.use(express.static('public'));

//define uma rota
app.get('/login', (req, res) => {
    res.sendFile('index.html', {root: './public'})
});

app.post('/login', (req, res) => {
    const {nome,senha}= req.body;
    if (nome==='Lulu' && senha==='Pix'){
        res.send('Login efetuado com sucesso')
    } else {
        res.send('Login não pode ser efetuado')
    }
})

const LULU = 8000

app.listen(LULU, () => 
    console.log(`Lulu gostosinha esta aqui http://localhost:${LULU}`))