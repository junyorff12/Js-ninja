(function(){
  'use strict';

  let ajax = new XMLHttpRequest();
  ajax.open('GET', 'http://localhost:3000/user', true);
  ajax.send();

  ajax.onreadystatechange = function() {
    if(ajax.readyState === 4 && ajax.status === 200 ){
      console.log('Ajax');
    }
  }

})();