(function(){

	let arr = [1,2,3,4,5];
	let arr2 = arr.map( item => { return item });
	let arr3 = arr.slice();

    let $divs = document.querySelectorAll('div');
    let divsCopy = Array.prototype.slice.call($divs);

    function myfunc(){
    console.log(Object.prototype.toString.call(arguments));

    }

    function is( obj ) {
    	return Object.prototype.toString.call( obj );
    }

    function isArray( obj ) {
    	return is(obj) === '[object Array]';
    }

    console.log( is( {}));

})();