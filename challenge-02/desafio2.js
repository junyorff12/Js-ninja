/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function multiplyPlusTwo(a, b, c) {
  if (arguments.length < 3) {
    return("Preencha todos os valores corretamente!");
  }
  return a * b * c + 2;
}

console.log(multiplyPlusTwo(3,3,3));
