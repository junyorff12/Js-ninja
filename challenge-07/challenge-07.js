/*
Crie um array com 5 items (tipos variados).
*/
let arr = ['jr', 'ff12', 123, function(){}, {'num': 23}]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem( arr, elemento) {
	return arr.push(elemento);
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log(addItem(arr, 'ReactJS'));
console.log(addItem(arr, true));
console.log(addItem(arr, ['jrdd', 'silva', {'idade': 31}]));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
let num = 0;
while(num < arr.length) {
	console.log('o elemento numero ' + (num + 1) + ' é : ' + arr[num]);
	num++;
}
console.log('O segundo elemento do segundo array é ' + arr[7][1]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
let arr1 = ['jr', 'ff12', 123, function(){}, {'num': 23}]
console.log('O primeiro array criado tem ' + arr1.length + ' itens');
/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array criado tem ' + arr[7].length + ' itens');

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
let x = 10;
while( x <= 20){
	if (x % 2 === 0){
		console.log(x);
	};
	x++;
};

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );

let y = 10;
while( y <= 20){
	if (y % 2 != 0){
		console.log(y);
	};
	y++;
};

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );

for(let z = 100; z <= 200; z++){
	if( z % 2 === 0){
		console.log(z);
	};
}

console.log( 'Números ímpares entre 111 e 125:' );


for(let i = 111; i <= 125; i++){
	if( i % 2 != 0){
		console.log(i);
	};
}
