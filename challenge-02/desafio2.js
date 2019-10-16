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

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function myFunction(a, b, c){
  let args = arguments;
  if(args.length == 1){
    return args[0];
  }
  else if (args.length == 2){
    return args[0] + args[1];
  }
  else if (args.length == 3) {
    return (args[0] + args[1]) / args[2];
  }
  else {
    return null;
  }
}

console.log(myFunction(1));
console.log(myFunction(2,2));
console.log(myFunction(3, 3, 2));
console.log(myFunction());
