/*
   this in global space 
   console.log(this) // globalobject - window , global
   this function is work differtely in strict mode and non-strict mode 
   strict mode has some stricker riles for javascript

  => this isnide non-strict mode  - this substitution
  if the value of this keyword is undefined or null => Strict Mode
  => this keyword will be replaced with globalobject only in non-strict mode

  // this keyword value depends on how the function is called (window)   

  => When u are inside an object if u create a function inside an object 
      this function X is known as method now
*/
"use strict";
function x() {
  //the value depends on strict mode / non strict mode
  console.log(this);
}
x(); // undefined
window.x(); //  window

// this inside a object's method
const obj = {
  a: 10,
  y: function () {
    console.log(this.a);
  },
};
obj.y();

// call,apply & bind (sharing methods)
/*
  by overriding the valie of this keyword 
  I want reuse this method for the student2 
  call method take the value of this keyword 
  inside the function i am trying override the value of this 
  Value of this can be modifted using call, apply & bind method
  set the value of 
*/

const employee = {
  name: "prafulla",
  displyName: function () {
    console.log(this.name); // value of this keyword is object
  },
};

const employee2 = {
  name: "Rahul",
};

employee.displyName.call(employee2); // value of this => stsudent 2

// this inside arrow function
/*
  arrow function does not have their own this binding
  they takes the value of their lexical environment where they are enclosed 
  where this code is lexically present inside your code 
  it is present in global space , The value will window object once again
*/
const obj2 = {
  a: 10,
  x: () => {
    console.log("this", this);
  },
  y: function () {
    const z = () => {
      console.log("inside fun", this.a);
    };
    z();
  },
};
obj2.y();
obj2.x();

// This inside DOM element => Value of this is HTML button element
// This will be the reference to this HTML button element
// Reference to HTML element

// this inside class, constructor

/*
 => How this behaves in global space , this keyword in global space reference / referred 
    to global object, that global object in browser is windows and in the global object 
    in nodeJS can be different , It can be diffrent in different the Javascript Runtime
    Environment.
 => How this behaves inside a function : 
    The value of this inside a function depends on strict and non-strict mode inside a strict 
    mode value of this is undefined 
    what if u have non-strict mode then the value of this is window
    why this happened , why the value become window because of this substitution
    what is this substitution  when it happens this substitution happens in non-trict mode 
    whenever the value of this keyword is undefined or null then It becomes the global object 
    the global object here was window so it become window , In nodejs or any other 
    runtime it can be different
 => this keyword values depends on how the function is called (window)
    if u call this function like this , it will return undefined
    if u will call it using this object window.x then it will be window
    
 => How this behave inside objects' method 
    if we have a object employee & we have a method displayName so the value of 
    this keyword will be this object 
    the value of this keyword is object
 =>  call, apply & bind if u want share methods, u can share it using employee
     displayname method and over here u will pass the value what the this  should 
     be if u write employee , because displayName method was on employee object
     so i will alawys write employee displayName I am referring to employee do displayName 
     I am calling this function with whatever u will pass over here will become the value of this keyword

  => Indide arrow function u have to remember this thing "enclosing lexical context"
     Whenever u see an arrow function u have to find what is the enclosing lexical context
     so if u see the lexical enclosing context is the global space here , so the value of this
     will be global object
     I have made a nested method so basically it is an arrow function inside another function
     so the value of this keyword ibside the this arrow function will be depend on enclosing 
     lexical context
     so the value of this keyword will be obj2
  
  => How this behaves in DOM  - It will refer to that particular HTML DOM element
  


  Key Takeaways for quick navigation:

00:00 🔑 JavaScript's "this" keyword can be confusing for many and behaves differently in various scenarios.
00:55 🔑 The behavior of the "this" keyword depends on the context, such as whether it's in a function, global space, or an arrow function.
04:17 🔑 In the global space, the value of "this" is the global object, which can vary depending on the JavaScript runtime environment (e.g., window in browsers, Global in Node.js).
07:30 🔑 Inside a function, the value of "this" can be undefined in strict mode or the global object in non-strict mode.
10:06 🔑 JavaScript uses a mechanism called "this substitution," where "this" is replaced with the global object when it's undefined or null in non-strict mode.
16:11 🔑 Inside an object's method, "this" refers to the object itself where the method is called.
21:11 🔑 "call," "apply," and "bind" are important functions used to manipulate the value of "this" when calling methods and sharing them between objects.
26:23 🔑 It's essential to understand "call," "apply," and "bind" to effectively control the value of "this" in JavaScript methods.
27:30 🔑 In global space, the 'this' keyword refers to the global object (e.g., 'window' in the browser).
28:08 🔑 In strict mode, 'this' inside a function is undefined; in non-strict mode, it refers to the global object.
35:23 🔑 Understanding "this" substitution: When 'this' is undefined or null inside a function, it becomes the global object.
39:59 🔑 Inside an object's method, 'this' refers to the object itself.
44:12 🔑 The 'call' method can be used to invoke a function with a specific 'this' context.
46:01 🔑 Arrow functions do not have their own 'this' binding and take the value of the enclosing lexical context.
48:46 🔑 In the context of DOM elements, 'this' refers to the specific HTML element being interacted with.


 

*/
