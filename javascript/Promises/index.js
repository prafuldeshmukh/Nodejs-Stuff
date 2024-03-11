/*
What is promise in javascript ?
=> This promise object as a placeholder , placeholder which will be filled later with a value 
=> promises object is a placeholder for a certain period of time until we receive a value from 
an asynchronous function 
=> a Container for future value
=> Promises provide a more structured and readable way to handle asynchronous operations.
=> A promise is an object that representing the eventual complation or faliure of asynchronous operation, it's a returned object to which you attach callbacks, instead of passing callbacks into a function.
=> We were passing a function inside another API and we were given control of our program, into some other API Which we want to avoid that was inveraion of control
=> How do we solve it we basically had a promsie object and that promise object will be evetually 
   filled with a result of async operation that promise object
 => We don't pass a function  inside any other function but what we do it we attach a callacbk function to that promise object Whever we have data inside or whenever the promise is resolved 
 autmatically that callback function will be called by promises 
 => Promises give us  guarantee & trust in our whole transactions 
 => How we can resolve the promises just once and u can  only have three states for promises
    Pending, fulfilled & Rejected 
 => promise is immutable , U can't alter a promise, we can pass promises without care
 => So promise comes with a lot of trust , It was a special object Which had two major properties 
    One was the promise state & the other one was promise result which used to hold data , which is evetually get filled
 => How to solve callback hell using promises chaining to handle this type of issue
 => We can use then to attcah a lot of callbacks hanlders for our promises 
 => U might want to return promise once again into the chain othwerise u might lose some data inside the chain
 => Promises help avoid callback hell and make the code more readable by providing a chainable syntax and clearer error handling
 => Promises allow chaining of operations and provide separate handling for success and error cases using the `.then()` and `.catch()` methods.


 80.	Why do you need a promise ?

 Promises are used to handle asynchronous operations. They provide an alternative approach for callbacks by reducing the callback hell and writing the cleaner code.


 81.	What are the three states of promise

Promises have three states:
i.	Pending: This is an initial state of the Promise before an operation begins
ii.	Fulfilled: This state indicates that the specified operation was completed.
iii.	Rejected: This state indicates that the operation did not complete. In this case an error value will be thrown.


82.	What is chaining the promise? Explain the syntax.
     
	When it comes to chaining, we do not keep on writing multiple promises in a nested pattern.
	But instead, we make sure that we return a promise inside every then, so that next chain will be executed properly


83.	What is the status of promise by default? What will be the status of promise when resolved or rejected?

	Pending state
	After resolved state of promise state is fulfilled
	After rejected state of promise state is rejected


Promise.all will reject as soon as one of the Promises in the array rejects.
Promise.allSettled will never reject - it will resolve once all Promises in the array have either rejected or resolved.

The `all()` method is used to handle multiple promises simultaneously. It takes an array of promises as input and returns a new promise that resolves with an array of resolved values when all the input promises are resolved. If any of the input promises are rejected, the resulting promise will be rejected with the reason of the first rejected promise.

The `Promise.allSettled()` method takes an array of promises as input and returns a new promise. This new promise resolves when all the input promises have settled (either resolved or rejected), regardless of their outcome. It returns an array of objects containing the fulfillment status and the value or reason of each promise.


The `Promise.race()` method takes an array of promises as input and returns a new promise. This new promise resolves or rejects as soon as the first promise in the input array settles (either resolves or rejects). It returns the value or reason of the first settled promise.


*/

// const GIHUB_URL = "https://api.github.com/users/akshaymarch7";
// const user = fetch(GIHUB_URL);
// console.log(user);

const cart = ["shoes", "pants", "kurta"];

cartOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function () {
      updateWalletBalance();
    });
  });
});

cartOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    updateWalletBalance();
  });
