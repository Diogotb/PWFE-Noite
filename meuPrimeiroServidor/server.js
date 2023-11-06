const http = require('http');
const fs = require('fs');
//Importa os módulos http e fs(ler arquivos) para o servidor
const server = http.createServer((req, res) => {
    //createServer cria o servidor local (http://localhost:XXXX)
    //criando um função de requsição e respostas em http
    if(req.url === '/'){
        //se a for soliciado / vai abrir o arquivo index.html
        fs.readFile('index.html',(err,data)=>{
            if(err){ //caso de erro
                res.writeHead(500); //Mensagem de erro
                res.end("Erro Server"); //Mensagem Erro
            }else{//caso tudo ok
                res.writeHead(200);
                res.end(data);// retorna o index.html
            }
        })
    }else if(req.url==="/sobre"){
        //se a for soliciado /sobre vai abrir o arquivo sobre.html
        fs.readFile('sobre.html',(err,data)=>{
            if(err){ //caso de erro
                res.writeHead(500); //Mensagem de erro
                res.end("Erro Server"); //Mensagem Erro
            }else{//caso tudo ok
                res.writeHead(200);
                res.end(data);// retorna o index.html
            }
        })
    }else { //erro de página não encontrada
        res.writeHead(404); //erro padrão 404
        res.end("Página não encontrada"); // mensagem de erro
    }
});
server.listen(3000, ()=>{//define a porta de conecção do servidor
    console.log("Servidor Conectado na porta 3000")
})

