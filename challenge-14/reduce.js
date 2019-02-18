//let arr = [1,2,3,4,5,6,7];
let arr = ['J', 'u', 'n', 'y', 'o', 'r', ' ', 'F', 'F', 1, 2];

let reduce = arr.reduce(( acumulador, item, index, array ) => {
    return acumulador + item;
});

console.log( reduce );

let reduceR = arr.reduceRight(( acumulador, item, index, array ) => {
    return acumulador + item;
});

console.log( reduceR );
