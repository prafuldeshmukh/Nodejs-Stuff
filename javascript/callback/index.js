/*
  Callback Hell & Inversion Of Control
  => Callbacks are the traditional approach to handle asynchronous operations in JavaScript. A callback is a function passed as an argument to another function and is executed once the asynchronous operation completes. Callbacks can result in deeply nested code structures, also known as callback hell, making the code harder to read and maintain.
  => By definition, a callback is a function that you pass into another function as an argument for executing later.
  => Javascript is a synchronous single thread language and it can do just one thing at a time
  => It has one call satck & it can execute just one thing at a time 
  => Whatever code will give to javascript it will quickly execute by javascript engine , Does n't wait for anything
  => What if we really need to wait for something , U want to execute some API after 5 seconds
     how will do that , using callback
  =>  Callback is a powerful way to do asynchronous thing in javascript, so we can take a code 
      piece of code inside a function and we can just pass it as a callback which can be executed 
      later point of time 
  => That why callback plays a very imp role in writing asynchronous code in javascript
  => Suppose we are buliding ecommerce website , Ecommerce website can't exist without cart
   => A callback is a function passed as an argument to another function and is executed once the asynchronous operation completes. Callbacks can result in deeply nested code structures, also known as callback hell, making the code harder to read and maintain.
    How ecommerce website works :
      1. Create Order with cart items
      2. Payment
      3. Payment Summary
      4. Update Wallet
      First of we need to create an order by using create order API and once the order is created 
      then only we can proceed to payment ther is a depedency between them 
      How do we manage that dependancy in our code  because this is an async operation 
      so here callback come into picture
      
      => It is the resposibilty of create order API to create an order and call this function back
         that way we can handle async operation in javascript
      => api.showOrderSummary we have to call this API only after we have done with the payments   
      => Now it is the responsibility of proceed to payment API to complete the payment 
         & call this function back
      => That's how we can manage this dependancy between this whole flow which happens one after the other
      => Callback hell so one callback inside another callback ,  a lot of nested callback 
      => Our code start to grow horizontally instead of vertically this is a callback hell
      => This type of code structure is very unmaintainble & unreadble 
      => This structure is also known as pyramid of doom
      => Inversion Of Control :
          => That we lose control of our program because we pass that callback function into another 
             function now we have given control of this function to some other function
             We don't know whether that function will ever execute or callback  
          => It is another problem we see while using callbacks 
          => Invserion of control is like that u lose the control of your code when we are using callback
      => We gave the control of program to create order API 
      => Now it is the resposibility of create order API to call our function back 
         and we are blindy trusting create order API , We don't know create order API 
         must have been seen in some other services or some other developer wrote it
      => What if our callback function is never called can happen 
      => what if our callback function is called twice
      => Whenever we have this callback function and pass it to some other function 
      => We are giving the control of our function / our piece of written code to some other code 
      => We don't know what's happening behind the scenses now 
     
      
      const cart = ["shoes","pants","Kurta"];
       
       ap.createorder(cart, function(){
               api.proceedToPayment( function(){
                    api.showOrderSummary();
               })
       })


       What are Callbacks?

A callback is a function that is passed as an argument to another function, and is called after the main function has finished its execution.
Callbacks allow you to handle the results of an asynchronous operation in a non-blocking manner, which means that the program can continue to run while the operation is being executed.

Why use Callbacks?

Callbacks are used to handle the results of asynchronous operations in a non-blocking manner. Asynchronous operations are operations that take a significant amount of time to complete, such as network requests, file I/O, and database queries. If these operations were executed synchronously, the program would freeze and wait for the operation to complete before continuing. This can lead to a poor user experience, as the program would appear unresponsive.

Callbacks allow you to continue executing code while the operation is being executed in the background. Once the operation has completed, the callback function is called with the result of the operation. This way, you can ensure that the program remains responsive and the user experience is not impacted.




Suppose that you need to develop a script that downloads a picture from a remote server and processes it after the download completes:

function download(url) {
    // ...
}

function process(picture) {
    // ...
}

download(url);
process(picture);
Code language: JavaScript (javascript)
However, downloading a picture from a remote server takes time depending on the network speed and the size of the picture.

The following download() function uses the setTimeout() function to simulate the network request:

function download(url) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
    },1000);
}
Code language: JavaScript (javascript)
And this code emulates the process() function:

function process(picture) {
    console.log(`Processing ${picture}`);
}
Code language: JavaScript (javascript)
When you execute the following code:

let url = 'https://www.javascripttutorial.net/pic.jpg';

download(url);
process(url);
Code language: JavaScript (javascript)
you will get the following output:

Processing https://javascripttutorial.net/pic.jpg
Downloading https://javascripttutorial.net/pic.jpg ...
Code language: JavaScript (javascript)
This is not what you expected because the process() function executes before the download() function. The correct sequence should be:

Download the picture and wait for the download complete.
Process the picture.
To resolve this issue, you can pass the process() function to the download() function and execute the process() function inside the download() function once the download completes, like this:

function download(url, callback) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
        
        // process the picture once it is completed
        callback(url);
    }, 1000);
}

function process(picture) {
    console.log(`Processing ${picture}`);
}

let url = 'https://wwww.javascripttutorial.net/pic.jpg';
download(url, process);
Code language: JavaScript (javascript)
Output:

Downloading https://www.javascripttutorial.net/pic.jpg ...
Processing https://www.javascripttutorial.net/pic.jpg
Code language: JavaScript (javascript)
Now, it works as expected.

In this example, the process() is a callback passed into an asynchronous function.

       

*/
