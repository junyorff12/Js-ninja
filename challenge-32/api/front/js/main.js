(function(){
  'use strict';

  let ajax = new XMLHttpRequest();
  ajax.open ('POST', 'http://localhost:3000/user');
  ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  ajax.send('username=roberto&age=32');

  console.log('Cadastrando usuario!');
  ajax.onreadystatechange = function() {
    if(ajax.readyState === 4) {
      console.log('Usuario cadastrado!');
    }
  }
  // ajax.open('GET', 'http://localhost:3000/user/ff12', true);
  // ajax.send();

  // ajax.onreadystatechange = function() {
  //   if(ajax.readyState === 2) {
  //     console.log('Headers OK!');
  //     ajax.abort();
  //   }

  //   if(ajax.readyState === 4 ){
  //     console.log(ajax.responseText, ajax.status);
  //   }
  // }

})(); 

//'Content-Type': 'Application/x-www-form-urlencoded'