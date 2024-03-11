/*
=> Higher Order Function => Pass the function to another function & return function from anotehr function

Map Function   
=> map function is used to transfrom an array
=> U want to transform each & every value of this array to new array 
=> After transformation new array will double, triple & binary
=> One of the tranformation of finding binay value of individual element of an array
=> U want to tranform an array u can do with map function   
=> What interally will do Run this function each & every value of this array & create 
   new array of it
filter function =>
filter function is basically used to filter inside an array 
if u want to filter the value which are odd inside it
filter the array based on some logic  
filter the value which is greater than 4 
Reduce Function :
=> Reduce function is basically used at a place where u have to take all the element of an array & come with a single value out of them
=> May to find sum , min / max an array 
=> This function iterate over each & every element of array
=> curr represent the value , acc => accumulate the value , accumulate the result what we have to get out of those values which are present in the array or append the current value itself
=> How to pass initialization value in accumulator
=> In reduce first argument is function & second argument is initialization of value , Which
   we need to pass inside the accumulator 


*/
const arr = [5, 2, 4, 6, 1];

console.log("............Reduce Function................");

function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log("findMax", findMax(arr));

const reduceFindMax = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);

console.log("Reduce findMax", reduceFindMax);

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log("findSum", findSum(arr));
// conver into reduce function

const reduceOutput = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

console.log("ReduceOutput", reduceOutput);

console.log("......... FIlter Function .....................");
function isOdd(x) {
  return x % 2;
}
const filterOutput = arr.filter(isOdd);
console.log(filterOutput);

const filterOutput1 = arr.filter((x) => x > 4);
console.log(filterOutput1);
console.log("................. Map Function.................");

// this is called a tranformation logic
function double(x) {
  return x * 2;
}

function binary(x) {
  return x.toString(2);
}

const output = arr.map(binary);
console.log(output);

const output1 = arr.map((x) => x.toString(2));
console.log(output1);

console.log(
  "..........................Combine Example........................"
);

const users = [
  { firstName: "Prafulla", lastName: "Deshmukh", age: 35 },
  { firstName: "Kalyani", lastName: "Deshmukh", age: 35 },
  { firstName: "Donald", lastName: "Trump", age: 50 },
  { firstName: "Elon", lastName: "Musk", age: 51 },
];
const userOutput = users.map(function (x) {
  return x.firstName + " " + x.lastName;
});
console.log("userOutput", userOutput);

// get the output {35:2, 50:1, 51:1}

let reduceObjOutput = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] += 1;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(reduceObjOutput);

/*
 We are using an array we need to find one value inside it, We don't want list over now
We want one object , object should have a diffrent unique value We are using
we want to reduce an array particular an object

=> U can chain the map, filter & reduce
*/

// filter

const filterObjOutput = users.filter((x) => x.age > 40).map((x) => x.firstName);

console.log(filterObjOutput);

// Using Reduce

const filterRedObjOut = users.reduce((acc, curr) => {
  if (curr.age > 40) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log(filterRedObjOut);

/*
In JavaScript, map, reduce, and filter are three higher-order functions that operate on arrays. They provide a concise and expressive way to perform operations on array elements.

map Function:
map is used for transforming each element of an array.
Purpose: Transforms each element of an array and returns a new array of the same length.

filter Function
filter is used for selecting elements from an array based on a condition.
Purpose: Creates a new array with elements that satisfy a specified condition

The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.


reduce is used for accumulating values from an array into a single result.
Purpose: Reduces an array to a single value by accumulating the results of applying a function on each element.
The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.

*/
