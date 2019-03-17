/* eslint-disable no-console */
(function(){
    'use strict';
    /*
    No HTML:
    - Crie um formulário com um input de texto que receberá um CEP e um botão
    de submit;
    - Crie uma estrutura HTML para receber informações de endereço:
    "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
    preenchidas com os dados da requisição feita no JS.
    - Crie uma área que receberá mensagens com o status da requisição:
    "Carregando, sucesso ou erro."

    No JS:
    - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
    deve ser limpo e enviado somente os números para a requisição abaixo;
    - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
    "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
    no input criado no HTML;
    - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
    com os dados recebidos.
    - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
    a mensagem: "Buscando informações para o CEP [CEP]..."
    - Se não houver dados para o CEP entrado, mostrar a mensagem:
    "Não encontramos o endereço para o CEP [CEP]."
    - Se houver endereço para o CEP digitado, mostre a mensagem:
    "Endereço referente ao CEP [CEP]:"
    - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
    adicionar as informações em tela.
    */
   function DOM( string ){
    this.element = document.querySelectorAll(string);
  }

  DOM.prototype.on = function(event, callback ) {
    Array.prototype.forEach.call(this.element, function( element ){
      element.addEventListener(event, callback);
      });
  };

  DOM.prototype.off = function(event, callback ) {
    Array.prototype.forEach.call(this.element, function( element ){
      element.removeEventListener(event, callback);
      });
  };

  DOM.prototype.get = function() {
    return this.element;    
  };

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.element, arguments ); // nunk se esquecer do arguments.
  }

  DOM.prototype.map = function map(){
    return Array.prototype.map.apply(this.element, arguments );
  }

  DOM.prototype.filter = function filter(){
    return Array.prototype.filter.apply(this.element, arguments );
  }

  DOM.prototype.reduce = function reduce(){
    return Array.prototype.reduce.apply(this.element, arguments );
  }

    DOM.prototype.reduceRight = function reduceRight(){
    return Array.prototype.reduceRight.apply(this.element, arguments );
  }

  DOM.prototype.every = function every(){
    return Array.prototype.every.apply(this.element, arguments );
  }

   DOM.prototype.some = function some(){
    return Array.prototype.some.apply(this.element, arguments );
  }

  DOM.prototype.is = function is( obj ){
    return Object.prototype.toString.call(obj);
  }

  DOM.prototype.isArray = function isArray( obj ){
    return this.is(obj) === '[object Array]';
  }

  DOM.prototype.isString = function isString( obj ){
  return this.is(obj) === '[object String]';
}

  DOM.prototype.isObject = function isObject( obj ){
    return this.is(obj) === '[object Object]';
  }

  DOM.prototype.isNumber = function isNumber( obj ){
    return this.is(obj) === '[object Number]';
  }

  DOM.prototype.isBoolean = function isBoolean( obj ){
    return this.is(obj) === '[object Boolean]';
  }

  DOM.prototype.isFunction = function isFunction( obj ){
    return this.is(obj) === '[object Function]';
  }

  DOM.prototype.isNull = function isNull( obj ){
    return this.is(obj) === '[object Null]'
        || this.is(obj) === '[object Undefined]';
  }


  
  let $formCEP = new DOM('[data-js="form-cep"]');
  let $inputCEP = new DOM('[data-js="input-cep"]');
  let ajax = new XMLHttpRequest();

  $formCEP.on('submit', handleSubmitFormCEP);

  function handleSubmitFormCEP(event){
    event.preventDefault();
    ajax.open('GET', 'https://viacep.com.br/ws/'+ $inputCEP.get()[0].value +'/json/')
    ajax.send();
    ajax.addEventListener('readystatechange', handleReadyStateChange);
  }

  function handleReadyStateChange(){
    if (ajax.readyState === 4 && ajax.status === 200){
      console.log(ajax.responseText);
    }
    console.log($inputCEP.get()[0].value);
  }

  
    


})();