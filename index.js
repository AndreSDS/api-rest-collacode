const http = require ('http');
const port = 8081;
const ip = "0.0.0.0";

const server = http.createServer((request, response) => {
  const respostas = [];
  respostas ["/"] = '<h1>Home</h1>';
  respostas ["/fotos"] = '<h1>Fotos</h1>';
  respostas ["/contato"] = '<h1>Contato</h1>';
  
  response.end(respostas[request.url]);
  
  //if(request.url === "/fotos"){
    //response.end('<h1>Fotos</h1>');
  //} else if(request.url === "/"){
   // response.end('<h1>Home</h1>');
  //}else{
    //  response.end("<h1>Está página não existe</h1>");
  //}
});

server.listen(port, ip, () => {
    console.log("Servidor on em: http://${ip}:${port}");
    console.log("Pra desligar o servidor : CTRL + C");
});