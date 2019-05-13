(function(){
  'use strict';

  let ajax = new XMLHttpRequest();
  ajax.open ('POST', 'http://localhost:3000/user');
  ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  ajax.send('username=fernando&user=Fernando&age=27');

  console.log('Cadastrando usuario!');
  ajax.onreadystatechange = function() {
    if(ajax.readyState === 4) {
      console.log('Usuario cadastrado!', ajax.responseText);
    }
  };

  // let getUser = new XMLHttpRequest();
  // getUser.open('GET', 'http://localhost:3000/user/joao');
  // getUser.send();
  // getUser.onreadystatechange = function() {
  //   if(this.readyState === 4)
  //     console.log(this.responseText);
  // };

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