(function() {
  'use strict';

  var counter = 0;

  var increment = (function() {
    var counter = 150;
    return (function() {
      var counter = 0;
      return function(){
        return counter++;
      }
    })();
  })();

  function otherFunction() {
    counter = 150;
  }

  otherFunction();

  console.log(increment());
  console.log(increment());
  console.log(increment());

})();
