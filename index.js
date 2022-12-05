const express = require('express'); 
const app = express();

const hostname = '127.0.0.1';
const port = 3061;

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static("../jogo/"));

app.use(express.json());

const status = {
  "status": 0
};


app.post('/api', (req, res) => {
  res.send('POST request to the homepage')
});

/* Inicia o servidor */
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// POST method route
app.get('/teste', (req, res) => {
  res.send('get request to the homepage')
});


