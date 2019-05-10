(function(){
  'use strict';

  let ajax = new XMLHttpRequest();
  ajax.open('GET', 'http://localhost:3000/user/pedro', true);
  ajax.send();

  ajax.onreadystatechange = function() {
    if(ajax.readyState === 4 ){
      console.log(ajax.responseText, ajax.status);
    }
  }

})(); 