(function(){
    'use strict';

    function DOM( string ){
    this.element = document.querySelectorAll(string);
    }

    DOM.prototype.on = function(event, callback ) {
    Array.prototype.forEach.call(this.element, function( element ){
        element.addEventListener(event, callback);
        });
    };

    DOM.prototype.off = function(event, callback ) {
    Array.prototype.forEach.call(this.element, function( element ){
        element.removeEventListener(event, callback);
        });
    };

    DOM.prototype.get = function() {
    return this.element;    
    };

    DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.element, arguments ); // nunk se esquecer do arguments.
    };

    DOM.prototype.map = function map(){
    return Array.prototype.map.apply(this.element, arguments );
    };

    DOM.prototype.filter = function filter(){
    return Array.prototype.filter.apply(this.element, arguments );
    };

    DOM.prototype.reduce = function reduce(){
    return Array.prototype.reduce.apply(this.element, arguments );
    };

    DOM.prototype.reduceRight = function reduceRight(){
    return Array.prototype.reduceRight.apply(this.element, arguments );
    };

    DOM.prototype.every = function every(){
    return Array.prototype.every.apply(this.element, arguments );
    };

    DOM.prototype.some = function some(){
    return Array.prototype.some.apply(this.element, arguments );
    };

    DOM.prototype.is = function is( obj ){
    return Object.prototype.toString.call(obj);
    };

    DOM.prototype.isArray = function isArray( obj ){
    return this.is(obj) === '[object Array]';
    };

    DOM.prototype.isString = function isString( obj ){
    return this.is(obj) === '[object String]';
    };

    DOM.prototype.isObject = function isObject( obj ){
    return this.is(obj) === '[object Object]';
    };

    DOM.prototype.isNumber = function isNumber( obj ){
    return this.is(obj) === '[object Number]';
    };

    DOM.prototype.isBoolean = function isBoolean( obj ){
    return this.is(obj) === '[object Boolean]';
    };

    DOM.prototype.isFunction = function isFunction( obj ){
    return this.is(obj) === '[object Function]';
    };

    DOM.prototype.isNull = function isNull( obj ){
    return this.is(obj) === '[object Null]'
        || this.is(obj) === '[object Undefined]';
    };

    window.DOM = DOM;

})();