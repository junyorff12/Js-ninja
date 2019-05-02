(function() {
  'use strict';

  function DOM(element) {
    if (!(this instanceof DOM)) return new DOM(element);
    this.element = document.querySelectorAll(element);
    //if (this.element.length === 1) return this.get();
  }

  DOM.prototype.on = function(event, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.addEventListener(event, callback);
    });
  };

  DOM.prototype.off = function(event, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.removeEventListener(event, callback);
    });
  };

  DOM.prototype.get = function(index) {
    if (!index) return this.element[0];
    return this.element[index];
  };

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.element, arguments); // nunk se esquecer do arguments.
  };

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.element, arguments);
  };

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.element, arguments);
  };

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.element, arguments);
  };

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.element, arguments);
  };

  DOM.prototype.every = function every() {
    return Array.prototype.every.apply(this.element, arguments);
  };

  DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.element, arguments);
  };

  //metodos estaticos

  DOM.is = function is(obj) {
    return Object.prototype.toString.call(obj);
  };

  DOM.isArray = function isArray(obj) {
    return this.is(obj) === '[object Array]';
  };

  DOM.isString = function isString(obj) {
    return this.is(obj) === '[object String]';
  };

  DOM.isObject = function isObject(obj) {
    return this.is(obj) === '[object Object]';
  };

  DOM.isNumber = function isNumber(obj) {
    return this.is(obj) === '[object Number]';
  };

  DOM.isBoolean = function isBoolean(obj) {
    return this.is(obj) === '[object Boolean]';
  };

  DOM.isFunction = function isFunction(obj) {
    return this.is(obj) === '[object Function]';
  };

  DOM.isNull = function isNull(obj) {
    return (
      this.is(obj) === '[object Null]' || this.is(obj) === '[object Undefined]'
    );
  };

  window.DOM = DOM;
})();
