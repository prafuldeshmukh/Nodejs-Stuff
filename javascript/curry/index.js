/*
Using Bind Method We can achieve curry function   
let multiply = function (x, y) {
   console.log(x * y);
};
let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3);

let multiplyByThree = multiply.bind(this, 5);
multiplyByTwo(10);
*/
/* Using Closure We can achieve curry function*/
function multiply(x) {
  return function (y) {
    console.log(x * y);
  };
}

let multiplyByTwo = multiply(5);
multiplyByTwo(2);

/*

 */

/* 
You can use one method to create MultipleByOne, MultipeByTwo
We make copy of mutiply method and  create more method out  of it.
By presetting argument inside the function 
Another way to use closure 

=>	Currying is a technique used in functional programming that allows you to transform a function with multiple arguments into a sequence of functions, each taking only one argument at a time.
=> In JavaScript, currying is a powerful tool that can improve code reusability, composability, and maintainability
=> 	It can have some advantages of using it in this way Where we just call the main function once & then rest of the function are called again
=>  	We simply wrap a function inside a function, which means we are going to return a function from another function to obtain this kind of translation. The parent function takes the first provided argument and returns the function that takes the next argument and this keeps on repeating till the number of arguments ends. Hopefully, the function that receives the last argument returns the expected result.


To understand currying, let’s start with a basic example. Consider a function called add that takes two arguments and returns their sum:
function add(x, y) {
  return x + y;
}
console.log(add(3, 4)); // Output: 7
The add function takes two arguments, x and y, and returns their sum. Now, let's curry this function. We can use a technique called partial application to achieve currying:

function add(x) {
  return function(y) {
    return x + y;
  };
}

console.log(add(3)(4)); // Output: 7
In the curried version, the add function now takes one argument, x, and returns another function that takes the second argument, y, and performs the addition. This allows us to call add(3) and obtain a new function that can be called with the remaining argument 4.

Currying provides several benefits. One advantage is that it allows us to create specialized functions from a more generic one. We can create a reusable addOne function by partially applying the add function:

const addOne = add(1);
console.log(addOne(5)); // Output: 6
console.log(addOne(10)); // Output: 11
Here, addOne is a new function derived from add that always adds 1 to its argument. We can reuse this function throughout our codebase without duplicating the logic.

Another advantage of currying is the ability to create higher-order functions that enhance composability. Consider a function called multiply that takes three arguments and returns their product:

function multiply(x, y, z) {
  return x * y * z;
}

console.log(multiply(2, 3, 4)); // Output: 24
Now, let’s curry the multiply function:

function multiply(x) {
  return function(y) {
    return function(z) {
      return x * y * z;
    };
  };
}

console.log(multiply(2)(3)(4)); // Output: 24
With the curried version, we can chain function calls, passing one argument at a time. This improves code readability and allows for easy function composition:

const multiplyByTwo = multiply(2);
const multiplyByThree = multiplyByTwo(3);

console.log(multiplyByThree(4)); // Output: 24
console.log(multiply(2)(3)(4)); // Output: 24
Currying also enables the creation of more flexible functions. We can create variations of a function by partially applying some arguments and leaving others to be supplied later:

const multiplyByTwoAndThree = multiply(2)(3);

console.log(multiplyByTwoAndThree(5)); // Output: 30
console.log(multiplyByTwoAndThree(10)); // Output: 60

Now, let’s explore a practical use case for currying in JavaScript — handling event handlers. Imagine a scenario where you have a set of buttons, and each button should perform a different action when clicked. Instead of writing separate event handlers for each button, you can leverage currying to create reusable event handlers.

function handleClick(action) {
  return function(event) {
    console.log(`Performing ${action} action on button click.`);
  };
}

const handleSaveClick = handleClick('save');
const handleDeleteClick = handleClick('delete');

// Attach event handlers to buttons
document.getElementById('saveButton').addEventListener('click', handleSaveClick);
document.getElementById('deleteButton').addEventListener('click', handleDeleteClick);
In this example, the handleClick function is curried to accept an action parameter. It returns a new function that logs the corresponding action when the button is clicked. By partially applying the handleClick function, we create specialized event handlers for different actions (save and delete). This approach reduces code duplication and enhances 
Why is currying useful in JavaScript?
	It helps us to create a higher-order function
	It reduces the chances of error in our function by dividing it into multiple smaller functions that can handle one responsibility.
	It is very useful in building modular and reusable code
	It helps us to avoid passing the same variable multiple times
	It makes the code more readable




	 I am going to create a piece of code where we are calculating product price and discount calculation 
	Let’s say I create a function called price calculation now this function takes price as a parameter inside function defining discount percentage
	I have function which is getting product price from API, that price I have to pass discount amt.
	So, there are various percentage u are going to pass, but this price remains same
	Where we have just single value, but there can be multiple parameter U want to pass with only one different value.
	This is where currying cab be useful
	So discount amt becomes a function which is going to return various discount amt depending on the percentage but the price will remain the same only i.e 300
	You are calling the function partially

                    

const priceCal = (price) =>{
     return (per) =>{
       return price * per;
     }
}
const discountAmt = priceCal(300);
console.log(discountAmt(0.5));
console.log(discountAmt(3.0));
 

	Currying is an incredibly useful techniques of functional programming which save various purpose like passing params or avoiding unwanted repetitions like We typed with product price which price was passed only once.


*/

// let sum = function (a) {
//   return function (b) {
//     if (b) {
//       return sum(a + b);
//     } else {
//       return a;
//     }
//   };
// };
let sum = (a) => (b) => b ? sum(a + b) : a;
console.log(sum(1)(2)(3)(4)(5)(5)());
