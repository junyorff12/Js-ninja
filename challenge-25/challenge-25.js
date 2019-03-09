(function(){
	'use strict';

	/*
	Essa semana você terá dois desafios:
	1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
	tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
	ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
	o que não ficou tão claro das aulas anteriores.
	É essencial que você entenda todo o conteúdo que foi passado até aqui,
	para que possamos prosseguir para a parte mais avançada do curso :D

	2) Estudar eventos!
	Acesse a página do MDN:
	https://developer.mozilla.org/en-US/docs/Web/Events#Categories

	Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
	desafio os experimentos legais que você conseguir desenvolver :D
	*/

	let $main = document.querySelector('.main');
	let $mainHeader = document.querySelector('.main-header');
	let $mainContent = document.querySelector('.main-content');
	let $cloneMainHeader = $mainHeader.cloneNode(true);
    let $mainFooter = document.querySelector('.main-footer');

	let firstText = $mainContent.firstChild;
    
    let $h1 = $mainHeader.firstElementChild;

    let $newP = document.createElement('p');
    let $newText = document.createTextNode('Novo p!');
    $newP.appendChild($newText);

    $main.appendChild($newP);

    console.log($main.getAttribute('class'));























})();