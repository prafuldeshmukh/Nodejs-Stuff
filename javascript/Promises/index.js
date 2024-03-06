/*
What is promise in javascript ?
=> This promise object as a placeholder , placeholder which will be filled later with a value 
=> promises object is a placeholder for a certain period of time until we receive a value from 
an asynchronous function 
=> a Container for future value
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
