/*
  Await is a keyword that can only be used inside an async function
  Await will resolves the promises

  Async / Await:
  JS Engine was waiting for promise  to be resolved 
  Once the promise is resolved whether it takes 10 seconds , the program will wait here

  It actually waits at that point of time

  // Promises 
  JS engine not waiting for us , it goes to the next line then promise it is resolved after 10 sec
   function execution is suspened , behind the scense javascript nmust be keeping a track of this
   this handle promise and till what line it has been executed and what promise is waiting for 
*/
console.log("Hi I am here");
