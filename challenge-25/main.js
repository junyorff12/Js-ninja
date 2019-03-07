(function(window, document){
	'use strict';

	let $a = document.querySelector('[data-js="span"]');
	let $div = document.querySelector('[data-js="div"]');
	let $span = document.querySelector('[data-js="span"]');

	$div.addEventListener('click', event => alert('clicou na div!'), false);

	$a.addEventListener('click', event => {
        event.preventDefault();
		alert('clicou no a')
		}
	, false);

	$span.addEventListener('click', event => alert('clicou no spam'), false);

})(window, document);