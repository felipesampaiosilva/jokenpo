const express = require('express'); 
const app = express();

const hostname = '127.0.0.1';
const port = 3061;

let empate = 0;
let jogador1vence = 0;
let jogador2vence = 0;


const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })



app.use(express.static("./"));

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const status = {
  "status": 0
};


app.post('/', (req, res) => {
  empate = req.body.empate;
  jogador1vence = req.body.jogador1vence;
  jogador2vence = req.body.jogador2vence;
  console.log(jogador1vence);
  console.log(jogador2vence);
  console.log(empate);
});

/* Inicia o servidor */
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// POST method route
app.get('/teste', (req, res) => {
  res.json({
    jogador1vence: jogador1vence,
    jogador2vence: jogador2vence,
    empate: empate
  });
});


