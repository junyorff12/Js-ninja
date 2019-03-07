(function(window, document){
	'use strict';

	let $input = document.querySelector('[data-js="input"]');
	let $select = document.querySelector('[data-js="select"]');

	$input.addEventListener('keydown', function(event){
		console.log(this.value);
	}, false);

	$select.addEventListener('change', function( e) {
		document.querySelector('[data-js="input"]').value = this.value;
	}, false)



})(window, document);