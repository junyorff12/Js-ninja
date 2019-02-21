(function(window, document){
    'use strict';

	/*
	Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
	As regras são:

	- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
	diretamente; // readonly
	- O input deve iniciar com valor zero; input.value = 0;
	- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
	- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
	multiplicação(x) e divisão(÷);
	- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
	que irá limpar o input, deixando-o com valor 0;

	- A cada número pressionado, o input deve atualizar concatenando cada valor
	digitado, como em uma calculadora real;
	- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
	operação no input. Se o último caractere no input já for um símbolo de alguma
	operação, esse caractere deve ser substituído pelo último pressionado.
	Exemplo:
	- Se o input tem os valores: "1+2+", e for pressionado o botão de
	multiplicação (x), então no input deve aparecer "1+2x".
	- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
	input;
	- Ao pressionar o botão "CE", o input deve ficar zerado.
	*/

	//selecionando os elementos no DOM

	let $visor = document.querySelector('[data-js="visor"]');
	let $buttonsOperations = document.querySelectorAll('[data-js="button-operation"]');
	let $buttonsNumbers = document.querySelectorAll('[data-js="button-number"]');
	let $buttonCE = document.querySelector('[data-js="button-ce"]');
	let $buttonEqual = document.querySelector('[data-js="button-equal"]');

	//add events to buttons

	Array.prototype.forEach.call($buttonsNumbers, function( button ) {
		button.addEventListener('click', handleClickNumber, false);
	});

	Array.prototype.forEach.call($buttonsOperations, function( button ) {
		button.addEventListener('click', handleClickOperation, false);
	});

	$buttonCE.addEventListener('click', handleClickCE, false );
	$buttonEqual.addEventListener('click', handleClickEqual, false);



	// callbacks functions for events Listeners

	function handleClickNumber( event ) {
		$visor.value += this.value;
	}

	function handleClickOperation( event ) {
		removeLastItemIfItIsAnOpertor();
		$visor.value += this.value;
	}


	function handleClickCE( event ) {
		$visor.value = 0;
	}
	
	function isLastitemAnOperation() { // verifica se o ultimo item é uma operacao.
		let operations = ['+', '-', 'x', '/' ];
		let lastItem = $visor.value.split('').pop();
		return operations.some( function( operator ){
			return operator === lastItem;
		});
	}

	function handleClickEqual( event ) {
		removeLastItemIfItIsAnOpertor();
		console.log($visor.value.match(/\d+/g));
	}

	function removeLastItemIfItIsAnOpertor(){
		if( isLastitemAnOperation() ) // se true, remove o ultimo e substitui pelo digitado.
			$visor.value = $visor.value.slice(0, -1);
	}

})(window, document);