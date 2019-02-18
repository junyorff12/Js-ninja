(function(){

	'use strict';

	function MyFunction( name, lastName ) {
		this.name = name;
		this.lastName = lastName;
	}


	MyFunction.prototype.fullName = function() {
		return this.name + ' ' + this.lastName;
	};

	let junyor = new MyFunction('junyor', 'ff12');

	console.log(junyor.fullName());

	MyFunction.prototype.age = 30;

	console.log(junyor.age);



})();