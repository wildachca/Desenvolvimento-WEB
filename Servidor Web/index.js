const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

    if (req.url === "/") {  
        file = "index.html";
    
    } else if (req.url === "/sobre") {  
        file = "sobre.html";
    
    } else if (req.url === "/contato") {  
        file = "contato.html";
    
    } else {  
        file = "404.html";  res.statusCode = 404;
    }
{
const filePath = path.join(__dirname, "pages", "index.html");


fs.readFile(filePath, (err, data) => {
  if (err) {
    res.statusCode = 500;
    return res.end("Erro interno");
  }

  res.setHeader("Content-Type", "text/html");
  res.end(data);
});


}
});

server.listen(3000);