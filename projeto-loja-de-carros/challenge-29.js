(function(Dom) {
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

  let $companyName = new DOM('[data-js="company-name"]');
  let $companyPhone = new DOM('[data-js="company-phone"]');
  
  let ajax = new XMLHttpRequest();
  ajax.open('GET', '/company.json', true);
  ajax.send();
  
  ajax.addEventListener('readystatechange', getCompanyInfo, false );
  
  function getCompanyInfo() {
    if(!isRequestOk()) {
      return;
    }
    let data = JSON.parse(ajax.responseText);
    $companyName.get().textContent = data.name;
    $companyPhone.get().textContent = data.phone;
  }

  function isRequestOk() {
    return (ajax.readyState === 4 && ajax.status === 200);
  }
  
  let $form = new DOM('[data-js="form-car"]');
  $form.on('submit', handleSubmit, false);

  function handleSubmit(event) {
    event.preventDefault();
    fillTheTable();
  }  
  
  function fillTheTable() {
    let $table = new DOM('[data-js="car-table"]').get();
    let $fragment = document.createDocumentFragment();

    let $carBrandModel = new DOM('[data-js="carModelBrand"]').get();
    let $carYear = new DOM('[data-js="carYear"]').get();
    let $carPlate = new DOM('[data-js="carPlate"]').get();
    let $carColor = new DOM('[data-js="carColor"]').get();
    
    let tr = document.createElement('tr');
    
    let $carImg = new DOM('[data-js="carImg"]').get();
    let tdImg = document.createElement('td');
    let image = document.createElement('img');
    let tdBrandModel = document.createElement('td');
    let tdYear = document.createElement('td');
    let tdPlate = document.createElement('td');
    let tdColor = document.createElement('td');

    image.src = $carImg.value;
    tdImg.appendChild(image);

    tdImg.textContent = $carImg.value;
    tdBrandModel.textContent = $carBrandModel.value;
    tdYear.textContent = $carYear.value;
    tdPlate.textContent = $carPlate.value;
    tdColor.textContent = $carColor.value;

    tr.appendChild(tdImg);
    tr.appendChild(tdBrandModel);
    tr.appendChild(tdYear);
    tr.appendChild(tdPlate);
    tr.appendChild(tdColor);

    $fragment.appendChild(tr);

    return $table.appendChild($fragment);
  }
      
})(window.dom);