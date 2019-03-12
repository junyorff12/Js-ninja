(function (doc){
	'use strint';

    function afterDomContentLoaded() {
    	alert('DOMContentLoaded!');
		let fragment = doc.createDocumentFragment();

		let newP = doc.createElement('p');
		let textNode = doc.createTextNode('Meu paragrafo!');
		newP.appendChild(textNode);
		fragment.appendChild(newP);
	 	doc.body.appendChild(fragment);
		console.log( fragment );
    	
    }

    function afterWindowLoad(){
    	alert('afterWindowLoad!');
    }

    doc.addEventListener('DOMContentLoaded', afterDomContentLoaded, false);
    window.addEventListener('load', afterWindowLoad, false);


})(document);