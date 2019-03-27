/* eslint-disable no-console */
(function(DOM){
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
  function app(){

    let $formCEP = new DOM('[data-js="form-cep"]');
    let $inputCEP = new DOM('[data-js="input-cep"]');
    let $logradouro = new DOM('[data-js="logradouro"]');
    let $bairro = new DOM('[data-js="bairro"]');
    let $estado = new DOM('[data-js="estado"]');
    let $cidade = new DOM('[data-js="cidade"]');
    let $cep = new DOM('[data-js="cep"]');
    let $status = new DOM('[data-js="status"]');
    let ajax = new XMLHttpRequest();


    $formCEP.on('submit', handleSubmitFormCEP);
    
    
    function handleSubmitFormCEP(event){
      event.preventDefault();
      let url = getUrl();
      ajax.open('GET', url);
      ajax.send();
      getMessage('loading');  
      ajax.addEventListener('readystatechange', handleReadyStateChange);
    }
    
    function getUrl() {
      return 'https://viacep.com.br/ws/[CEP]/json/'.replace(
        '[CEP]',
        getCEP()
        );
      }
      
    function handleReadyStateChange(){
      if ( isRequestOk() ){
        getMessage('ok');
        fillCEPFields();
      }
    }

    function isRequestOk(){
      return ajax.readyState === 4 && ajax.status === 200;
    }

    function fillCEPFields(){
      let data = parseData();
      if (!data) {
        getMessage('erro');
        data = clearData();
      }
      $logradouro.get()[0].textContent = data.logradouro;
      $bairro.get()[0].textContent = data.bairro;
      $estado.get()[0].textContent = data.uf ;
      $cidade.get()[0].textContent = data.localidade;
      $cep.get()[0].textContent = data.cep;
    }

    function clearData(){
      return {
        logradouro: '-',
        bairro: '-',
        uf: '-',
        localidade: '-',
        cep: '-'
      }
    }
    
    function parseData(){
      let res;
      try {
        res = JSON.parse(ajax.responseText);
      }
      catch(e){
        res = null;
      }
      return res;
    }
    
    function getMessage( type ){
      let message = {
        loading: 'Buscando informações para o CEP : '+ getCEP() + ' ...',
        ok: 'Endereço referente ao CEP '+ getCEP() +' :',
        erro: 'Não encontramos o endereço para o CEP '+ getCEP() + ' .'
      }
      $status.get()[0].textContent = message[type];
    }

    function getCEP(){
      return $inputCEP.get()[0].value.replace(/\D/g, '');
    }

    return {
      getMessage: getMessage,
      getCep: getCEP
    };
  }
  
  window.app = app;
  app();

})(window.DOM);