(function(){
	'use strint';

	let fragment = document.createDocumentFragment();

	let newP = document.createElement('p');
	let textNode = document.createTextNode('Meu paragrafo!');
	newP.appendChild(textNode);
	fragment.appendChild(newP);
	document.body.appendChild(fragment);
	console.log( fragment );



})();