/*
What is ployfill ?
=> The ES6 release introduced many new features that are not yet fully supported by all browsers. If we use ES6 or ES7 or ES8 features in our code, it might not work in some older browsers due to a lack of support for the new features. Besides syntax constructs and operators, new language features may also include built-in functions. Thus, we use polyfill along with a transpiler. A polyfill is a piece of code that adds functionality to older browsers that have incompatibility issues.
In older browsers, the following features require polyfill support by explicitly defining the functions:

Polyfills are pieces of code that provide modern functionality to older browsers that lack native support for those features. They bridge the gap between the JavaScript language features and APIs that are available in modern browsers and the limited capabilities of older browser versions.

When a new JavaScript feature or API is introduced, it takes some time before all major browsers support it. During this transitional phase, developers can use polyfills to ensure their code works consistently across different browsers.

Polyfills achieve this by detecting if a feature or API is missing and then providing a custom implementation of that feature using existing JavaScript capabilities. By using polyfills, developers can write code using the latest JavaScript features and APIs without worrying about whether they are supported by all targeted browsers

=> Polyfill is a browser fallback suppose what if browser doesn't have bind function  and u have to write own bind function 
=> U assume that if any method keep on Function.prototype , each & every method what we write access to those method 
=> rteurn function we need similar behviour with mybind method , It should return function to us 
*/
let obj = {
  firstName: "prafulla",
  lastName: "deshmukh",
};

let printName = function (city, country) {
  console.log(
    this.firstName + " " + this.lastName + " " + city + " " + country
  );
};
let printmyName = printName.bind(obj, "washim");
printmyName("india");

Function.prototype.mybind = function (...args) {
  let thisObj = this;
  let params = args.slice(1);
  return function (...args1) {
    thisObj.apply(args[0], [...params, ...args1]);
  };
};

let printmyName1 = printName.mybind(obj, "Washim");
printmyName1("India");
