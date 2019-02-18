(function( win, doc ){
	'use strict';

	let $inputUsername = doc.querySelector('#username')

	let $button = doc.querySelector('#button');

	$button.addEventListener('click', ( event ) => {
		event.preventDefault();
		console.log('Click no botao');
	}, false );

	$inputUsername.addEventListener('click', ( event ) => {
		window.alert('Clicou no input username');
	}, false)

})( window, document );