/*
  => both concept used for optimize & perofmance of the web APP
   => How do will do that it happens by limitimg the rate of function calls
   => Limiting the rate execution of a particluar function
   => The function call be anything it will go & fetch data from API,
   => It could be logging in logger
   => Someting function will call a lot of time, We attcah function to event listener
       just calling repeatdly & unnessary
   => We will limit the rate of execution & optimize the perfomance of webapp
   => U must see search bar in ecommerce website
   
*/
/*
   debouncing & throttling :
   =>  Debouncing and throttling are techniques in javascript to optimise the application and browser performance. 
   => Why we want to use debouncing & throttling ?
   If you are a web developer, you might have encountered situations where you need to optimize the performance of your code that runs repeatedly within a short period of time. For example, you might have a search bar that fetches suggestions from the backend as the user types, or a resize event handler that adjusts the layout of your page. In these cases, you don’t want to execute your code too often, as it might cause unnecessary network requests, a laggy user interface, or high CPU usage.

    =>   To solve this problem, you can use two techniques called debouncing and throttling. These techniques allow you to control the rate at which your code is executed, and reduce the number of times it is called. In this article, we will explain what debouncing and throttling are, how they differ, and how to implement them in JavaScript.

    => What is debouncing ?
       =>  Debouncing is a technique that delays the execution of a function until the user stops performing a certain action for a specified amount of time OR 
       => Debouncing is a technique where we can monitor the time delay of user action and once that delay reaches our predetermined threshold we can can make the function call.OR
       => Debouncing: In debouncing, the function is only executed after a specific delay since the last event's occurrence
       => For Example : 
      => Let’s take a real world scenario where we use this the most.
         Most of the websites have search bar which helps the user to search with a specific keyword to get what they want. If we take e-commerce use-case, when the user tries to search a specific product, one can see multiple suggestions popping up even before he enters the entire keyword.
         
         So what’s happening here is once the user starts typing the keyword we are making API call for each of the character. If the user types “Apple MacBook Pro”, then 17 times (including spaces) we have made API calls to get the results.
         
         This approach is not ideal even though we have the best intention in mind to display suggestions to user while he still typing.
         
         We can optimise and reduce the count of API calls by debounce logic. We can wait for certain amount of time before making the next API call.

          Here we monitor the delay user gives between two key presses. If this delay matches our threshold limit, then we make another API call.

          Let’s keep 500ms as threshold limit for this delay, it means if the user takes 500ms or more to type the next character, only then we make our next API call. Ideally when the user is typing “Apple MacBook Pro”, he takes 500ms or more delay between each key press is only 3 to 5 times. This way we can reduce the count of API calls from 17 to just 3-5.
 
          Let’s see how our code looks with first scenario where 17 API call happens for “Apple MacBook Pro”

Throttling : =>          
=> Throttling is a technique where we make the function call in a predetermined time interval irrespective of continuous user actions.
=> Throttling is a technique used to limit the number of times a function can be called over a certain period. It ensures that the function is only called at set intervals, preventing it from being called too often. For example, when a user is scrolling a page with infinite scroll, we can throttle the function calls that load more data to ensure the data requests happen only at a certain interval

=> Throttling: In throttling, the function is executed at a fixed interval. Even if the triggering event occurs more frequently, the function is invoked according to the defined interval. 

=> Let’s take an example of a shooting game, where user pulls the trigger of a weapon continuously. We need to take care the Rate of Fire for different type of weapons.

Shotgun might take more time interval between two rounds of fire, where as machine guns take less interval. But the challenge here is, usually user clicks on trigger button continuously and we need to take care of the time interval between each shot.

Let’s say shotguns take 500ms to fire the next round and machine guns take just 100ms. We need to write the logic such that even if the user clicks on trigger button before this threshold, we should hold the fire according to the weapon’s Rate of Fire.
   
1. Debouncing Use Case : Search Bar 
2. Throttling use Case :  shooting game scenario or browser resizing or onScroll events


*/
