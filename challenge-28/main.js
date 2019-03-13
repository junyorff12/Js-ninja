(function(){
	'use strict';

    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', '/data/data.xml');
    xhttp.send();

    xhttp.onreadystatechange = function(){
        if( isRequestOk() ) {
        	//let data = JSON.parse(xhttp.responseText);
        	console.log('Requisição okay\n', xhttp.responseXML );
        }

    };

    function isRequestOk(){
    	return xhttp.readyState === 4 && xhttp.status === 200;
    }

})();