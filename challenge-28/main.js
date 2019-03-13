(function(){
	'use strict';

    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', '/data/data.json');
    xhttp.send();
    console.log('carregando...')

    let response ='';

    xhttp.onreadystatechange = function(){
    
        if( isRequestOk() ) {
        	//console.log('Requisição okay\n', xhttp.responseXML );
            try{
                response = JSON.parse(xhttp.responseText);
            }
            catch(e){
                response = xhttp.responseText;
            }
            console.log(response);
        }

    };

    function isRequestOk(){
    	return xhttp.readyState === 4 && xhttp.status === 200;
    }

})();