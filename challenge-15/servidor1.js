const http = require('http');
const fs = require('fs')
const PORT = 9001;

let index = fs.readFileSync( 'index.html' );

function servidor( request, response) {
	response.end( index );
}

let server = http.createServer( servidor );

server.listen( PORT, () => {
	console.log( 'Working on localhost:' + PORT);
});