arr = [1,2,3,4,5];



let map = arr.map( ( item ) => {
	return item + 10;
}).filter( ( item ) => {
    return item > 13;
} );



console.log( map );