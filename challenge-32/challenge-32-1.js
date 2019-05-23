/*
Agora vamos criar a funcionalidade de "remover" um carro. Adicione uma nova
coluna na tabela, com um botão de remover.

Ao clicar nesse botão, a linha da tabela deve ser removida.

Faça um pull request no seu repositório, na branch `challenge-31`, e cole
o link do pull request no `console.log` abaixo.

Faça um pull request, também com a branch `challenge-31`, mas no repositório
do curso, para colar o link do pull request do seu repo.
*/
(function(DOM) {
  'use strict';

  let app = (function(){
    return {
      init: function() {
        this.getCompanyInfo();
        this.initEvents();
        this.getCars();
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
        let $img = new DOM('[data-js="carImg"]').get();
        let $modelBrand = new DOM('[data-js="carModelBrand"]').get();
        let $year = new DOM('[data-js="carYear"]').get();
        let $plate = new DOM('[data-js="carPlate"]').get();
        let $color = new DOM('[data-js="carColor"]').get();

        let postCar = new XMLHttpRequest();
        postCar.open('POST', 'http://localhost:3000/car', true);
        postCar.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        postCar.onreadystatechange = function() {
          console.log(this.readyState, this.status);
        }   
        postCar.send(`image=${$img.value}
                      &brandModel=${$modelBrand.value}
                      &year=${$year.value}
                      &plate=${$plate.value}
                      &color=${$color.value}`);
        app.getCars();
      },

      removeLine: function removeLine() {
        console.log('removendo linha');
        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
      },

      getCars: function getCars() {
        let getCars = new XMLHttpRequest();
        getCars.open('GET', 'http://localhost:3000/car', true);
        getCars.send();

        getCars.onreadystatechange = function() {
          if(!(app.isRequestOK.call(this))) {            
            return;
          }

          let $tableCar = new DOM('[data-js="car-table"]').get();
          let responseData = JSON.parse(this.responseText);
          responseData.forEach( (data) => {
            console.log(data);

            let fragment = document.createDocumentFragment();
            let tr = document.createElement('tr');
            let img = document.createElement('img');
            let tdImg = document.createElement('td');
            let tdModelBrand = document.createElement('td');
            let tdYear = document.createElement('td');
            let tdPlate = document.createElement('td');
            let tdColor = document.createElement('td');
            let tdRemove = document.createElement('td') // td remove
            let $removeButton = document.createElement('button');

            $removeButton.style.width = '100%';
            $removeButton.classList.add('remove-btn');
            $removeButton.textContent = 'Remover';
            $removeButton.addEventListener('click', app.removeLine);

            img.src = data.image;
            tdModelBrand.textContent = data.brandModel;
            tdYear.textContent = data.year;
            tdPlate.textContent = data.plate;
            tdPlate.setAttribute('data-js', 'tdplate-id');
            tdColor.textContent = data.color;
            tdImg.appendChild(img);
            tdRemove.appendChild($removeButton);
            
            tr.appendChild(tdImg);
            tr.appendChild(tdModelBrand);
            tr.appendChild(tdYear);
            tr.appendChild(tdPlate);
            tr.appendChild(tdColor);
            tr.appendChild(tdRemove); // td remove
    
            fragment.appendChild(tr);

            return $tableCar.appendChild(fragment);
            
          });          
        }
         
      },

      
    
    } //fecha o return

  })(); //fecha o app

  app.init();

})(window.DOM);

//console.log('Link do pull request do seu projeto');
