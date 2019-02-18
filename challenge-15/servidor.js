let http = require('http');// importar modulo http
const PORT = 8080; // definir porta

function servidor(request, response) {  // criando funcao que gera o servidor
	response.end('Funcionando!! Rodando em ' + request.url);
} 

let server = http.createServer( servidor ); // estanciando a funcao servidor ( JS hahah :))

server.listen(PORT, () => {  // colocando o server p rodar e devolvendo uma msg.
	console.log(`Servidor rodando em http://localhost:${PORT}`); 
});
