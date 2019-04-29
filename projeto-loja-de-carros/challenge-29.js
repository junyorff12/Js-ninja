(function(DOM) {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

  let app = (function(){
    return {
      init: function() {
        this.getCompanyInfo();
        this.initEvents();
      },

      getCompanyInfo: function getCompanyInfo(){
        let ajax = new XMLHttpRequest();
        ajax.open('GET', '/company.json', true);
        ajax.send();
        ajax.addEventListener('readystatechange', this.getData, false);
        
      },

      getData: function getData() {
        if(!(app.isRequestOK.call(this)))
          return;
        let $companyName = new DOM('[data-js="company-name"]').get();
        let $companyPhone = new DOM('[data-js="company-phone"]').get();
        let data = JSON.parse(this.responseText);
        $companyName.textContent = data.name;
        $companyPhone.textContent = data.phone;
      },

      isRequestOK: function isRequestOK() {
        return this.readyState === 4 && this.status === 200;
      },

      initEvents: function initEvents() {
        let $formCar = new DOM('[data-js="form-car"]')
        $formCar.on('submit', this.handleSubmit, false);
      },

      handleSubmit: function handleSubmit(e) {
        e.preventDefault();
        let $tableCar = new DOM('[data-js="car-table"]').get();
        $tableCar.appendChild(app.saveNewCar());
      },

      saveNewCar: function saveNewCar() {
    
        let $img = new DOM('[data-js="carImg"]').get();
        let $modelBrand = new DOM('[data-js="carModelBrand"]').get();
        let $year = new DOM('[data-js="carYear"]').get();
        let $plate = new DOM('[data-js="carPlate"]').get();
        let $color = new DOM('[data-js="carColor"]').get();

        let fragment = document.createDocumentFragment();
        let tr = document.createElement('tr');
        let img = document.createElement('img');
        let tdImg = document.createElement('td');
        let tdModelBrand = document.createElement('td');
        let tdYear = document.createElement('td');
        let tdPlate = document.createElement('td');
        let tdColor = document.createElement('td');

        img.src = $img.value;
        tdModelBrand.textContent = $modelBrand.value;
        tdYear.textContent = $year.value;
        tdPlate.textContent = $plate.value;
        tdColor.textContent = $color.value;
        tdImg.appendChild(img);
        
        tr.appendChild(tdImg);
        tr.appendChild(tdModelBrand);
        tr.appendChild(tdYear);
        tr.appendChild(tdPlate);
        tr.appendChild(tdColor);

        return fragment.appendChild(tr);
      }
    
    } //fecha o return

  })(); //fecha o app

  app.init();

})(window.DOM);