/*
What is async ?
What is await?
How async works behind the scenes ?
Example of using async/await?
Error Handling
Interviewe
Async /Await Vs Promise.then/catch

=>  Async is a keyword that is used before a function to create an async function
How async function is a different then normal function
=>  This async function always return a promise
=>  if u don't return a promise suppose u return  a value which is a non-promise value
    what will function do it will basically take this value automatically wrap it inside a promise and it will return a promise 
=>  How do u get this data out of this promise => Using .then method  
=> Async & Await is used to handle promises
=> What do we need async & await ?
=> Await is a keyword that can only be used inside an async function 
=> Await will resolves the promises

OR 

async/await is a syntax introduced in ES2017 (ES8) that allows writing asynchronous code in a more synchronous-like manner. It builds upon Promises and provides a more intuitive and linear control flow. The `async` keyword is used to define an asynchronous function, and the `await` keyword is used to pause the execution of the function until a Promise is resolved or rejected.

=> As soon as this get data function will be executed , It will register promise
   and it will take this callback function and keep it separately till it is resolved
   it will continue executing 
=> It will not wait for the promise to be resolved 
=> Async await program will wait over here
=> JS engine was waiting for promise to be resolved
=> JS engine appears to be waiting here
=> handle promise function it is not in the call stack 
=> When this program executes it will executes line by line 
=> As soon as handle function is called , It sees that tehre are two promises which need tobe resolved , These promises are talking their own time in resolution 
=> Async promises registered 
=> This handlepromise function come inside your call stack 
=> It will see there is a await P1 
=> promise function is execution will suspend and this will move out of callstack 
=> It will not block the main thread
=> It will wait P1 will be resolved 
=> This P1 will be resolved after 5 seconds 
=> so handle promise function will again come inside call satck and it will start executing
   but this time it will start executing from where it left
=> It will log the value 
=> see whether this P2 is resolved or not it 
=> Again it will suspend the execution it will again move out from call stack 
=> Once P2 is resolved afrer 10 seconds 
=> handle promise again come back to call stack    
=> It starts executing from place it left 
=> javascript engine is not waiting for this promise to be resolved 
=> This handle promise will not keep waiting in the callstack 
=> but handle promises suspend the execution of that function
=> it will continue then promise is resolved 
=> Basically javascript behind the secene must be keeping track of this handle promise and 
   till what line it has been executed and what promise it is waiting for  
   => fetch function basically is a promise When this promise resolve It gives you a response
   => It gives u response object 
   => this response object has a body , which is a readable stream 
   => This is a redable stream 
   => Suppose u want to convert this readable stram to json
   => .json is again promise , When this promise is resolved it gives the result or the value
   => 
*/
/*
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved Value");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved Value");
  }, 10000);
});

async function handlePromise() {
  console.log("Hello World");
  const data = await p1;
  console.log("Hello World 1");
  console.log(data);

  const data1 = await p2;
  console.log("Hello World 2");
  console.log(data1);
}
handlePromise();
*/
/*

function getData() {
  // JS Engine will not wait for promise to be resolved
  p.then((res) => console.log(res));
  console.log("Hello World");
}
getData();

Advantages :-
	Async/await is a new way to write asynchronous code. Previous alternatives for asynchronous code are callbacks and promises.
	Async/await is actually just syntax sugar built on top of promises. It cannot be used with plain callbacks or node callbacks.
	Async/await is, like promises, non-blocking.
	Async/await makes asynchronous code look and behave a little more like synchronous code.


*/

/*
  Async is a keyword which is used with function 
  Await can be used inside function tohandle promises
  These promises are asynchronous 
  Async await is basically syntatic sugar over then & catch 
  Javascript uses its own promise behind scense 
  Async await u don't have do promise chaining
  Easier to read 

*/

const GIHUB_URL = "https://api.github.com/users/akshaymarch7";

async function handleAsynAwait() {
  const data = await fetch(GIHUB_URL);
  const res = await data.json();
  console.log(res);
}
handleAsynAwait();
