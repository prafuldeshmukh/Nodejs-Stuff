/*
  resolve & reject are funnction 
  Always return data from chains
  Passing things down the chain
  Catch will handle any error down the chain
  Attach promise to call back function to it
  Your are just attaching faliure callback function using a catch
  to promise object this will handle erros very gracefully in our program
  Whatever u will return from this then will move to the next of the chain
  If there is along chain and then we wanted to catch erros for a specific 
  portion of the chain What we will do , We will just place catch method  just
  below that portion

  That catch will handle all the errors on the top 
  If we place a catch just at the last of the chain It will handle errors for 
  all top of the chain

  Promises are useful when you have to handle more than one asynchronous task, one after another. For that, we use promise chaining. You can perform an operation after a promise is resolved using methods then() , catch() and finally() .

  Promise Chaining is a simple concept by which we may initialize another promise inside our .then() method and accordingly we may execute our results. The function inside then captures the value returned by the previous promise 

  Sometimes, you want to execute two or more related asynchronous operations, where the next operation starts with the result from the previous step

*/

const cart = ["shoes", "pants", "kurta"];
const promise = createOrder(cart);

promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  });

function createOrder() {
  const pr = new Promise(function (resolve, reject) {
    //createorder
    //validatecard
    //orderId
    if (!validateCard()) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    let orderId = "123";
    if (orderId) {
      setTimeout(resolve(orderId), 5000);
    }
  });
  return pr;
}

function validateCard() {
  return false;
}

function proceedToPayment() {
  return new Promise(function (resolve, reject) {
    resolve("Payment Successful");
  });
}
