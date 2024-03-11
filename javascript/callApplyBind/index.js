/*
=> Each & every function javascript has access to "this" keyword, this keyword point to the object
(obj1)
=> this refer to obj1 
=> Suppose u want to display full name in obj2 , one way is just create similar method like obj1
=> But this is not a good way to do, 
=> so that where call method come into picture
=> Using call method we can do it function borrowing
=> We can borrow function from other object & use with data of some other object
=> Take the funtion which we need to call in our case obj1.displayFullName
=> each & every method javascript has access of special function i.e."call"
=> What we want "this" to be pointing to object obj2
=> We pass obj2 (object) as first agrument
=> We want to reuse this method , We will keep it seperterly
=> What if more parameter in the function , How will pass diffrent parameter over here
=> first parameter is object refernce & pointing to this keyword, second parameter is argument to function with comma seperate, We pass the arugment indiviual 
=> only difference between call & apply is the way to pass the parameter,
   here we pass argument with an array list
=> Bind method looks exactly the same as call method but only difference is , Instead of calling directly over here (call), bind will bind the method (displayFullName) with object & return as copy of that method 
=> It will create copy of displyFullName method and bind to obj2 & return a function / method, which will be called / invoked later
=> Here is the catch over here, It doesn't call / invoke direcly


You want to change the context of this “obj” in this case, that’s where the call, apply & bind methods come to handy
	 The call method takes the first args as the object to be passed to “this”, Whatever parameter u pass absolutely fine .
	Syntax functionName.call(thisArgs, arg1,arg2…argn)
	It doesn’t display window, It display “obj” is something which is automatically handled by JavaScript, by the call method
	“call” is used to change the reference or context or value of “this” object


	Apply is actually used for the same thing apply is also used for changing the reference of “this” object only, but there is a difference in terms of parameter passing

	What apply is that u can pass only two parameter one is “this” argument & second is one array, In array individuals element assign 

	apply take only two parameters & first is “this” object and second is one array, which is passed individuals element to “test” function
	bind is also the same, bind also allow to change the value of “this” , parameter are also same like “call” method




Bind & call are similar in terms of signature, bind change the reference but it doesn’t call the function immediately, It returns another function which u called later on whenever u need it

	The basic purpose of call, apply & bind is to change the reference of “this” , It differ in terms of parameter & execution


68.	What is the difference between call, apply and bind()?

	Call & apply take different way of parameter, call & bind are similar, but bind doesn’t execute the function immediately, It returns a function expressions, Which can be called later on.

*/

let obj1 = {
  firstName: "prafulla",
  lastName: "deshmukh",
};
let displayFullName = function (city) {
  console.log(+this.firstName + " " + this.lastName + " from " + city);
};
let obj2 = {
  firstName: "Rahul",
  lastName: "Singh",
};
displayFullName.call(obj1, "Mumbai");
displayFullName.call(obj2, "Akola");
displayFullName.apply(obj2, ["Mumbai"]);
let displyName = displayFullName.bind(obj2, "Mumbai");
console.log(displyName());
