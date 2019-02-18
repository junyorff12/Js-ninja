let arr = [1,2,3,4,5,6,7];

arr.forEach( function( elemento, index, arr){
	console.log(elemento, index, arr);
});

let every = arr.every( function( item ){
	return item < 5; // verifica se todos os itens são menores que 5; true ou false. 
});

console.log(every);

let some = arr.some( function( elemento ){
    return elemento > 3;

});

console.log(some);


let newArr2 = [];
arr.forEach( function(element, index) {
	newArr2.push({ item: element, index: index });
});

console.log( ' 1 ', newArr2 );

let newArr = arr.map( (item, index ) => {
	return { item : item, index: index };
});


console.log( '2', newArr );
