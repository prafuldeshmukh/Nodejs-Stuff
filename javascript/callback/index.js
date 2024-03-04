/*
  Callback Hell & Inversion Of Control
  => Javascript is a synchronous single thread language and it can do just one thing at a time
  => It has one call satck & it can execute just one thing at a time 
  => Whatever code will give to javascript it will quickly execute by javascript engine , Does n't wait for anything
  => What if we really need to wait for something , U want toexecute some API after 5 seconds
     how will do that , using callback
  =>  Callback is a powerful way to do asynchronous thing in javascript, so we can take a code 
      piece of code inside a function and we can just pass it as a callback which can be executed 
      later point of time 
  => That why callback plays a very imp role in writing asynchronous code in javascript
  => Suppose we are buliding ecommerce website , Ecommerce website can't exist without cart

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
          => Invserion of control is like that u lose the control of your codd when we are using callback
      => create order an important piece of our code , isn't it proceed to payment
      => We gave the control of program to create order API 
      => Now it is the resposibility of create order API to call our function back 
         and we are blindy trusting create order API , We don't know create order API 
         must have been seen in some other services or some other developer wrote it
      => What if our callback function is never called can happen 
      => what if our callback function is called twice
      => Whenever we have this callback function and pass it to some other function 
      => We are giving the control of our function & our piece of written code to some other code 
      => We don't know what's happening behind the scenses now 
     
      
      const cart = ["shoes","pants","Kurta"];
       
       ap.createorder(cart, function(){
               api.proceedToPayment( function(){
                    api.showOrderSummary();
               })
       })

       

*/
