const express = require('express');
const port = 8081;

const server = express();

//verbos || method => get post put e delete

const COLLABS = [
    {
    nick: 'andre',
    qtd: 302
},
    {
    nick: 'eduardo',
    qtd:  345, 
},
    {
    nick: 'bernardo',
    qtd: 250
}
];

server.get("/", (req, res) => {
    res.send("<h1>Home</h1>");
});

server.get("/collabs", (req, res) => {
    res.send(COLLABS);
});

server.listen(port, () => {
    console.log("Servidor on em http:\\localhost:${port}");
    console.log("Para derrubar pressione CTRL + C");
});