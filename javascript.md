Javascript Important Questions List:

1. What is the difference between null and undefined?

 So, before any value is assigned to a variable in JavaScript the variable
contains “undefined”  “Undefined” is a datatype in JavaScript  In simple words
You don’t have any value assigned to a JavaScript variable then it is going to
be undefined  “Null “is exactly the same as other programming lang “null” means
nothing  When we have a variable or object which we want to make empty then we
assign “null” to a variable but that contains diff data type because undefined
and null are different in terms of data type

let x = null; let y; console.log(x == y) // undefined == null true It is true //
Because both undefined & null represent "nothing" console.log(x===y) // false

2. What is scope?, Why scope is important ? Scope :

 Scope in JavaScript actually determines the accessibility of variables and
functions at various parts in one’s own code or program.  In other words, Scope
will help us to determine a given part of a code or a program, what variables or
functions one could access and what variables or functions one cannot access. 
Within a scope itself, a variable or a function, or a method could be accessed.
Outside the specified scope of a variable or function, the data cannot be
accessed.

 For example, once a variable is declared, it can only be accessible within the
scope that it has been declared in and will not be accessible outside the scope.
 Let's look at a couple of examples to understand this.

const userName = "Sarah"; console.log(userName); // "Sarah"

 In the above example, we have declared a variable userName and assigned the
value of Sarah. No issue or error is coming up when we want to access this
variable and print the name to the console.  Now let's declare this variable
inside a function and print the value to the console outside the function.

function greeting() { const userName = "Sarah";
console.log(`Hello ${userName}!`); } greeting(); // "Hello Sarah!"
console.log(userName); // ReferenceError: userName is not defined

 In the above example, when trying to log the variable, JavaScript throws an
error, ReferenceError: userName is not defined. This is because the greeting
function creates a scope for the userName variable. And the userName variable
can be accessed only within this scope, inside the function.  Having a scope
for variables and expressions helps us to write efficient code and avoid
conflicts and errors within our code. Why is Scope important?  Ownership : One
of the main benefits of scope is ownership. If we can access all variables from
anywhere within our program, it will lead to unintended modifications to the
variable from other parts of the program. Which means anyone can change them
from anywhere at any given time.  With scoping, we can only access the
variables in a certain area of the code. The scope helps to avoid these
modifications, which help us to write secure code.  Avoid name collision: The
scope helps to avoid name collision. For example, imagine that you have to use
the same variable name in a different place in your program for a different
purpose, or someone else from your team has already declared a variable in the
global scope, and you want to identify the boundary of this variable.  Having
clear scope on where you can access a variable makes it easier to identify its
boundary, avoid assigning more values to the same variable, and use the same
variable name in multiple locations within the code without altering the values.
 Garbage Collection : In dynamic languages like JavaScript, when we complete
the usage of a variable, the data will be automatically garbage collected. If we
don't have a clear scope on where we can access certain variables, the compiler
will not be able to identify when to collect the garbage, except at the end. 
Having a clear scope on where variables can be accessed helps the compiler to
garbage collect these variables at the end of each scope.

3. Types of scope ? Global Scope, function / local scope, and Block Scope ?

Global Scope:  
 Variables declared outside of functions or code blocks (curly braces { }) are
considered to have a global scope. The outermost scope contains the entire code,
and there is only one global scope in the program.

 The variables defined in the global scope are named Global Variables and can
be accessed and altered in any other scopes.

 Check the below example. The function greeting can access the userName
variable inside the function, and it is located in the global scope.

// Create a variable in the global scope const userName = "Sarah";

function greeting() { // Access global variable within the function
console.log(\`Hello ${userName}!\`); } greeting(); // "Hello Sarah!"

 We have the accessibility to change the value of the variable anywhere in the
code with global scope. Check the below example. // Create a global variable let
userName = "Sarah"; function greeting() { // Assigne a different value to the
global variable userName = "Jessica"; console.log(`Hello ${userName}!`); }
greeting(); // "Hello Jessica!" console.log(userName); // "Jessica"

 In the above example, we have reassigned the value of the variable userName
inside the function. And it has modified the value of the variable inside the
global scope.  This means that we can alter global variables anywhere within
our code. Therefore, it is advised to only use global variables if and only if
necessary as a best practice.

Function Scope  Each and every function creates its own scope. And the
variables declared inside that function are only accessible inside that function
and any of its nested functions. This is also called Local Scope.  Check the
below examples to understand the function scope.

function calcAge(birthyear) { // Declare variables inside the calcAge function
scope const currentYear = 2021; const age = currentYear - birthyear; return age;
} calcAge(1975); // Attempt to access "currentYear" and "age" outside of the
function scope is not possible console.log(currentYear); // ReferenceError:
currentYear is not defined console.log(age); // ReferenceError: age is not
defined

 In the above example, we have a function to calculate the age. However, when
trying to print the variables currentYear and age, JavaScript throws an error
ReferenceError: currentYear is not defined. This is because the calcAge()
function creates a scope for these variables, which can only be accessed within
the function scope. Block Scope: Colabra : Modules, RS. 3000, Javascript,
Infosys, capegimi, birlasoft, alltours, learningmate, Simplelearn –
,Interviewbit ,Coding:- data passing, services, pipe, microone - , microone ,
persistent – backend data, prafull.deshmukh@gmail.com, linkdlen , reachout – HR
company -

 ES6 introduced let and const variables. With that, it introduced the block
scope. Block scope means that the variables defined inside a code clock {} can
only be used inside it.  For example, a variable created inside an if statement
or for loop can only be accessed within that code block. Same as function scope,
it is not accessible outside of the block scope.  While let and const are block
scoped, the variables defined with var have their scope limited to the current
function scope or the global scope. Suppose we declare a variable using var,
that variable is accessible outside the block. So, the variable declared using
var within a code block is not block scoped; It is function scoped.  Check the
below example, function calcAge(birthyear) { const currentYear = 2021; const age
= currentYear - birthyear; if (age <= 60) { // Create a variable using "var"
inside the block var working = true; // Create a variable using "const" inside
the block const message = `Peter is still employed!`; console.log(message); } //
Variable created using "var" can be accessed outside the block
console.log(working); // true // Attempt to access "message" outside of the
function scope is not possible console.log(message); // ReferenceError: message
is not defined at calcAge } calcAge(1975);  In the above example, we have
declared working using var and message using const. When trying to print the
variable message, JavaScript throws an error ReferenceError: message is not
defined at calcAge. This is because the if block creates a scope for this
variable, which is only accessible within that block scope.  However, there is
no error when trying to access working outside the code block. As explained
before, this is because var is not block scoped, it's function scoped. So you
can access working inside the calcAge() function since it's the current function
scope. But if we try to access the working outside the calcAge() function, then
JavaScript will throw an error.

4. What is lexical scope ?  Lexical scope is the ability of a function to
   access variables from the parent scope. Let us understand it with the help of
   an example: let value = 'test'; function test(){ let name = 'John';
   console.log("Value: ", value); console.log("Name: ",name); } test();

 Here value is a global variable and will be accessible in every function
whereas the variable name is a local variable and will be accessible only within
the test function.  If you try to access the name variable outside of the test
function you will get an error message -ReferenceError: name is not defined 
Can access variables from inner scope of outer scope  Can’t access variables
from outer scope of inner scope

5. What lexical Environment ?

 A lexical environment in JavaScript is a data structure that stores the
variables and functions that are defined in the current scope and all of the
outer scopes. It is also known as the lexical scope or the lexical closure.

 The lexical environment is created when a function is called and destroyed
when the function returns.

 The lexical environment is used to resolve variable names. When the JavaScript
interpreter encounters a variable name, it first searches for the variable in
the lexical environment of the current scope. If the variable is not found in
the current scope, the interpreter searches the lexical environment of the outer
scope, and so on.

 The interpreter continues searching the lexical environment until it finds the
variable or it reaches the global scope. If the variable is not found anywhere
in the lexical environment, the interpreter throws a ReferenceError exception.

 Here is an example of a lexical environment:

function outer() { var x = 10; function inner() { // The lexical environment of
`inner()` contains the variable `x` from `outer()`. console.log(x); } inner(); }
outer(); When the outer() function is called, a new lexical environment is
created. The lexical environment of outer() contains the variable x.

The inner() function is then called. The lexical environment of inner() contains
the variable x from outer(). This is because the lexical environment of a
function includes the lexical environment of all of its outer scopes.

The JavaScript interpreter searches for the variable x in the lexical
environment of inner(). The interpreter finds the variable x and logs the value
10 to the console.

6. What is scope chain ?

 The scope chain is how Javascript looks for variables. When looking for
variables through the nested scope, the inner scope first looks at its own
scope. If the variable is not assigned locally, which is inside the inner
function or block scope, then JavaScript will look at the outer scope of said
function or block to find the variable. If Javascript could not find the
variable in any of the outer scopes on the chain, it will throw a reference
error.  Let's take an example and go through this process step by step. Check
the below code. // Global variable const userName = "Peter"; // Outer function
function calcAge(birthyear) { const currentYear = 2021; const age =
currentYear - birthyear; // inner block if (age <= 60) { var working = true;

    const message = `Peter is still employed!`;
    console.log(message);
    }
    // inner function
    function yearsToRetire() {
    const retirement = 60 - age;
    console.log(`${userName} will be retired in ${retirement} years!`);
    }
    yearsToRetire();
    }
    calcAge(1975);

 In the above example, We have a global variable called userName. We have an
outer function calcAge(), which is in the global scope. We have an inner
function, yearsToRetire(), nested inside calcAge() function.Also, we have an if
block inside the calcAge() function.  If one scope needs to use a certain
variable but cannot find it in the scope, it will look up in the scope chain and
check whether it can find a variable on one of the outer scopes. If the variable
is available in the outer scope, then the child scope has the access to it. If
it is not there in any outer scopes, the JavaScript will throw a reference
error. So this process is called variable lookup.

7. What is the difference between function scope and block scope?  Function
   Scope: When a variable is declared inside a function, it is only accessible
   within that function and cannot be used outside that function.  Block Scope:
   A variable when declared inside the if or switch conditions or inside for or
   while loops, are accessible within that particular condition or loop. To be
   consise the variables declared inside the curly braces are called as within
   block scope.  Coming back to the use of keywords, var is called as function
   scope that is if a variable is declared using var keyword it will be
   accessible throughout the function.  let & const are also called as block
   scope that is they are accessible within that particular block. Here let is
   used for variable which can be changed as we proceed through the program
   whereas const is used for a variable which doesn’t change till the program
   ends, that is it remains constant throughout the program.  The following
   program explains the use of var, let and const:

 The output of the following program will be,

 As the output shows when we try to access the variables b and c outside the if
statement it gives the error as it is declared using let and const keyword
whereas these variables are accessible inside the if statement.

8. What will be the output of undefined==null and undefined===null? Why? 
   output of undefined==null is true Because both represent same value i.e
   “nothing”  & undefined===null is false , both are different data type
9. What is hoisting in JavaScript? E.g. getName(); console.log(x);

var x = 7;

function getName() { console.log("Namaste JavaScript"); } Output: Namaste
JavaScript, undefined

 Hoisting is a phenomena in JavaScript by which we can access variables and
functions even before initializing them.

 The result of Hoisting, i.e., the memory allocation that happens due to which
we are able to access variables and functions even before initializing them

 JavaScript hoisting occurs during the creation phase of the execution context
that moves the variable and function declarations to the top of the script.

 The JavaScript engine doesn’t hoist the function expressions and arrow
functions.

10. Explain the difference between Rest and Spread?

          Rest Parameter :

     As the rest operator puts the separate data values in one array  The rest
    operator is part of ES6  
     The rest parameter is an improved way to handle function parameters , 
    The rest parameter syntax allows us to represent an indefinite number of
    arguments as an array. With the help of a rest parameter, a function can be
    called with any number of arguments  Imagine a situation where u have to
    create a function called sum which can take any no. of arguments and at the
    end it should return the sum of all the parameter passed to it  So whenever
    you use (…) with function to deal with any number of parameters then u call
    it rest operator, i.e. for the rest of parameters.

function sum (...nums){ console.log(nums); } sum(4,5); sum(2,3,4,5);

Spread Parameter:

 the spread does exactly the opposite of rest parameter  It spreads the array
into separate data values.  spread operator in JavaScript lets you spread
elements from an iterable object, like an array, map, or set.  JavaScript ES6
(ECMAScript 6) introduced the spread operator. The syntax is three dots(...)
followed by the array (or iterable\*). It expands the array into individual
elements.

let arr1 = [1,2,3,4,5]; let arr2 = [...arr1,6,7,8]; console.log(arr2);

11. Can we use arguments object in arrow function?

 It can’t be used. If it is traditional way , it can work otherwise it won’t
function sum (){ console.log(arguments); } sum(4,5);

12. What is the difference between isNaN() and isFinite() method?

 isNaN is going to check whether the value is not a number  isFinite checks
for NaN & Infinity values, We prefer to write isFinite which normally checks for
NaN but also checks for Infinity and -Infinity as well, IsFinite methods checks
whether the value is regular nos or not.

13. What is NaN property ?  In JavaScript, NaN stands for Not a Number. It
    represents a value that is not a valid number. It can be used to check
    whether a number entered is a valid number or not a number. To assign a
    variable to NaN value, we can use one of the two following ways. Syntax: let
    a = NaN // OR let a = Number.NaN

 NaN is a global property representing “Not-A-Number” You normally gets this
error when there is a non-numeric value or operation performed  IsNaN is a
function which returns true / false depending on the expressions

let a = 5; let b = "value"; console.log(a\*b); // NaN

14. What is an arrow function ?  Arrow functions{()=>} are a clear and concise
    method of writing normal/regular Javascript functions in a more accurate and
    shorter way. Arrow functions were introduced in the ES6 version. They make
    our code more structured and readable.  Arrow functions are anonymous
    functions i.e. they are functions without a name Arrow can be declared
    without the function keyword. They are also called Lambda Functions.  Arrow
    function is function expressions, o Advantages of Arrow functions:  Arrow
    functions reduce the size of the code  The return statement and functional
    braces are optional for single-line functions.  It increases the
    readability of the code.

15. How arrow function is difference from normal function?

 The “this” object does not work with arrow function  “arguments” object does
not work with arrow function  You cannot use “new” to call arrow function 
Arrow function is function expressions, - Arrow function give clear & easier way

 Use of this keyword: Unlike regular functions, arrow functions do not have
their own this. let user = { name: "GFG", gfg1:() => { console.log("hello " +
this.name); // no 'this' binding here }, gfg2(){ console.log("Welcome to " +
this.name); // 'this' binding works here } }; user.gfg1(); user.gfg2(); o/p:
hello, Welcome to GFG

 Availability of arguments objects: Arguments objects are not available in
arrow functions, but are available in regular functions. Example using regular
(): let user = { show(){ console.log(arguments); } }; user.show(1, 2, 3); o/p:
0:0,1:1,2:2 Example Using Arraw function : let user = { show_ar : () => {
console.log(...arguments); } }; user.show_ar(1, 2, 3); o/p: Reference Error:
Argument is not defined  Using new keyword: Regular functions created using
function declarations or expressions are ‘constructible’ and ‘callable’. Since
regular functions are constructible, they can be called using the ‘new’ keyword.
However, the arrow functions are only ‘callable’ and not constructible. Thus, we
will get a run-time error on trying to construct a non-constructible arrow
function using the new keyword. Example using the regular functions: let x =
function(){ console.log(arguments); }; var y= new x(1,2,3);

Output: Agruments {0:0,1:1,2:2}  
 Example using arrow function: let x = ()=> { console.log(arguments); }; new x(1,2,3);
Output: TypeError: Argument is not defined 16. Why “this” does not work in arrow
function?

 We already have a class keyword to deal with the classes  We do not need the
function to act as a class  So, there is no point that this, which is actually
is used to refer the current context  That why array function is free from that
job & that’s the reason this object doesn’t work

17. How can you handle arguments object like functionality in arrow function?

const test = (...a)=> { console.log(arguments) } Because arrow function doesn’t
support argument object. U have the rest parameter which can be used with arrow
function to deal with all the parameters to the function

18. Explain the syntactical features of arrow function ?

Syntactical facilities given by arrow function  Less code to write & a better
way to deal with it  About parenthesis & return are not required for a single
parameter  IIFE/IIAF (Immediately Invoked  Function Expression) – Use this
IIFE to avoid global leakages.  This object doesn’t work the way it used to
work with traditional function, It doesn’t have to behave like a class at any
point of time 19. What is closure?  Closure basically means a function bind
together with its lexical environment. In other words, a function along with its
lexical scope forms a Closure  In other words, a closure gives you access to an
outer function’s scope from an inner function. In JavaScript, closures are
created every time a function is created

Sample code: function x() { var a = 7; function y() { console.log(a); } return
y; } var z = x(); z(); Sample output: 7  Now here closure comes into picture.
When a function is returned from another function, they still maintain their
lexical scope. They remember where they were actually present. Meaning, y()
remembers where it came from. It means that when we returned y(), it's not just
that the function code was returned, but a closure enclosed function along with
its lexical scope was returned.

                          OR

 The concept of closures is related to scopes of variables. We have different
lexical environments for every function. Each function creates its own
environment for its variables.  The closure is the concept where you can access
an outer function’s scope from an inner function. Whenever a function a created,
a closure for that function is also created. Here is an example to better
understand it: Example of Closures function myFunc() { const name = 'John';
function displayName() { console.log(name); } return displayName; } const test =
myFunc(); test();  Here myFunc is the outer function and displayName is the
inner function. When you run this you will get the output as ‘John’. But here we
are returning the inner function even before executing it.  As we know that
closure is the combination of a function and its lexical environment within
which it was declared. So here the test variable has the reference to the
function displayName which was created when myFunc was called. And the instance
of displayName maintains its lexical environment

20. How does closure work in JavaScript?  When a function comes under another
    function a “closure” is created.  Closure pattern remember outer variable &
    also helps to access outer scope members  So inner was actually a private
    member but we returned it in a such way that it can have access of outside
    of outer function scope. E.g const addCounter = () => { let counter = 0;
    counter++; return counter; } console.log(addCounter());
    console.log(addCounter()); console.log(addCounter());

 The reason is when you call the function it’s going to reinitialize this
counter with it’s going to reinitialize this counter with value zero then we
increment it & we return.

 You can achieve this through to make counter variable global. If we create an
inner function, we can make a private variable counter act as a global variable

 You can make local variables, act as a global variable, “counter = 0” is
global variable for below arrow function.

// With closure

const addCounter = () => { let counter = 0; return()=>{ counter++; return
counter; } } const c1 = addCounter(); console.log(c1()); console.log(c1());
console.log(c1());

 Everything it increments, it is going to keep the value in the JavaScript
environment.  Variable stored there and every time we call, we are going to get
the new value, Not reset the value, remember the value  When u use closure, U
are making private members globally available but with a cause.  Closure is
useful when u want to make a few private members available globally when needed.

21. Advantages & Disadvantages of closure? Advantages Of Closure:  The main
    advantages of “closure” is that any member which is private for certain
    scope, can be accessed keeping it private so that the variable is away from
    any accidental changes of value  Accessing private members with closure
    pattern assure better approach of making a variable global.

                 Disadvantages Of Closure:


 There could be an over consumption of memory in closures. This happens since
the references enclosed in closures are not garbage collected and if not handled
properly, might lead to memory leaks.  each function maintains its scope and
closure but we should not create functions within functions unnecessarily. The
reason for this is that it will affect the performance in terms of speed and
memory consumption. So until and unless you need to create a function within a
function for a particular task, avoid nesting functions.

22. How can you access private variable or function outside the scope? Yes, can
    do that using closure function outer(){ return function(){
    console.log("Inner Called"); } } const out = outer(); console.log(out());

23. Explain the usage of closure?

Uses of Closures:  Module Design Pattern  Currying  Functions like once 
Memoize  Maintaining state in async world  setTimeouts

24. How can sum(5)(6) return 11? Sum(5)(6) so this way is actually called as
    currying function. const sum = function(a){ return function (b){ return a+b;
    } } const c1 = sum(5); // To stored this function lexical ENV const ans =
    c1(6); ans();

25. What is function currying?  It is a unique way to call inner functions
    where u can pass arguments partially or pass multiple arguments in a
    function but 1 argument at a time.  It can have some advantages of using it
    in this way Where we just call the main function once & then rest of the
    function are called again with first parenthesis  
     Calling part function second parenthesis calling inner function. This is a
    curry pattern

const sum = a => b => a+b; const ans = sum(5)(6); console.log(ans);

26. Explain practical usage of function currying.  I am going to create a piece
    of code where we are calculating product price and discount calculation 
    Let’s say I create a function called price calculation now this function
    takes price as a parameter inside function defining discount percentage  I
    have function which is getting product price from API, that price I have to
    pass discount amt.  So, there are various percentage u are going to pass,
    but this price remains same  Where we have just single value, but there can
    be multiple parameter U want to pass with only one different value.  This
    is where currying cab be useful  So discount amt becomes a function which
    is going to return various discount amt depending on the percentage but the
    price will remain the same only i.e 300  You are calling the function
    partially

const priceCal = (price) =>{ return (per) =>{ return price \* per; } } const
discountAmt = priceCal(300); console.log(discountAmt(0.5));
console.log(discountAmt(3.0));

 Currying is an incredibly useful techniques of functional programming which
save various purpose like passing params or avoiding unwanted repetitions like
We typed with product price which price was passed only once.

27. Memory Management and Garbage Collection in javascript

 Memory allocation is done automatically, as long as reference exists, then
will not be any cleaning or garbage collecting  If a location is unreachable
then that will be released as garbage  When u declare a variable, object array
or functions all are stored somewhere in the memory  JavaScript is a high level
kang so you don’t need to allocate memory  Memory allocation & releasing
happens automatically  Making the memory free is the process of “garbage
collection” , There is a routine who does it called garbage collector.  GC
process is also called automatic memory management with reference to JavaScript
 The garbage collection considers references & it tries to release the memory
if a location is not reachable

28. How does GC work in JS?

 “Mark-end-sweep” algorithm is used for garbage collection  This algo. Will
start from the “global” object & it makes the referenced values & unreachable
location are cleared .

29. Explain “Mark-and-Sweep” algorithm’s pattern ?

 The algorithm begins with the root element then it starts making referenced
values & unmarked values will be cleared  The algorithm starts from the root
object & checks for the references linked  In case if this algorithm finds
unreachable locations, then those are the locations to be removed.

30. Which situation can create a memory leak?

In simple words, a memory leak is an allocated piece of memory that the
JavaScript engine is unable to reclaim. The JavaScript engine allocates memory
when you create objects and variables in your application, and it is smart
enough to clear out the memory when you no longer need the objects.

let teacher = new Teacher(); let student = new Student(); teacher.student =
student; student = null; student.teacher = teacher; // This is circular
reference one of the objects set the reference is lost to null i.e unreachable
// It doesn't happen with newer browser u don't have to worry

31. How do you handle errors in JavaScript code?  Error handling is one of the
    very important concepts in any programming lang  When you write the code,
    It may have error at runtime, In case of error occurs the program will
    break, It will stop the execution in between.  Ideally You should write the
    code with proper validation but still there are some unforeseen situations
    where the programs break in between in such cases the end-user is stuck 
    Ideally what should happen is that when the program faces error even after
    validations, it should handle it & notify the user with proper error details
    like error no & description

let a =10; console.log(a); let b =20; console.log(b);

 You do not face any error at compile time but at run time if u face any error
then u can use the try --- catch block

Syntax Of try – catch try { // statements }catch(err){ // It is called error
object // statements }

 Error Object: - (Properties) name, message & stack , U are handling error
which is generated by system.

 Custom Error: - It might also happen that u want to generate own custom
errors; you can generate custom error by using throw operator

 Throw<error-object> => The error object can be of class error, Type Error &
syntax Error

let a =8; let ageError = new Error(); try{ if(a<18){ throw ageError; // throw
type } else { console.log('valid Error'); } }catch(err){ console.log('Invalid
Age'); // console.log(err.message), console.log(err.name) }

Finally Block: Can inside finally block is executed at the end & is always
executed : Syntax Of Finally Block :

try{ // statement }catch(err){ // statement }finally{ // statement }

32. What is JavaScript memory leaks, How does it cause ? How we can prevent
    memory leaks?

 A Memory leak can be defined as a piece of memory that is no longer being used
or required by an application but for some reason is not returned back to the OS
and is still being occupied needlessly.  Creating objects and variables in your
code consumes memory. Javascript is smart enough to figure out when you won’t
need the variable anymore and will clear it out to save memory.  A Javascript
memory leak occurs when you may no longer need an object but the JS runtime
still thinks you do.  Also, remember that javascript memory leaks are not
caused by invalid code but rather a logical flaw in your code. It leads to the
diminished performance of your application by reducing the amount of memory
available for it to perform tasks and could eventually lead to crashes or
freezes.

Causes of Javascript Memory Leaks:

1.Undeclared/Accidental Global Variables

 Accidental Global Variable Case :  If you assign a value to a variable
without prior declaration, it will create an ‘automatic’ or ‘accidental global
variable’. This example will declare a global variable a, even if it is assigned
a value inside a function.

<script>
       // variable ‘a’ has global scope
       function myFunction() {
           a = "this is an accidental global variable";
           // variable ‘a’ is global as it has been assigned a value without prior declaration
       }
</script>

 SOLUTION: Global variables by definition are not swept away by garbage
collectors. This is why as a best practice for javascript programmer it is
always vital to use global variables carefully and never forget to either null
it or reassign it after their use. In above example set the global variable a to
null after the function call. Another way is to use ‘strict’ mode for parsing
your JS code. This will prevent creation of undeclared accidental global
variables. Another way is to use ‘let’ instead of ‘var’ for variable
declaration. Let has a block scope. Its scope is limited to a block, a
statement, or an expression. This is unlike the var keyword, which defines a
variable globally.

2.Closures  A closure is a combination of a function and the lexical
environment within which that function was declared. A closure is an
inner(enclosed) function that has access to the outer (enclosing) function’s
variables(scope). Also the inner function will continue to have access to the
outer function’s scope even after the outer function is executed.

 A memory leak occurs in a closure if a variable is declared in outer function
becomes automatically available to the nested inner function and continues to
reside in memory even if it is not being used/referenced in the nested function.

<script>
   var newElem;

   function outer() {
       var someText = new Array(1000000);
       var elem = newElem;

       function inner() {
           if (elem) return someText;
       }

       return function () {};
   }

   setInterval(function () {
       newElem = outer();
   }, 5);
</script>

 In the above example, function inner is never called but keeps a reference to
elem. But as all inner functions in a closure share the same context,
inner(line 7) shares the same context as function(){} (line 12)which is returned
by outer function. Now in every 5ms we make a function call to outer and assign
its new value(after each call) to newElem which is a global variable.  As long
a reference is pointing to this function(){}, the shared scope/context is
preserved and someText is kept because it is part of the inner function even if
inner function is never called.  Each time we call outer we save the previous
function(){} in elem of the new function. Therefore again the previous shared
scope/context has to be kept. So in the nth call of outer function, someText of
the (n-1)th call of outer cannot be garbage collected. This process continues
until your system runs out of memory eventually.

 SOLUTION: The problem in this case occurs because the reference to
function(){} is kept alive. There will be no javascript memory leak if the outer
function is actually called(Call the outer function in line 15 like newElem =
outer()();). A small isolated javascript memory leak resulting from closures
might not need any attention. However a periodic leak repeating and growing with
each iteration can seriously damage the performance of your code.

3. Timers  There are 2 timing events in Javascript namely – setTimeout and
   setInterval. ‘setTimeout()’ executes a function, after waiting a specified
   number of milliseconds while ‘setInterval()’ does the some but repeats the
   execution of the function continuously. The setTimeout() and setInterval()
   are both methods of the HTML DOM Window object. Javascript timers are the
   most frequent cause of memory leaks as their use is quite common.

Consider the following javascript code involving timers that creates a memory
leak

<script>
       for (var i = 0; i < 100000; i++) {
           var buggyObject = {
               callAgain: function() {
                   var ref = this;
                   var val = setTimeout(function() {
                       ref.callAgain();
                   }, 1000000);
               }
           }
           buggyObject.callAgain();
           buggyObject = null;
       }
</script>

 Timer callback and its tied object, buggyObject will not be relaesed until the
timeout happens. In this case timer resets itself and runs forever and therefore
its memory space will never be collected even if there is no reference to the
original object..

 SOLUTION: To avoid this scenario, stick to javascript best practice by
providing references inside a setTimeout/setInterval call, such as functions are
needed to be executed and completed before they can be garbage collected. Make
an explicit call to remove them once you no longer need them. Except for old
browsers like Internet Explorers, majority of modern browsers like chrome and
firefox will not face this problem. Also libraries like jQuery handle it
internally to makes sure that no javascript memory leaks are produced.

33. When do you need try...catch?

 try---catch is something which is handled at runtime, so when the code is
executed, some portion of the code needs to be managed properly so that the
program doesn’t stop in between the u use the try---catch block.  It is all
about handle error without breaking any code

34. How can you generate an error?  You can generate custom errors with “throw”
    statements  throw new Type Error (“Invalid Age”);  Any predefined
    JavaScript error class can be generated using throw statement.

35. What is the purpose of the finally block?  The finally block is always
    executed whether there is an error or not, so the code which is ought to be
    executed, we put it in finally block.
36. Can we have finally without a catch block as well?

Yes, you can have finally block without catch block: Try{ // statements }
finally{ // statements // You just want to set the error , not to handle with
catch block }

37. What is the difference between for...in and for...of ?  For….in – return
    the index no. not return the value – will display the index no.  For…..of –
    return the value with return the element/value Arr.foreach(element, index,
    array, thisArgs) => { }  Foreach cannot be stopped in between like u break
    the loop  U cannot break the foreach loop it’s going to loop till the
    entire array
38. Explain array & traversal in array ?

 JavaScript array is an object that represents a collection of similar type of
elements.  JavaScript array is a single variable that is used to store
different elements. It is often used when we want to store a list of elements
and access them by a single variable.  Unlike most languages where the array is
a reference to the multiple variables, in JavaScript, an array is a single
variable that stores multiple elements.

 Normally when u have a variable it can store only 1 value

E.g. Let I = 10; Let I =20;

 When u want to store values under one name, then u can use an array  In
javascript we have array which can store any type of value  In javscript we
have an “Array” class & arrays are the prototype of class.

Lower index Hi true 900 0 1 2 Higher Index Arr[0] – first element u can access
Arr1[arr1.length-1] => last element values

39. What is the difference between push() and unshift() method?  Push() method
    adds one element at the end of array where as unshif() method will add the
    element at the beginning
40. What is the difference between pop() and shift()?  Pop method removes the
    element from the end of array where as shift() method will remove the
    element from beginnings
41. How can you insert an element at a given position?

 Splice() methods is used to insert an element at a given position 
Arr.splice(0,0,’new’);

42. How can you remove a specific element?

 Splice() methods is used to insert an element at a given position
Arr.splice(0,0,’new’);

 Splice() method is used to remove a specific elements Arr.splice(2,1);  If
there is no element removed then what will splice() method return? It will
return an empty array  Splice() method returns deleted items, If there is
nothing to delete then it will return an empty array.

43. Explain javascript slice method ? What is the purpose of the array slice
    method?

 The slice() method that allows you to extract subset elements of an array and
add them to the new array.  The term ‘slice’ literally means to cut something
into pieces. It is used to cut out elements from an array. It does not affect
the original array.

slice() method The slice() method accepts two optional parameters as follows:
slice(start, stop); Both start and stop parameters are optional.

 The start parameter determines the zero-based index at which to start
extraction. If the start is undefined, slice() begins at 0.

 The stop parameter, as its name implies, is a zero-based index at which to end
extraction. The slice() method extracts up to stop-1. It means that the slice()
method doesn’t include the element at the stop position in the new array. If you
omit the stop parameter, the slice() method will use the length of the array for
the stop parameter.

 The slice() returns a new array that contains the elements of the original
array. It’s important to keep in mind that the slice() method performs the
shallow copy of elements to the new array only. In addition, it doesn’t change
the source array.

     1.Clone an array

 The slice() is used to clone an array as shown in the following example:

var numbers = [1,2,3,4,5]; var newNumbers = numbers.slice(); Code language:
JavaScript (javascript) In this example, the newNumbers array contains all the
elements of the numbers array. 2.Copy a portion of an array  The typical use of
the slice() method is to copy a portion of an array without modifying the source
array. Here is an example:

var colors = ['red','green','blue','yellow','purple']; var rgb =
colors.slice(0,3); console.log(rgb); // ["red", "green", "blue"] Code language:
JavaScript (javascript)

 The rgb array contains the first three elements of the colors array. The
source array colors remains intact.

 The following example uses the slice() method to get the local part of an
email address: let email = 'john@example.com' let localPart =
email.slice(0,email.indexOf('@')); console.log(localPart); Output: john

How it works:  First, use the indexOf() method to locate the @ sign. The
returned value of the indexOf() is used as the second argument of the slice()
method.  Then, use the slice() method to extract the local part of the email
starting from the beginning of string up to the character before the @ sign.

 For objects, the slice always copies object references into a new array. The
new array and the original array will refer to the object. So in case, the
object changes you will be able to see the changes on both the original array
and the new array.

44. Explain javascript splice method ? What is the purpose of the array splice
    method

 The splice() method is used to remove or replace existing elements in the
array. This method modifies the original array and returns the removed elements
as a new array.

Here is the syntax for it: splice(start) splice(start, deleteCount)
splice(start, deleteCount, item1) splice(start, deleteCount, item1, item2,
itemN)

 start: start is the index from where you want to modify the array. If the
value of start is greater than the length of the array then it is set to the
length of the array. In such a case it will behave as an adding function.  If
the value is negative then it will start from that many positions from the end.
deleteCount: This is an optional parameter and refers to the number of elements
to remove.  If it is 0 or negative no element will be deleted. Item1, item2,
..: This is an optional parameter. These are the elements that will be added
from the start index. If you are not mentioning it then it will just delete the
elements.

OR

1. Deleting elements using JavaScript Array’s splice() method  To delete
   elements in an array, you pass two arguments into the splice() method as
   follows:  Array.splice(position,num);  The position specifies the position
   of the first item to delete and the num argument determines the number of
   elements to delete.  The splice() method changes the original array and
   returns an array that contains the deleted elements.  Let’s take a look at
   the following example. Suppose, you have an array scores that contains five
   numbers from 1 to 5. let scores = [1, 2, 3, 4, 5];  The following statement
   deletes three elements of the scores array starting from the first element.  
   let deletedScores = scores.splice(0, 3);

 The scores array now contains two elements. console.log(scores); // [4, 5] 
And the deletedScores array contains three elements. console.log(deletedScores);
// [1, 2, 3]

2.Inserting elements using JavaScript Array splice() method

 You can insert one or more elements into an array by passing three or more
arguments to the splice() method with the second argument is zero.  Consider
the following syntax. Array.splice(position,0,new_element_1,new_element_2,...);

 In this syntax: The position specifies the starting position in the array that
the new elements will be inserted.  The second argument is zero (0) that
instructs the splice() method to not delete any array elements.  The third
argument, fourth argument, and so on are the new elements that are inserted into
the array.

 Note that the splice() method actually changes the original array. Also, the
splice() method does not remove any elements, therefore, it returns an empty
array. For example:  Assuming that you have an array named colors with three
strings. let colors = ['red', 'green', 'blue']; The following statement inserts
one element after the second element. colors.splice(2, 0, 'purple'); The colors
array now has four elements with the new element inserted in the second
position. console.log(colors); // ["red", "green", "purple", "blue"]

45. What does splice() return?  It will return an empty array  Splice() method
    returns deleted items, If there is nothing to delete then it will return an
    empty array.

46. Diff between splice & slice? Some of the major difference in a tabular form
    Slice Splice Doesn't modify the original array(immutable) Modifies the
    original array(mutable) Returns the subset of original array Returns the
    deleted elements as array Used to pick the elements from array Used to
    insert or delete elements to/from array

47. How do you perform search in array ?

 Searching elements in an array is very a common task in programming 
Javscript gives various methods to perform search, We will begin with 
IndexOf(), lastIndexOf(), includes()  The elements value u want to search 
arrName.indexOf(searchElement, [startIndex])  arrName – specific array name,
It’s optional , It denotes the beginning index  indexOf() method returns the
index no. where the item is found  When there is no searchElement in array then
it will return -1  If there are more than one matches found , it will return
the index of the first item found  lastIndexOf() returns the last index of the
found element  By default startIndex I array.length -1  Synatx of includes :-
arrName.includes(searchElement, [startIndex]);  Includes() method returns
Boolean values i.e. true or false  Index() search is cap sensitive 
lastIndexOf() starts searching from array.length i.e from the end 
lastIndexOf() will start the serach from backwards i.e the end of array  U want
to retrieve to salary which is more than 3000  U can use find(), findIndex() or
filter()

48. What is the difference between find() and filter() method?

 Find() method returns only one values i.e first match & it stops searching 
Filter() method returns new array  If there is no match element in find its
returns “undefined” but in case of filter it’s returns empty array

49. What is the difference between indexOf() and includes() method?

 indexOf() method returns only the index  includes method returns “true” or
“false” i.e the Boolean values

50. How will you search multiple values in an array?

 Filter() method is used to search multiple values in an array

51. What is the use of map() method ?

 Arr.map(function(elem, index,arr){ }) Map => map will loop through entire
array Elem => It will receive the individual value Arr => It is the array
reference itself Map will return new array Map() method returns new array & it
does not change the original array Let newArray = arr.map(function
callback(elem, index, [array]){ Return value; }) // which is retuned to new
array.

52. How to flatten a 2D array ?

 “flattening” an array means converting multidimensional array  To flatten an
array we have to use reduce() method  If u have 10 elements in an array there
will be 10 results  If we want sum of all elements from the array then its kind
of an aggregate 0r accumulative operation i.e the result is combined  It loop
through all elements & help through all combine results like sum, avg  Every
element of array goes to current variable, It will accumulate all the return
value let arr = [2,4,6,8]; let resukt = arr.reduce(accumulator, current, index,
arr => { return accumulator+current; });

 Accumulator holds accumulated values Reduce() loops array from index of index
to array.length

53. How will you flatten an array i.e e.g converting a 2 dimensional array into
    single dimension ? E.g. let arr = [[45,90],[5,6],[2,4]]; let fArr =
    arr.reduce((accumulator, current)=> { return accumulator.concat(current);
    },[]); console.log(fArr);  The concat() method concatenates two or more
    array  The concat() method returns a new array, containing the joined array
     The concat() doesn’t change the existing arrays

54. What is the difference between reduce() and reduceRight()?

 The reduce() loops from 0th index till the last index of an array 
reduecRight starts looping from last index to 0th index

55. How can you sort an array ?

To sort an array in descending order here is callback function passed to sort()
method which we refer to as compare function Compare function returns three
types of values less than i.e -1 more than 0 i.e 1,0 Compare function returns -1
sort() will arrange “a” before a in other words “a” will come first & second
value “b”

let products = ["Banana","orange","Grapes","Apple"];
products.sort(function(a,b){ if(a<b){ return -1; } /\* string are compared
internally as they are allocated with unicode point values

      */
      if(a>b){
        return 1;
      }
      if(a == b){
        return 1;
      }

});

To sort array in ascending order u use sort() method & for descending order u
can compare function() If u try to sort a numeric array with only sort() method
then it is getting to consider to Unicode string value if there is no compare
function given

56. How will you sort a numeric array?
57. Explain Array destructuring ? What is the destructuring assignment? Swap
    values using destructuring

 As the name destructing says that something is getting destructed  It also
means there is already a structure which is getting broken  Hence structures
means data structures  Destructing is a concept of breaking data structure like
array or object literal into data pieces or in other words individual variables
 Array destructing  All the values are automatically extracted from the array
& assigned to individual  You can avoid assignment in some case with
destructing

let arr = [20,30]; let [a,b] = arr; console.log(a,b);

 It’s about extracting the data pieces from array & object literal & assigning
to individual variable.

// swap values using destructing let k = 4; let p = 5; [k,p] = [p,a];
console.log(k,p);

58. What is a template literal?

 Template literals or template strings are string literals allowing embedded
expressions. These are enclosed by the back-tick
(`) character instead of double or single quotes. In E6, this feature enables using dynamic expressions as below, var greeting = `Welcome
to JS World, Mr. ${firstName}
${lastName}.` In ES5, you need break string like below, var greeting = 'Welcome to JS World, Mr. ' + firstName + ' ' + lastName.`
Note: You can use multi-line strings and string interpolation features with
template literals.

59. What is the difference between search() and indexOf() method?
60. What is the difference between substr() and substring()?
61. What is object literal?

Object literal is simply a key: value pair data structure When we talk about
JSON always key should be in double quote let obj = { Pcode:1 // key :value }

62. Can you have dynamic keys with object literal?

Yes we can have

let tv = "pCode"; let obj = { [tv]:1001, pName:"xyz" } // Using square bracket
dynmaic way to passing key in object literals

63. How can you add read-only properties to an object?

const proto = Object.defineProperty({},'PCode',{ writable:false,
configurable:false, value:200 }); const obj = Object.create(proto); obj.PCode =
300; console.log(PCode);

64. How can we create a clone or separate copy of an object literal?

Object.assign that allow you to create clone.

let obj = {a:'first'}; let obj1 = Object.assign({}, obj); // creating copy of
obj obj1.a='second'; console.log(obj); // {a:first}

65. What is “this” object?

 The definition of “this” object is that It contains the current context “this”
can have different values depending on where it is placed  In browser its
referred window objects, it is pointing to the window object, “window” is the
goals object in the browser  Test function is a part of “window” object.

function test(){ console.log(this); } test();

window.a =5; // "a" also part of window object function test(){ // function
"test" also part of window object console.log(this.a); // global space } test();

let try to shift “object” this into object literal. const obj = { tets(){
console.log(this); // "this" is pointing to "obj" } } obj.test(); // It refer
the value of "obj"

It converts into test function into arrow function, behaviour of “this” will
change. It will start to displaying window object const test = () => {
console.log(this); } “this” object doesn’t work with arrow function. Earlier
function was due to behaves as class, Arrow function forever role of free from
class

66. What is the context of “this” inside arrow function? Or what will be the
    output of this code let obj={ test:()=>{ console.log(this); } } obj.test();

 “this” object doesn’t work with arrow function , It is actually refer global
object  “this” will have “globalThis” object in node environment  Arrow
function doesn’t work with “this” object with current context

67. What is the purpose of call, apply and bind()?

 Suppose I have function called as “test” inside of “test” function, try to
displaying console.log(this)  Have one object “obj” & having member of obj is
{a:5}  Now what I want to do, when I call test function, I just want to pass
“this” object at the moment

function test(obj,a,b){ // this = obj Invalid left hand assigment //
console.log(this); } let obj = { a:5 } test(obj,a,b)

 “obj” is passed to the param, but this will point to window object/global
object, The purpose of this function at the moment, I want to assign the object
reference to that  The reason is JavaScript doesn’t allow you to assign any
value to this object  How will u change the context of this “obj” in this case,
that’s where the call, apply & bind methods come to handy  The call method
takes the first args as the object to be passed to “this”, Whatever parameter u
pass absolutely fine .  Syntax functionName.call(thisArgs, arg1,arg2…argn)  It
doesn’t display window, It display “obj” is something which is automatically
handled by JavaScript, by the call method  “call” is used to change the
reference or context or value of “this” object  Apply :  Apply is actually
used for the same thing apply is also used for changing the reference of “this”
object only, but there is a difference in terms of parameter passing

 What apply is that u can pass only two parameter one is “this” argument &
second is one array, In array individuals element assign

function test(a,b,c){ console.log(this); console.log(a,b,c); } let obj = { a:5 }
test.apply(obj,[4,5,6]);

 apply take only two parameters & first is “this” object and second is one
array, which is passed individuals element to “test” function  bind is also the
same, bind also allow to change the value of “this” , parameter are also same
like “call” method

Bind Method:

 Bind & call are similar in terms of signature, bind change the reference, but
it doesn’t execute the function, it returns another function

 Bind is very similar to call, but it doesn’t call the function immediately, It
returns a function which u later on whenever u need it

 The basic purpose of call, apply & bind is to change the reference of “this” ,
It differ in terms of parameter & execution

function test(a,b){ console.log(this); console.log(a,b); }

let obj = { a:5 } const fe = test.bind(obj,5,6); fe();

68. What is the difference between call, apply and bind()?

 Call & apply take different way of parameter, call & bind are similar, but
bind doesn’t execute the function immediately, It returns a function
expressions, Which can be called later on.

69. How can you create a class?, When does constructor() called?, Can we have
    dynamic property or method names in a class?

 Classes are very commonly used in various lang. The whole concept of class is
to create a blueprint or design or commonly referred as the “prototype”  In ES6
we have a “class” record to create a class whereas in ES5 we were using a
constructor function.  “constructor” is a method which is executed immediately
you create instance of a class

let getData = "showData";

class House { constructor(nDoors, windows){ this.nDoors = nDoors; this.windows =
windows; } /_showData(){ console.log(this.nDoors, this.windows); } _/
[getData](){ // dynamic properties & dynamic method names
console.log(this.nDoors,this.windows); }

static test(){ console.log("Static method called"); } } const obj = new House();
const obj1 = new House();

Services you won’t create directly, such case you don’t want create object, you
need to create static members

class House { static applicationversion = 0.1; static test(){
console.log("static method called"); this.test1(); } static test1(){
console.log("new method"); } } House.test();

We don’t need to have an instance of class to refer a static member.

class House { constructor(){ console.log("constructor called"); } }

The constructor is called as soon as an instance of a class is created.

class House { constructor(){ console.log("constructor called"); }

[getData](){ console.log("function called"); } }

70. What is a class expression? What are static members in a class ? How can you
    call another static method from a class?

let House = class{ constructor() { console.log("expressions");  
 } } const obj = new House;

Note: We will not follow this way but like function expressions, We can create
class expression also

Static members cab be created by writing “static” keyword. For creating a module
which has services where we do not need to instantiate the class, we create a
class & create those members as static members

71. How can you inherit a class? What is subclassing? What is the purpose of
    super keyword? How will you override a method? How can you extend a built-in
    class?

If u is using the “extends” keyword, it’s going to inherit any class.
Inheritance is also called subclassing

“super” is the keyword which helps you to access members of the parent class.
Super (): call parent constructor Super.method(): call parent method

To override a method in JavaScript we use the “super” keyword’.

Class Child extends String { } Const obj = new Child(“Test String”);

72. Explain a practical scenario of object literal destructuring ?

Object literal destructing is often used in all programs, because u set the data
from the server in a JSON format which is assigned to JavaScript object literal.

"productDetails" = { "pCode":100, "mfgDate":'12-12--2020', "price":2300,
"vendor":"xyz" }

//Destructed => because only few variables you want from the retrieved data

73. What is event bubbling and event capturing ?
74. What is Event Delegation ?
75. What is a callback function ?

 Callback function nowadays are replaced with promises and async -await 
Callback function are used when there is an asynchronous process  A process
which takes some time to execute, it is an asynchronous process i.e It won’t
execute immediately  We worked that unless the fetch data is over, this display
data should be executed. let data = function fetchData(){ setTimeout(()=>{ data
= {pCode:1001,pName:"orange"} },200) } function displayData(){
console.log(data); console.log("Ends"); } console.log("starts here")
fetchData(); displayData(); /_ o/p - starts here - undefined - ends _/

         This is the purpose of call back earlier display data was not waiting for fetch data to finish

- We just wrote the function as a parameter
- Most appropriate way to write call back function : -

function fetchData(cb){ setTimeout(()=>{ let data = {pCode:1001, pName:"ram"}
},2000) } console.log("start here"); fetchData(function displayData(pData){
console.log(pData); console.log("Ends"); })

It is a function as pass parameter as function to another function

76. Why do we need callbacks ?

The callbacks are needed because javascript is an event driven language. That
means instead of waiting for a response javascript will keep executing while
listening for other events. Let's take an example with the first function
invoking an API call(simulated by setTimeout) and the next function which logs
the message. function firstFunction(){ // Simulate a code delay setTimeout(
function(){ console.log('First function called'); }, 1000 ); } function
secondFunction(){ console.log('Second function called'); } firstFunction();
secondFunction();

Output // Second function called // First function called As observed from the
output, javascript didn't wait for the response of the first function and the
remaining code block got executed. So callbacks are used in a way to make sure
that certain code doesn’t execute until the other code finishes execution.

77. What is an Asynchronous process?

A process which takes some time is called as asynchronous process, So the
process will return the data after the job is finished.

78. What is the meaning of call back hell or pyramid of doom?

 It is difficult to handle as there are multiple API call & call back
function  
 Just two level of call-back function now the code will start looking
cumbersome, these situations are a difficult especially when u are dealing with
error handling  To write call back functions in better way we have promises in
JavaScript

79. What is a Promise?

 Call-back function are used when there is an asynchronous process  When these
are multi-level functions, it is a hell of job & that’s why it’s called “call
back hell” or “pyramid of doom”  To avoid the call back hell “promise” object
is invented.  Promise object is a better way to write call-back process & the
best way to know this is by converting or rather refactoring code of call back
function with promise  When we create a promise, by default there is a pending
state / pending status let pr = new Promise((resolve, reject)=>{

}) console.log(pr) // The promise statis is pending

80. Why do you need a promise ?

Promises are used to handle asynchronous operations. They provide an alternative
approach for callbacks by reducing the callback hell and writing the cleaner
code.

81. What are the three states of promise

Promises have three states: i. Pending: This is an initial state of the Promise
before an operation begins ii. Fulfilled: This state indicates that the
specified operation was completed. iii. Rejected: This state indicates that the
operation did not complete. In this case an error value will be thrown.

82. What is chaining the promise? Explain the syntax.

 When it comes to chaining, we do not keep on writing multiple promises in a
nested pattern.  But instead, we make sure that we return a promise inside
every then, so that next chain will be executed properly

83. What is the status of promise by default? What will be the status of promise
    when resolved or rejected?

 Pending state  After resolved state of promise state is fulfilled  After
rejected state of promise state is rejected

84. Explain Promise.all() Vs. Promise.allSettled() Vs. Promise.race()?
    Promise.all() :- When u have multiple promises as input it should return a
    single promise after all promises are resolved, Then u can use the all()

Promise.all([p1, p2,p3 ……pn].then(values)=>{ // statments }

 There can any iterable object but most of the time there is always an array
which contains each promise reference  all() method will check the sequence
mentioned in the array  all() method is settled with only resolved promises, so
if any promise returns error then it won’t work  all() method is used when all
promises are expected to return the resolved state  Promise.all method will
stop the execution if any promise return error promise.allSettled() 
allSettled() methods waits for all promises regardless of their state & returns
promises at the end  promise.race() method returns a promise as soon as any of
the promises returns the state from the iterable list provided  So what happens
when u have a process u have multiple API call & u want that if any of the API
call is done , You want to come out with a new promises return , then instead of
writing all or allSettled, U are going to use the race method  Race method, it
is going to race among each promise How will you handle rejected multiple
promises in the most efficient way?  If you use promise.all, It will work for
all the resolved states, but if there is an error then “promise.allSettled()” is
used.  Explain the purpose of Promise.race() method.  It returns the promises
as soon as any promise mentioned in the iterable list returns the state  85.
Explain functionality of async/await?

 Async await is an easier way to deal with promises, Promise was an easier way
of call-back but async/await is even easy to deal with asynchronous process 
Async await handle promises but with simple syntax  To handle an asynchronous
process, we return a promise object from a function

async function test(){

} const fn = test(); console.log(fn);

// By default any function without "return" statment returns undefined in
javascript // o/p:- promises U don't need to write a "return" statement for
asynchronous function

86. Can you write await without async? , Do you need to return a promise from an
    async function?

 No, its not possible, You always have to use the async wrapper to use await

87. Explain the syntax of Promise.all() with async/await?

 Whenever we are using promise.all() that menas , the multiple promises u pass
as on iterable & if it resolved that will return one promise.

// syntax of promises.all() with async/await

async function getData(){ const data = Promise.all([await fetch('API URL'),
await fetch('API URL')];) }

88. What is Map? Map  Map is also similar to object literal but in case of map
    the keys can also have types like string, number, Boolean etc.  Values
    inserted in map collection are retrieved in the same order  To create map ,
    We will use map constructor let product = new Map();
    product.set('pCode',1001); product.set(1, 'Apple'); product.set(true,
    'Availble'); console.log(product); console.log(product.get());

 get allow u to find a specific value by giving a key only  size property –
returns the count of key values pair  product[‘price’] = 300;  Incorrect way
as it works as a normal key of objects literal instead of data types of map keys
 Set() is one of the method which returns the map as well  Every product.get()
returns a map  Another excellent advantage of over object literal is that map
is iterable  You can’t iterate through object literal , we have to use iterable
 We can loop through map collection , three methods are: Values() – It helps to
loop through all the values of map Keys() – returns keys

89. What are the advantages of using Map over objects?

 Enteries() – It returns both keys and values  Object entreis() can be used to
convert map into simple object  Map.has(key) checks whether the given key is
existing in the map or not  Delete() method removes values by keys and clear()
method wipe out everything from the map.

 What are the advantage of using map over object  MAP:Maps keys can also
values. They can be of any datatype  Object :Object have keys as strings value
to value mapping is possible  Map: Keys are ordered the insertion & retrieval
is always in the same order  Object: Keys are not ordered  Map: Map has size
property which returns np. Of key values pairs  Object: Object doesn’t have any
direct way you need to code to get the count  Map: Map are iterable  Object :
Object are not not iterable  Map : Map are quite optimized for data
manipulation  Object: Object are not optimized for data manipulation

90. How will you iterate through Map ?  Values(), keys() and enteries() methods
91. How can you convert simple objects to Map?

let m = new Map(Object.enteries(obj)); Console.log(m);

92. How can you convert a Map into simple objects?
93. What is Set?

 Set collection or data structure doesn’t have keys , It has only unique value.
 So, if u add the same or duplicate value, It is ignored  You will have unique
or non-repeating values only  To add values to a set , You can use add(), It
also has “size” property to check count of values.  Set is iterable , So u can
put a for …. Of directly on the set collection

94. What is the difference between Map and Set?

 Map() method has “key” and “value” , set() method has only “values” which has
unique collection that means values will not repeat

95. Explain diff. Between Map and WeakMap ?

96. Explain diff. Btn Set and WeakSet.

 Keys in the weakMap are only objects, You can not have primitive keys like
strings, nos, etc.  Keys are weak or weakly held and it means if the keys are
garbage collected , so do the values  Because of weak keys weakmap collection
doesn’t have iterable methods like keys(), values() or enteries()  Weak
collection doesn’t have hold values when the garbage collected

97. What is module? What are modules  JavaScript ES6 provides a provision of
importing & exporting of module directly which can reuse when required  Module
means dividing u code into various logical pieces and importing them when
required Can u import any module inside the script tags ? Yes U can, Can’t use
import statement outside module
<script type=”module”>
 Import {calc} from ‘./calc.js’
</script>
98. Why do you need modules
99. What is a named export & import ?
100.  Do the module hoist ?  In ES6 there is no hoisting, But for modules yes ,
      U do have hoisting  Always import the modules on the top of the code.

101.  What is default import/export & the difference between named & default
      export/import ?
102.  What is higher order function ?

 A function which takes another function as an argument or returns a function
from it, is known as a Higher-Order Function.  A proper example of an
Higher-Order Function would be the following code snippet, where we are
calculating area, circumference and diameter of 4 circles.

const radius = [3, 1, 2, 4]; const area = function (radius) { return Math.PI _
radius _ radius; }; const circumference = function (radius) { return 2 _ Math.PI
_ radius; }; const diameter = function (radius) { return 2 \* radius; }; const
calculate = function (arr, logic) { const output = []; for (let i = 0; i <
arr.length; i++) { output.push(logic(arr[i])); } return output; };

console.log(calculate(radius, area)); console.log(calculate(radius,
circumference)); console.log(calculate(radius, diameter));

 So, as given in the above code, area, circumference and diameter are our
callback functions, and calculate is our higher-order function.

103. Difference between map, reduce & filter?

 The map function is basically used to transform an array. Transformation means
to operate on each of the elements of the array and get a new array out of it.

 We have to pass in a function inside map, a function which basically tells
what function do we need, what transformation logic do we need to apply on each
of the elements. const arr = [5, 1, 3, 2, 6]; // returns double of a number
function double(x) { return x _ 2; } // returns triple of a number function
triple(x) { return x _ 3; }

// returns binary of a number function binary(x) { return x.toString(2); }
console.log(arr.map(double)); console.log(arr.map(triple));
console.log(arr.map(binary)); Now arr.map(double); is equivalent to
arr.map(function double(x) { return x _ 2; }); which in turn is equivalent to
arr.map((x) => { return x _ 2; }); which, yet again, is equivalent to
arr.map((x) => x \* 2); filter The filter function is used to filter the values
inside an array. const arr = [5, 1, 3, 2 6];

function isOdd(x) { return x % 2; } function isEven(x) { return x % 2 === 0; }
function greaterThan4(x) { return x > 4; } console.log(arr.filter(isOdd));
console.log(arr.filter(isEven)); console.log(arr.filter(greaterThan4));

reduce reduce function is basically used at a place where you have to take all
the elements of an array and come up with a single value out of them. It takes a
callback function with 2 parameters, an accumulator and a current. When the
reduce iterates over the elements, the current points to each of the elements of
the array. The accumulator is used to accumulate the result of what we need to
reduce out of these values. Also, the reduce function takes in a second
parameter, which serves as the initial value of the accumulator. Suppose we have
an array of numbers and we want to find the sum of the elements. We can use the
reduce function as follows. const arr = [5, 1, 3, 2 6];

const output = arr.reduce(function (acc, curr) { acc = acc + curr; return acc;
}, 0); So, the first parameter to our reduce function is the callback, which has
2 parameters, the first one being the accumulator acc and the second being the
current curr. This function has the accumulation logic, which would be used to
reduce the result. Also, we have a second parameter to the reduce function,
which is the initial value for our accumulator, 0 in this case. Suppose we want
to find out the max from our array. We can use reduce as follows. const arr =
[5, 1, 3, 2, 6];

const output = arr.reduce(function (max, curr) { if (curr > max) { max = curr; }
return max; }, 0); [NOTE: We've initialized our accumulator to 0 here since our
array only has +ve values.] Some real world use cases Let's take the following
array. const users = [ { firstName: "akshay", lastName: "saini", age: 26 }, {
firstName: "donald", lastName: "trump", age: 75 }, { firstName: "elon",
lastName: "musk", age: 50 }, { firstName: "deepika", lastName: "padukone", age:
26 }, ]; Suppose we want an array with full names. We can use the map function
like shown below. const output = users.map((x) = > x.firstName + " " +
x.lastName); Suppose we want to create an object with the age as the key and its
value as the frequency of the number of people with that age. In such a case, we
case use the reduce as follows. // acc = {26: 2, 50: 1, 75: 1} const output =
users.reduce(function (arr, curr) { if (acc[curr.age]) { acc[curr.age] =
++acc[curr.age]; } else { acc[curr.age] = 1; } return acc; }, {}); Now, suppose
we want the first names of all people with age < 30. We can do something like
this. const output = users.filter((x) => x.age < 30).map((x) => x.firstName);
Challenge Instead of chaining the filter and map function to achieve the above
result, use only reduce. Solution const output = users.reduce(function (acc,
curr) { if (curr.age < 30) { acc.push(curr.firstName); } return acc; }, []);

Definition and Usage It applies a given function on all the elements of the
array and returns the updated array. It is the simpler and shorter code instead
of a loop. map() creates a new array from calling a function for every array
element map() calls a function once for each element in an array. map() does not
execute the function for empty element. map() does not change the original
array. array.map(function(currentValue, index, arr), thisValue) Parameter
Description function() Required. A function to be run for each array element.
currentValue Required. The value of the current element.

The map(), reduce() and filter() are array functions that transform the array
according to the applied function and return the updated array. They are used to
write simple, short and clean codes for modifying an array instead of using the
loops.

Map: returns an array of pieces of information from the original array. In the
callback function, return the data you wish to be part of the new array. Filter:
returns a subset of the original array based on custom criteria.

reduce() method works faster

104. Difference between some & every function some will return true if any
     predicate is true every will return true if all predicate is true Where
     predicate means function that returns bool ( true/false) for each element
     every returns on first false. some returns on first true

Array.every() 1.The Array.every() method is used to check whether all the
elements of the array satisfy the given condition or not. 2. The every() method
will return true if all predicates are true 3.This method executes a function
for each array element. 4.This method does not execute the function for empty
elements. 5.This method does not change the original array 6.Its Syntax is -:
array.every(function(value, index, array), thisValue)

Example:

    // JavaScript code for every() function
    function isodd(element, index, array) {
    	return (element % 2 == 1);
    }

    function geeks() {
    	var arr = [ 6, 1, 8, 32, 35 ];

    	// check for odd number
    	var value = arr.every(isodd);
    	console.log(value);
    }
    geeks();

o/p: false

Array.some():

1.The Array.some() method is used to check whether at least one of the elements
of the array satisfies the given condition or not. 2.The some() method will
return true if any predicate is true 3.This method does not execute the function
for empty array elements. 4.This method does not change the original array.
5.Its return value is of Boolean type array.some(function(value, index, array),
this)

    // JavaScript code for some() function
    function isodd(element, index, array) {
    	return (element % 2 == 1);
    }

    function geeks() {
    	var arr = [ 6, 1, 8, 32, 35 ];

    	// check for odd number
    	var value = arr.some(isodd);
    	console.log(value);
    }
    geeks();

// o/p : true

.every() you can also check if every value of the array matches your condition
by using .every() . It works exactly like .some(), but will return true only if
every occurence match.

105. Difference between foreach & map ?

forEach() map() 1 The forEach() method does not returns a new array based on the
given array. The map() method returns an entirely new array. 2 The forEach()
method returns “undefined“. The map() method returns the newly created array
according to the provided callback function. 3 The forEach() method doesn’t
return anything hence the method chaining technique cannot be applied here. With
the map() method, we can chain other methods like, reduce(),sort() etc. 4. It is
not executed for empty elements. It does not change the original array.

106. Array functions (includes, indexOf, pop, push, reverse, shift, unshift,
     slice, splice)
107. Higher Order Function (map, reduce, filter, every, some, find, findIndex,
     sort)
108. What is first class function ?

 A programming language is said to have First-class functions if functions in
that language are treated like other variables. So the functions can be assigned
to any other variable or passed as an argument or can be returned by another
function.  JavaScript treat function as a first-class-citizens. This means that
functions are simply a value and are just another type of object. const
Arithmetics = { add:(a, b) => { return `${a} + ${b} = ${a+b}`; }, subtract:(a,
b) => { return `${a} - ${b} = ${a-b}` }, multiply:(a, b) => { return
`${a} * ${b} = ${a*b}` }, division:(a, b) => { if(b!=0) return
`${a} / ${b} = ${a/b}`; return `Cannot Divide by Zero!!!`; }

}

console.log(Arithmetics.add(100, 100)); console.log(Arithmetics.subtract(100,
7)); console.log(Arithmetics.multiply(5, 5));
console.log(Arithmetics.division(100, 5));

Output: In the above program, functions are stored as a variable in an object.

"100 + 100 = 200" "100 - 7 = 93" "5 \* 5 = 25" "100 / 5 = 20"

109. What is this ?

 In JavaScript, the this keyword refers to an object. Which object depends on
how this is being invoked (used or called).

 he this keyword refers to different objects depending on how it is used: In an
object method, this refers to the object.

 Alone, this refers to the global object. In a function, this refers to the
global object.

 In a function, in strict mode, this is undefined. In an event, this refers to
the element that received the event. Methods like call(), apply(), and bind()
can refer this to any object.

Note this is not a variable. It is a keyword. You cannot change the value of
this. this in a Method When used in an object method, this refers to the object.

In the example on top of this page, this refers to the person object. Because
the fullName method is a method of the person object.

fullName : function() { return this.firstName + " " + this.lastName; }

this Alone

When used alone, this refers to the global object. Because this is running in
the global scope. In a browser window the global object is [object Window]:

Example let x = this; In strict mode, when used alone, this also refers to the
global object: Example "use strict"; let x = this; this in a Function (Default)
In a function, the global object is the default binding for this. In a browser
window the global object is [object Window]:

Example function myFunction() { return this; }

this in a Function (Strict) JavaScript strict mode does not allow default
binding. So, when used in a function, in strict mode, this is undefined.

Example "use strict"; function myFunction() { return this; }

110. How many types way u can invoke function?
111. What is event loop in javascript ?

 Event loop in JavaScript is such a mechanism which handles this. This means it
manages the lifecycle of a call back function from the call back queue to the
call stack.

 which keeps running continuously and checks the Main stack, if it has any code
to execute, if not then it checks Call-back queue, if Call-back queue has codes
to execute then it pops the message from it to the call back queue for the
execution.

 It continuously monitor call stack as well as call back queue, If call stack
is an empty then an event loop sees is there any call back function waiting for
an execution & It takes that function put it inside the call stack for an
execution

112. Var vs Let vs Const ?

 In javascript, you can create/declare variables using keywords var, let, and
const.  Let’s see the differences between these keywords to have a better
understanding of what to use and where.

Scope Scope essentially means where these variables are available for use.

There are two types of scopes in JS:

Function Scope: Visibility is limited to the function. function myFn() {

     var x = 10;

     console.log(x); //prints 10

} console.log(x); // ReferenceError: x is not defined

Block Scope: Visibility is limited to the block of code. if (true) { let x = 10;
console.log(x); //prints 10 } console.log(x); // ReferenceError: x is not
defined

Now, that we have idea of scope. We can discuss the scope of var, let and const.
 var declarations are function scoped.  let declarations are block scoped. 
const declarations are block scoped.

 Redefining and Redeclaring feature A variable declared using ‘var’ can be
redefined and even redeclared anywhere throughout its scope. var x = 30;
console.log(x); //prints 30 x = "Hi"; //redefining or re-assigning (works
without any error) console.log(x); //prints "Hi"

var y = 10; console.log(y); //prints 10 var y = "Hello"; //Redeclaring (works
without any error) console.log(y) //Prints "Hello"

A variable declared using ‘let’ can be redefined within its scope but cannot be
re-declared within its scope.

let x = 11; console.log(x); //prints 11 x = "IB"; //works without any error
console.log(x); //prints "IB"

let y = 12; console.log(y); //prints 12 let y = "Scaler"; // error: Identifier y
has already been declared

let z = 13; if(true){ let z = "Fun"; //works without any error as scope is
different. console.log(z) //prints "Fun" } console.log(z) //prints 13

A variable declared using ‘const’ cannot be redefined or re-declared within its
scope. const x = 10; console.log(x); //prints 10 x = 11; // error: Assignment to
constant variable. const y; y = 2; //error const z = 12; console.log(z) //prints
12 const z= 13; // error: Identifier 'y' has already been declared Every const
declaration must be initialized at the time of declaration.

 Hoisting

Hoisting is a mechanism where variables and function declarations are moved to
the top of their scope before code execution.

console.log(x); // prints undefined var x = 100; console.log(x); //prints 100

Variables declared using var are hoisted to the top of their scope and
initialized with a value of undefined(special type). Variables declared using
let are hoisted to the top of their scope but are not initialized with any
value. Variables declared using const are hoisted to the top of their scope but
are not initialized with any value.

console.log(x); // prints undefined var x = 100; console.log(x); //prints 100

console.log(y); //Reference error let y = 200; console.log(y); //prints 200

console.log(z); //Reference error const z = 300; console.log(z); //prints 300

Var Let Const var has the function or global scope. let's have the block scope.
const variable has the block scope. It gets hoisted to the top of its scope and
initialized undefined. It also got hoisted to the top of its scope but didn't
initialize. It also got hoisted to the top of its scope but didn't initialize.
It can be updated or re-declared. It can only be updated and can't be
re-declared. It can't be updated or re-declared. It's an old way to declare a
variable. It's a new way to declare variables introduced in ES6. It's also a new
way to declare a variable, which introduces in ES6. It can be accessed without
initialization as its default value is “undefined”. It cannot be accessed
without initialization otherwise it will give ‘referenceError’. It cannot be
accessed without initialization, as it cannot be declared without
initialization. hoisting done, with initializing as ‘default’ value Hoisting is
done , but not initialized (this is the reason for the error when we access the
let variable before declaration/initialization Hoisting is done, but not
initialized (this is the reason for error when we access the const variable
before declaration/initialization

113. What is the purpose of the let keyword
114. What is the difference between let and var
115. What is shadowing?

 Block Scoping: To understand shadowing in JavaScript, we need to be clear with
the scope first. In computer programming languages, Scope is a certain
section/region of the program where a defined variable can have its existence
and can be recognized, beyond that it can’t be accessed. In JavaScript, a Block
is a compound statement that is defined by curly braces {} and used to combine
multiple statements into one statement where JavaScript expects only one
statement. And all the variables and functions that can be accessed inside a
block are said to be inside that block scope, hence called Block scoped.

 For example, let and const variables are stored in separate memory space, so
it is called block-scoped but var variables can be accessed outside the block as
it is stored in the Global object memory space, hence it is called Global
scoped.

 Shadowing: Now, when a variable is declared in a certain scope having the same
name defined on its outer scope and when we call the variable from the inner
scope, the value assigned to the variable in the inner scope is the value that
will be stored in the variable in the memory space. This is known as Shadowing
or Variable Shadowing. In JavaScript, the introduction of let and const in
ECMAScript 6 along with block scoping allows variable shadowing.

Example: function func() { let a = 'Geeks'; if (true) { let a = 'GeeksforGeeks';
// New value assigned console.log(a); } console.log(a); } func();

 Illegal Shadowing: Now, while shadowing a variable, it should not cross the
boundary of the scope, i.e. we can shadow var variable by let variable but
cannot do the opposite. So, if we try to shadow let variable by var variable, it
is known as Illegal Shadowing and it will give the error as “variable is already
defined.” function func() { var a = 'Geeks'; let b = 'Geeks; if (true) { let a =
'GeeksforGeeks'; // Legal Shadowing var b = 'Geeks'; // Illegal Shadowing
console.log(a); // It will print 'GeeksforGeeks' console.log(b); // It will
print error } } func(); Output: Identifier 'b' has already been declared Note:
Arrow functions also follow the same scope and variable shadowing rule.

116.  What is Recursion?

           A function that calls itself is recursion. Recursion in JavaScript is a recursive call of the function to itself, where the function calls itself, again and again, (recursively) until it doesn’t (Base case).

First, Let’s understand the recursion with the help of a real-life example:

For instance, consider the act finish your ice cream can be defined as follows:

If your ice cream cone is empty, stop eating. Take one bite from your ice cream.
perform finish your ice-cream. Here, In this operation, there are only two steps
first, you check if the ice cream cone is empty or not. If not, then take a bite
and again perform the same operation.

There is always a condition where you stop eating, and the loop terminates.

Recursion in javascript is a technique for solving problems when the result
depends on solutions to the lesser versions of the same problem.

Recursion uses functions that call themselves from within their own code to
solve such recursive problems. For example, the Fibonacci sequence can be
defined as

Why and When Use Recursion Recursion in JavaScript has the ability to break down
large and complex problems into smaller problems. Recursion, however, cannot
always be used to handle complex problems.

Recursive functions are most useful and appropriate for iterative branching
problems, such as sorting, binary search, traversing, and many other data
structures.

Why Use Recursion? Recursion differs from other programming techniques because
it completes complicated tasks with a few lines of code. This saves time and
makes the codebase appear simple and elegant.

When to Use Recursion? When a function needs to be called again and again but
with different parameter values within a loop, it is good to use recursive
functions. For example, Fibonacci series implementation, Calculating factorial
of a large number using Recursion, Tower of Hanoi, etc.

117. Primitive Types (Call by Value) vs Reference Types (Call by Reference)

 Primitive types are simple atomic pieces of data in JavaScript.  Primitive
types are always saved and accessed by the variable's value and not as a
reference to another object. There are six primitive types in JavaScript:

1. undefined
2. null
3. boolean
4. number
5. string
6. symbol

 Reference types are not simple atomic values but are objects that are made up
of multiple properties assigned to them. They are stored as a reference in
memory and not as independent values assigned to variables. There are three
reference types in JavaScript:

1.  objects
2.  arrays
3.  functions

                            Memory Utilization by Primitive Types :

     primitive types are stored as a single atomic value assigned to a variable
    in the memory.

Let’s see this example: let name = 'john'; let name2 = name;

 Looking at the above example, I created a variable name and assigned it a
value john. Now JavaScript will save this as a single atomic value in the
memory.  Now, if i create a new variable name2 and assign it a value of the
variable name JavaScript will go ahead and create a new space in the memory and
allocate the same value of the variable name and assign it to the variable
name2.  The new value assigned to the variable name2, is entirely separate from
the variable name and does not have any reference to it whatsoever.  
Memory Utilization by Reference Types  Reference values are objects stored in
memory and references to objects instead of dedicated places in memory, unlike
primitive types. Let’s look at the following example to understand better how
the reference types are saved in memory by JavaScript. let person = { name:
'john', age: 22, }; let person2 = person;  Let’s just declared a variable
called person which will contain an object containing the name and the age of
the person object. Now I will go ahead and create another variable named person2
and assign it the same person object. This is where things start getting
different as compared to the primitive types. In this case, JavaScript will save
the person2 object simply as a reference to the person object.

 If you look at this image, you will realize that JavaScript here is actually
pointing to the same object in the memory. Though it has created a new variable,
as a value, that variable just is referring to the same person object that we
created previously.

 Understanding Immutability and Mutability of Primitive and Reference Types in
JavaScript  Since we are now clear with the primitive and reference types in
JavaScript, we can easily understand the concept of mutability and immutability
in JavaScript. Mutable can be changed or added to where immutable means
something that cannot be changed or added. Primitive values in JavaScript cannot
have anything added upon to them, they can only be re-assigned, and hence all
primitive values in JavaScript are immutable. Let see this with an example. let
name = 'john'; let name2 = name;

console.log(name); console.log(name2);

/\*

- john
- john \*/

let name2 = 'doe';

console.log(name); console.log(name2);

/\*

- john
- doe \*/  Extending our previous example of primitive types, let’s print the
  values of both our variables, i.e. name and name2 to the console and see what
  we get. As expected, both the variable return the value john. Now let’s
  reassign name2 to doe and then again print the values of both the variables to
  the console. Now you see that the value of only name2 was re-assigned by
  JavaScript to doe, but the variable name did not change. This show’s that
  JavaScript treats these 2 variables separately, although name2 was originally
  copied from the variable name. This proves that the primitive values in
  JavaScript, in this case, strings, are immutable.

 Let’s try to replicate the same example for reference types as well. Picking
up from our previous example, let’s print the values of both person and person2
objects to the console and see what we get. let person = { name: 'john', age:
22, };

let person2 = person;

console.log(person); console.log(person2);

/\*

- {
- name: 'john',
- age: 22,
- }
-
- {
- name: 'john',
- age: 22,
- } \*/ We see two objects printed on the console with the same properties. Now
  I will change one of the properties of the person2 object and print them to
  the console again. let person2.name = 'doe';

console.log(person); console.log(person2);

/\*

- {
- name: 'doe',
- age: 22,
- }
-
- {
- name: 'doe',
- age: 22,
- } \*/ You see that JavaScript has changed person as well as person2. This is
  because the person2 object was created by referencing the person object. With
  reference types, JavaScript creates a reference to the same object, and the
  object remains mutable. Since the object is mutable, it can be changed, or a
  new property can be added.  The Spread Operator  The spread operator was
  introduced in ES6 ( more information on ES6 and lets you copy your objects
  safely and create a new instance of the object instead of merely referencing
  the previous object. Let’s look at the same example and see how we can copy an
  object and save a new instance of the variable's object. let person = { name:
  'john', age: 22, };

let person2 = {...person}; let person2.name = 'doe';

console.log(person); console.log(person2);

/\*

- {
- name: 'john',
- age: 22,
- }
-
- {
- name: 'doe',
- age: 22,
- } \*/ Let’s take the same person object, and instead of assigning it directly
  to a variable this time, let’s use the spread operator to copy it. The spread
  operator can be used by prefixing three dots … in front of the object that you
  want to copy and encapsulate it using the literal object syntax. This way,
  JavaScript creates a new object and stores it in the variable person2. Let’s
  try to change one of the properties of person2. I will change the name to doe.
  Now let’s print both the object to the console and see what we get. You see,
  this time, we only changed the name property of the person2 object and not the
  person object. This is because the person2 was created and saved as a new
  object using the spread operator and not as a reference to the person object.

118.  Design Patterns (Singleton, Factory, Abstract, Builder, Prototype,
      Adapter, Decorator, Facade, Proxy, Chain of responsibility, Iterator,
      Observer)
119.  Explain SOLID Design principles?
             Soild Principles or design principles all things we use main goal of these principle is any of the software systems that software system should tolerate the changes and adding new functionality should be easy to understand & implement so these principle will help us to understand how to structure the code so that the code will robust, maintainable & flexible easy to test so all this should be done in our code: To make these things we need to follow some design principle:

These principles guide developers in building robust, maintainable applications
while minimizing the cost of changes.

Understanding SOLID principles : S- Single Responsibility O- Open/ Close
L-Liskov Substitution I-Interface Segregation D- Dependency Inversion

S- Single Responsibility Principle

// Wrong

validateandCreateUser = (name, password, email) => { const isFormValid =
testForm(name, password, email); if(isFormValid){ User.create(name, pasword,
email); } }

// Correct Way:

const validateRequest = (req) =>{

const isFormValid = testForm(name, password, email); if(isFormValid){
createUser(req); }  
}

const createUser = (req) =>{ User.create(req.name, req.password, req.email) }

A class, a module, or a function should be only responsible for one actor. So,
it should have one and only one reason to change.

The single responsibility principle is one of SOLID’s simplest principles.
However, developers often misinterpret it, thinking a module should do a single
thing.

Let’s consider a simple example to understand this principle. The following
JavaScript code snippet has a class named ManageEmployee and several functions
to manage employees.

class ManageEmployee {

constructor(private http: HttpClient) SERVER_URL =
'http://localhost:5000/employee';

getEmployee (empId){ return this.http.get(this.SERVER_URL + `/${empId}`); }

updateEmployee (employee){ return this.http.put(this.SERVER_URL +
`/${employee.id}`,employee); }

deleteEmployee (empId){ return this.http.delete(this.SERVER_URL + `/${empId}`);
}

calculateEmployeeSalary (empId, workingHours){ var employee =
this.http.get(this.SERVER_URL + `/${empId}`); return employee.rate \*
workingHours; }

} The previous code seems completely fine at a glance, and many developers will
follow the same approach without any issues. However, since it is responsible
for two actors, this class violates the single responsibility principle. The
getEmployee(), updateEmployee(), and deleteEmployee() functions are directly
associated with HR management, while the calculateEmployeeSalary() function is
associated with finance management.

In the future, if you need to update a function for the HR or finance
department, you will have to change the ManageEmployee class, affecting both
actors. Therefore, the ManageEmployee class violates the single responsibility
principle. You would need to separate the functionalities related to the HR and
finance departments to make the code compatible with the single responsibility
principle. The following code example demonstrates this.

class ManageEmployee {

constructor(private http: HttpClient) SERVER_URL =
'http://localhost:5000/employee';

getEmployee (empId){ return this.http.get(this.SERVER_URL + `/${empId}`); }

updateEmployee (employee){ return this.http.put(this.SERVER_URL +
`/${employee.id}`,employee); }

deleteEmployee (empId){ return this.http.delete(this.SERVER_URL + `/${empId}`);
}

}

class ManageSalaries {

constructor(private http: HttpClient) SERVER_URL =
'http://localhost:5000/employee';

calculateEmployeeSalary (empId, workingHours){ var employee =
this.http.get(this.SERVER_URL + `/${empId}`); return employee.rate \*
workingHours; }

}

O- Open / Close: Open for extension , The closed to modification

Software System must be allowed , Change the behaviour adding new code , Added
new code instead of modify old code / Breaking of existing changes

const roles = ["ADMIN", "USER]; checkRole = (user) => {
if(roles.includes(user)){ return true; } else { return false; } }

addRole = (role) =>{ roles.pus(role) } checRole("ADMIN"); // true
checkRole("foo"); // false addRole("SUPERADMIN");

Functions, modules, and classes should be extensible but not modifiable. This is
an important principle to follow when implementing large-scale applications.
According to this principle, we should be able to add new features to
applications easily, but we should not introduce breaking changes to the
existing code. For example, assume that we have implemented a function named
calculateSalaries() that uses an array with defined job roles and hourly rates
to calculate salaries. class ManageSalaries { constructor() { this.salaryRates =
[ { id: 1, role: 'developer', rate: 100 }, { id: 2, role: 'architect', rate: 200
}, { id: 3, role: 'manager', rate: 300 }, ]; }

calculateSalaries(empId, hoursWorked) { let salaryObject =
this.salaryRates.find((o) => o.id === empId); return hoursWorked \*
salaryObject.rate; } }

const mgtSalary = new ManageSalaries(); console.log("Salary : ",
mgtSalary.calculateSalaries(1, 100));

Directly modifying the salaryRates array will violate the open-closed principle.
For example, suppose you need to extend the salary calculations for a new role.
In that case, you need to create a separate method to add salary rates to the
salaryRates array without making to the original code. class ManageSalaries {
constructor() { this.salaryRates = [ { id: 1, role: 'developer', rate: 100 }, {
id: 2, role: 'architect', rate: 200 }, { id: 3, role: 'manager', rate: 300 }, ];
}

calculateSalaries(empId, hoursWorked) { let salaryObject =
this.salaryRates.find((o) => o.id === empId); return hoursWorked \*
salaryObject.rate; }

addSalaryRate(id, role, rate) { this.salaryRates.push({ id: id, role: role,
rate: rate }); } }

const mgtSalary = new ManageSalaries(); mgtSalary.addSalaryRate(4, 'developer',
250); console.log('Salary : ', mgtSalary.calculateSalaries(4, 100));

L -Liskov Substitution

class Bird { fly() { } }

class Eagle extends Bird { dive(); }

class eagle = new Eagle(); eagle.fly(); eagle.dive();

class Penguin extends Bird { // Problem : Can't fly }

// Correct Way: class Bird{ layEgg(); }

// It should have a specifi nature of bird instead of fly // Divided class in a
specific way

class FlyingBird { fly(){ } }

class SwimmingBird extends Bird { swim() { } }

class Eagle extends FlyingBird { }

class Penguin extends SwimmingBird { }

const penguin = new Penguin(); penguin.swim(); penguin.layEgg();

const eagle =new Eagle(); eagle.fly(); eagle.layEgg();

This principle ensures that any class that is the child of a parent class should
be usable in place of its parent without any unexpected behavior. You can
understand it in a way that a farmer’s son should inherit farming skills from
his father and should be able to replace his father if needed. If the son wants
to become a farmer then he can replace his father but if he wants to become a
cricketer then definitely the son can’t replace his father even though they both
belong to the same family hierarchy.

In simple terms, the Liskov principle states that we should not replace a parent
class with its subclasses if they create unexpected behaviors in the
application.

For example, consider a class named Animal, which includes a function named
eat().

class Animal{ eat() { console.log("Animal Eats") } } Now I will extend the
Animal class to a new class named Bird with a function named fly().

class Bird extends Animal{ fly() { console.log("Bird Flies") } }

var parrot = new Bird(); parrot.eat(); parrot.fly(); Output before implementing
Liskov Substitution Principle

In the previous example, I have created an object named parrot from the Bird
class and called both the eat() and fly() methods. Since the parrot is capable
of both those actions, extending the Animal class to the Bird class does not
violate the Liskov principle.

Now let’s extend the Bird class further and create a new class named Ostrich.

class Ostrich extends Bird{ console.log("Ostriches Do Not Fly") }

var ostrich = new Ostrich(); ostrich.eat(); ostrich.fly(); This extension of the
Bird class violates the Liskov principle since Ostriches cannot fly—this could
create unexpected behavior in the application. The best way to address this case
is to extend the Ostrich class from the Animal class.

class Ostrich extends Animal{

walk() { console.log("Ostrich Walks") }

} Output after implementing Liskov Substitution principle

Interface Segregation :

it is similar to the single responsibility principle. It states that “do not
force any client to implement an interface which is irrelevant to them“. Here
your main goal is to focus on avoiding fat interface and give preference to many
small client-specific interfaces. You should prefer many client interfaces
rather than one general interface and each interface should have a specific
responsibility. Suppose if you enter a restaurant and you are pure vegetarian.
The waiter in that restaurant gave you the menu card which includes vegetarian
items, non-vegetarian items, drinks, and sweets. In this case, as a customer,
you should have a menu card which includes only vegetarian items, not everything
which you don’t eat in your food. Here the menu should be different for
different types of customers. The common or general menu card for everyone can
be divided into multiple cards instead of just one. Using this principle helps
in reducing the side effects and frequency of required changes.

// Wrong // Validating in any cases

class User {

constructor(username, password){ this.username = username; this.password =
password; this.initiateUser(); }

initiateUser(){ this.username = this.username; this.validateUser(); }

validateUser = () =>{ console.log('validating.....') }

} const user = new User('xyz', '123'); console.log(user);

// Correct Way

//ISP : Validate only if it is necessary

class UserISP { constructor(username, password, validate){ this.username =
username; this.password = password; this.validate = validate; if(validate){
this.initiateUser(); } else { console.log("No validation is required"); }

initiateUser(){ this.username = this.username; this.validateUser(); }

validateUser = () =>{ console.log('validating.....') }

}

const user = new UserISP('xyz', '123', true); console.log(user);

if it is required then validate , it is not required then validate instead of
validating each & every user - Do the segregation

Clients should not be pushed to depend on interfaces they will never use. This
principle is related to interfaces and focuses on breaking large interfaces into
smaller ones. For example, suppose you are going to driving school to learn how
to drive a car, and they give you a large set of instructions on driving cars,
trucks, and trains. Since you only need to learn to drive a car, you do not need
all the other information. The driving school should divide the instructions and
just give you the instructions specific to cars. Since JavaScript does not
support interfaces, it is difficult to adopt this principle in JavaScript-based
applications. However, we can use JavaScript compositions to implement this.
Compositions allow developers to add functionalities to a class without
inheriting the entire class. For example, assume that there is a class named
DrivingTest with two functions named startCarTest and startTruckTest. If we
extend the DrivingTest class for CarDrivingTest and TruckDrivingTest, we have to
force both classes to implement the startCarTest and startTruckTest functions.
Class DrivingTest { constructor(userType) { this.userType = userType; }

startCarTest() { console.log(“This is for Car Drivers”’); }

startTruckTest() { console.log(“This is for Truck Drivers”); } }

class CarDrivingTest extends DrivingTest { constructor(userType) {
super(userType); }

startCarTest() { return “Car Test Started”; }

startTruckTest() { return null; } }

class TruckDrivingTest extends DrivingTest { constructor(userType) {
super(userType); }

startCarTest() { return null; }

startTruckTest() { return “Truck Test Started”; } }

const carTest = new CarDrivingTest(carDriver );
console.log(carTest.startCarTest()); console.log(carTest.startTruckTest());

const truckTest = new TruckDrivingTest( ruckdriver );
console.log(truckTest.startCarTest()); console.log(truckTest.startTruckTest());

However, this implementation violates the interface segregation principle since
we are forcing both extended classes to implement both functionalities. We can
resolve this by using compositions to attach functionalities for required
classes as shown in the following sample. Class DrivingTest {
constructor(userType) { this.userType = userType; } }

class CarDrivingTest extends DrivingTest { constructor(userType) {
super(userType); } }

class TruckDrivingTest extends DrivingTest { constructor(userType) {
super(userType); } }

const carUserTests = { startCarTest() { return ‘Car Test Started’; }, };

const truckUserTests = { startTruckTest() { return ‘Truck Test Started’; }, };

Object.assign(CarDrivingTest.prototype, carUserTests);
Object.assign(TruckDrivingTest.prototype, truckUserTests);

const carTest = new CarDrivingTest(carDriver );
console.log(carTest.startCarTest()); console.log(carTest.startTruckTest()); //
Will throw an exception

const truckTest = new TruckDrivingTest( ruckdriver );
console.log(truckTest.startTruckTest()); console.log(truckTest.startCarTest());
// Will throw an exception

Now, carTest.startTruckTest(); will throw an exception since the
startTruckTest() function is not assigned to the CarDrivingTest class.

5. Dependency Inversion :

that Dependency Inversion and Dependency Injection both are different concepts.
Most of the people get confused about it and consider both are the same. Now two
key points are here to keep in mind about this principle

High-level modules/classes should not depend on low-level modules/classes. Both
should depend upon abstractions. Abstractions should not depend upon details.
Details should depend upon abstractions. The above lines simply state that if a
high module or class will be dependent more on low-level modules or class then
your code would have tight coupling and if you will try to make a change in one
class it can break another class which is risky at the production level. So
always try to make classes loosely coupled as much as you can and you can
achieve this through abstraction. The main motive of this principle is
decoupling the dependencies so if class A changes the class B doesn’t need to
care or know about the changes. You can consider the real-life example of a TV
remote battery. Your remote needs a battery but it’s not dependent on the
battery brand. You can use any XYZ brand that you want and it will work. So we
can say that the TV remote is loosely coupled with the brand name. Dependency
Inversion makes your code more reusable.

// D: Dependency Inversion

// Wrong : http.get("http://address/api/examples", (res) =>{ this.setState({
key1 = res.value1 , key2 = res.value2, key3 = res.value3, }) });

- This API is tightly coupled with data set, setting of this data Instead of u
  pass the data in separate function in future some API call also use the same
  function , U are not tightly coupling this dependency of this data, You kept
  this dependency apart

// correct way : const httpRequest = (url setState) => {

http.get(url, (res)=> { setSate.setValues(res)) }) }

// State Set in another function

const setState = { setValues:(res) =>{ this.setState({ key1:res.value1,
key2:res.value2, key3:res.value3 }) } }

Higher-level modules should use abstractions. However, they should not depend on
low-level modules. Dependency inversion is all about decupling your code.
Following this principle will give you the flexibility to scale and change your
application at the highest levels without any issues. Regarding JavaScript, we
do not need to think about abstractions since JavaScript is a dynamic language.
However, we need to make sure higher-level modules do not depend on lower-level
modules. Let’s consider a simple example to explain how dependency inversion
works. Suppose you used the Yahoo email API in your application, and now you
need to change it to the Gmail API. If you implemented the controller without
dependency inversion like the following sample, you need to make some changes to
the controller. This is because multiple controllers use the Yahoo API and you
need to find each instance and update it. class EmailController {
sendEmail(emailDetails) { // Need to change this line in every controller that
uses YahooAPI.const response = YahooAPI.sendEmail(emailDetails); if
(response.status == 200) { return true; } else { return false; } } } The
dependency inversion principle helps developers avoid such costly mistakes by
moving the email API handling part to a separate controller in this case. Then
you only need to change that controller whenever there is a change in the email
API. class EmailController { sendEmail(emailDetails) { const response =
EmailApiController.sendEmail(emailDetails);  
 if (response.status == 200) { return true; } else { return false; } } }

class EmailApiController { sendEmail(emailDetails) { // Only need to change this
controller. return YahooAPI.sendEmail(emailDetails); } }

120. Undefined vs Not defined ? What are the differences between undeclared and
     undefined variables Undefined VS Not Defined in JavaScript  undefined is a
     very special keyword in JavaScript, which is not there in other languages.
     This keyword has a lot to do with how JavaScript code is executed.  As
     discussed earlier, JavaScript code is executed in a different way. It
     creates a GEC (Global Execution Context) and allocates memory to all the
     variables and functions (which are present at the global scope) even before
     a single line of code is executed. Here is where undefined comes into
     picture.  When JavaScript allocates memory to all the variables and
     functions, to the variables it tries to put a placeholder. undefined is
     treated like a placeholder which is placed in the memory. So, technically,
     undefined takes up some memory space. It's totally different than not
     defined.  So, while creating the memory component, the JavaScript engine
     allocates undefined to all the variables before execution begins. Sample
     code: console.log(a); var a = 7; console.log(a); Sample output: undefined 7
      So, coming to not defined, not defined refers to something which has not
     been allocated memory.  undefined can be taken as a placeholder for the
     time being until a value is assigned replacing this placeholder. Sample
     code: var a;

if (a === undefined) { console.log("a is undefined"); } else { console.log("a is
not undefined"); } Sample output: a is undefined

121. What is IIFE?

IIFE (Immediately Invoked Function Expression) is a JavaScript function that
runs as soon as it is defined. The signature of it would be as below, (function
() { // logic here } ) (); The primary reason to use an IIFE is to obtain data
privacy because any variables declared within the IIFE cannot be accessed by the
outside world. i.e, If you try to access variables with IIFE then it throws an
error as below, (function () { var message = "IIFE"; console.log(message); } )
(); console.log(message); //Error: message is not defined

Use Cases Of IIFE

Avoid polluting the global namespace To create closures Avoid conflict of
variable names between libraries and programs. IIFE is used to create private
and public variables and methods It is used to execute the async and await
function It is used to work with require function 122. What is shallow copy &
deep copy, What is difference in between , Ways to copy an Array & Object ?

           Shallow Copy: It means that certain values or sub-values are still connected to original variables. Basically, if any of the fields of the objects are referenced to other objects they share the same memory address.

while a shallow copy means that some values are still connected to the original
variable.

const employee = { name: 'Siddharth', age: 35 };

const copyOfEmployee = employee; console.log(employee, 'employee'); /_ { name:
'Siddharth', age: 35 } employee _/ console.log('------------After
Modification-----------'); copyOfEmployee.age = 29; /_ Here you would expect
employee object wouldn't change, but copyOfEmployee and employee object both
share same memory address _/ console.log(employee, 'employee'); /_
------------After Modification----------- { name: 'Siddharth', age: 29 }
employee _/

Shallow Copy: When a reference variable is copied into a new reference variable
using the assignment operator, a shallow copy of the referenced object is
created. In simple words, a reference variable mainly stores the address of the
object it refers to. When a new reference variable is assigned the value of the
old reference variable, the address stored in the old reference variable is
copied into the new one. This means both the old and new reference variable
point to the same object in memory. As a result if the state of the object
changes through any of the reference variables it is reflected for both. Let us
take an example to understand it better.

var employee = { eid: "E102", ename: "Jack", eaddress: "New York", salary: 50000
}

console.log("Employee=> ", employee); var newEmployee = Object.assign({},
employee); ; // Shallow copy console.log("New Employee=> ", newEmployee);

console.log("---------After modification----------"); newEmployee.ename =
"Beck"; console.log("Employee=> ", employee); console.log("New Employee=> ",
newEmployee); // Name of the employee as well as // newEmployee is changed.

Explanation: From the above example, it is seen that when the name of
newEmployee is modified, it is also reflected for the old employee object. This
can cause data inconsistency. This is known as shallow copy. The newly created
object has the same memory address as the old one. Hence, any change made to
either of them changes the attributes for both. To overcome this problem, deep
copy is used. If one of them is removed from memory, the other one ceases to
exist. In a way the two objects are interdependent.

Deep Copy: Unlike the shallow copy, deep copy makes a copy of all attributes of
the old object and allocates separate memory addresses for the new object. In
this way, both the objects are independent of each other and in case of any
modification to either one the other is not affected. Also, if one of the
objects is deleted the other still remains in the memory.This helps us to create
a cloned object without any worries about changing the values of the old object.
There are many ways to create a deep copy depending upon the object structure
but which works for all kinds is JSON.parse() with JSON.stringify(). Here is the
example:

A deep copying means that value of the new variable is disconnected from the
original variable

const employee = { name: "Siddharth", age: 30 } console.log("=========Deep
Copy========"); const copyOfEmployee = JSON.parse(JSON.stringify(employee));
console.log("Employee=> ", employee); console.log("copyOfEmployee=> ",
copyOfEmployee); /_ =========Deep Copy======== Employee=> { name: 'Siddharth',
age: 30 } copyOfEmployee=> { name: 'Siddharth', age: 30 } _/
console.log("---------After modification---------"); copyOfEmployee.name =
"Jack"; copyOfEmployee.age = 20; /_ Here employee object will not change _/
console.log("Employee=> ", employee); console.log("copyOfEmployee=> ",
copyOfEmployee); /_ ---------After modification--------- Employee=> { name:
'Siddharth', age: 30 } copyOfEmployee=> { name: 'Jack', age: 20 } _/

Explanation: Here the new object is created using the JSON.parse() and
JSON.stringify() methods of JavaScript. JSON.stringify() takes a JavaScript
object as argument and then transforms it into a JSON string. This JSON string
is passed to the JSON.parse() method which then transforms it into a JavaScript
object. This method is useful when the object is small and has serializable
properties. But if the object is very large and contains certain
non-serializable properties then there is a risk of data loss. Specially if an
object contains methods then JSON.stringify() will fail as methods are
non-serializable. There are better ways to deep clone of which one is Lodash
which allows cloning methods as well.

Lodash To Deep Copy: Lodash is a JavaScript library that provides multiple
utility functions and one of the most commonly used function of the Lodash
library is the cloneDeep() method. This method helps in deep cloning of an
object and also clones the non serializable properties which were a limitation
in the JSON.stringify() approach.

Json namespace provides functionality for serializing to and deserializing from
JavaScript Object Notation (JSON). Serialization is the process of converting
the state of an object, that is, the values of its properties, into a form that
can be stored or transmitted

Arrays For copying, arrays are similar to copying objects, since arrays are also
objects.

Spread Operator Technically it doesn’t provide a complete deep copy. It only
provides deep copy if the arrays are not nested arrays or 2D or 3D etc. If the
arrays are nested arrays, it provides a deep copy to the first instance of the
values and all the nested arrays are shallow copies. To understand better I have
provided an example:

Array methods — Map, ForEach, and Slice

All of these methods return a new array but they do not provide complete deep
copy, similar to the spread operator it doesn’t provide deep copy for nested
arrays. Here is the example:

console.log("**\*\*\*\***Nested ARRAYS**\*\*\*\***"); const c = [1, 2, [3, 4]];
const d = c.map(el => el);; console.log('c => ', c); console.log('d => ', d); /_
**\*\*\*\***Nested ARRAYS**\*\*\*\*** c => [ 1, 2, [ 3, 4 ] ] d => [ 1, 2, [ 3,
4 ] ] _/ d[0] = 0; // => Change the values of outer array d[2][1] = null; //
Change the values of nested array console.log("---------After
modification---------");

console.log('c => ', c); console.log('d => ', d); /_ ---------After
modification--------- c => [ 1, 2, [ 3, null ] ] d => [ 0, 2, [ 3, null ] ] _/

console.log("**\*\*\*\***Nested ARRAYS**\*\*\*\***"); const c = [1, 2, [3, 4]];
const d = c.slice(0);

console.log('c => ', c); console.log('d => ', d); /_ **\*\*\*\***Nested
ARRAYS**\*\*\*\*** c => [ 1, 2, [ 3, 4 ] ] d => [ 1, 2, [ 3, 4 ] ] _/

d[0] = 0; // => Change the values of outer array d[2][1] = null; // Change the
values of nested array console.log("---------After modification---------");

console.log('c => ', c); console.log('d => ', d); /_ ---------After
modification--------- c => [ 1, 2, [ 3, null ] ] d => [ 0, 2, [ 3, null ] ] _/

console.log("**\*\*\*\***Nested ARRAYS**\*\*\*\***");

const c = [1, 2, [3, 4]]; const d = []; c.forEach(el => d.push(el));;

console.log('c => ', c); console.log('d => ', d); /_ **\*\*\*\***Nested
ARRAYS**\*\*\*\*** c => [ 1, 2, [ 3, 4 ] ] d => [ 1, 2, [ 3, 4 ] ] _/

d[0] = 0; // => Change the values of outer array d[2][1] = null; // Change the
values of nested array console.log("---------After modification---------");

console.log('c => ', c); console.log('d => ', d); /_ ---------After
modification--------- c => [ 1, 2, [ 3, null ] ] d => [ 0, 2, [ 3, null ] ] _/

JSON Parse and Stringify method

The best way to copy objects without any worry is JSON methods which provide
complete Deep Copy. But you can create your own custom functions for a deep copy
for nested arrays or you can use external libraries like JQuery and lodash. Here
is the example:

console.log("**\*\*\*\***Nested ARRAYS**\*\*\*\***");

const c = [1, 2, [3, 4]]; const d = JSON.parse(JSON.stringify(c)); // => JSON
Methods

console.log('c => ', c); console.log('d => ', d);

/_ **\*\*\*\***Nested ARRAYS**\*\*\*\*** c => [ 1, 2, [ 3, 4 ] ] d => [ 1, 2, [
3, 4 ] ] _/

d[0] = 0; d[2][1] = null; console.log("---------After modification---------");

console.log('c => ', c); console.log('d => ', d); /_ ---------After
modification--------- c => [ 1, 2, [ 3, 4 ] ] d => [ 0, 2, [ 3, null ] ] _/

Copy Of an Object : how to copy objects in JavaScript, including shallow copy
and deep copy. To copy an object in JavaScript, you have three options:

1. Use the spread (...) syntax
2. Use the Object.assign() method
3. Use the JSON.stringify() and JSON.parse() methods The following illustrates
   how to copy an object using three methods above: const person = { firstName:
   'John', lastName: 'Doe' };

// using spread ... let p1 = { ...person };

// using Object.assign() method let p2 = Object.assign({}, person);

// using JSON let p3 = JSON.parse(JSON.stringify(person)); Code language:
JavaScript (javascript) Both spread (...) and Object.assign() perform a shallow
copy while the JSON methods carry a deep copy. Shallow copy vs. deep copy In
JavaScript, you use variables to store values that can be primitive or
references. When you make a copy of a value stored in a variable, you create a
new variable with the same value. For a primitive value, you just simply use a
simple assignment: let counter = 1; let copiedCounter = counter; Code language:
JavaScript (javascript) And when you change the value of the copied variable,
the value of the original remains the same. copiedCounter = 2;
console.log(counter); Code language: JavaScript (javascript) Output: 1 However,
if you use the assignment operator for a reference value, it will not copy the
value. Instead, both variables will reference the same object in the memory: let
person = { firstName: 'John', lastName: 'Doe' }; let copiedPerson = person; Code
language: JavaScript (javascript) And when access the object via the new
variable (copiedPerson) and change the value of its property (name), you change
the value of the property of the object. copiedPerson.firstName = 'Jane';
console.log(person); Code language: JavaScript (javascript) Output: { firstName:
'Jane', lastName: 'Doe' } Code language: CSS (css) A deep copying means that
value of the new variable is disconnected from the original variable while a
shallow copy means that some values are still connected to the original
variable. Shallow copy example Consider the following example: let person = {
firstName: 'John', lastName: 'Doe', address: { street: 'North 1st street', city:
'San Jose', state: 'CA', country: 'USA' } };

let copiedPerson = Object.assign({}, person);

copiedPerson.firstName = 'Jane'; // disconnected

copiedPerson.address.street = 'Amphitheatre Parkway'; // connected
copiedPerson.address.city = 'Mountain View'; // connected

console.log(copiedPerson); Code language: JavaScript (javascript) In this
example: • First, create a new object named person. • Second, clone the person
object using the Object.assign() method. • Third, change the first name and
address information of the copiedPerson object. Here is the output: { firstName:
'Jane', lastName: 'Doe', address: { street: 'Amphitheatre Parkway', city:
'Mountain View', state: 'CA', country: 'USA' } } Code language: CSS (css)
However, when you show the values of the person object, you will find that the
address information changed but the first name: console.log(person); Code
language: JavaScript (javascript) Output: { firstName: 'John', lastName: 'Doe',
address: { street: 'Amphitheatre Parkway', city: 'Mountain View', state: 'CA',
country: 'USA' } } Code language: CSS (css) The reason is that the address is
reference value while the first name is a primitive value. Both person and
copiedPerson references different objects but these objects reference the same
address objects. Deep copy example The following snippet replaces the
Object.assign() method by the JSON methods to carry a deep copy the person
object: let person = { firstName: 'John', lastName: 'Doe', address: { street:
'North 1st street', city: 'San Jose', state: 'CA', country: 'USA' } };

let copiedPerson = JSON.parse(JSON.stringify(person));

copiedPerson.firstName = 'Jane'; // disconnected

copiedPerson.address.street = 'Amphitheatre Parkway'; copiedPerson.address.city
= 'Mountain View';

console.log(person); Code language: JavaScript (javascript) Output { firstName:
'John', lastName: 'Doe', address: { street: 'North 1st street', city: 'San
Jose', state: 'CA', country: 'USA' } } Code language: CSS (css) In this example,
all values in the copiedPerson object are disconnected from the original person
object. In this tutorial, you have learned how to copy objects in JavaScript
using either shallow or deep copy.

123. What is strict mode ?

 Strict Mode is a new feature in ECMAScript 5 that allows you to place a
program, or a function, in a “strict” operating context. This way it prevents
certain actions from being taken and throws more exceptions. The literal
expression "use strict"; instructs the browser to use the javascript code in the
Strict mode.

 Why do you need strict mode Strict mode is useful to write "secure" JavaScript
by notifying "bad syntax" into real errors. For example, it eliminates
accidentally creating a global variable by throwing an error and also throws an
error for assignment to a non-writable property, a getter-only property, a
non-existing property, a non-existing variable, or a non-existing object.

 How do you declare strict mode The strict mode is declared by adding "use
strict"; to the beginning of a script or a function. If declared at the
beginning of a script, it has global scope. "use strict"; x = 3.14; // This will
cause an error because x is not declared and if you declare inside a function,
it has local scope x = 3.14; // This will not cause an error. myFunction();

function myFunction() { "use strict"; y = 3.14; // This will cause an error
} 124. What is memorization ?  Memoization is a programming technique which
attempts to increase a function’s performance by caching its previously computed
results. Each time a memoized function is called, its parameters are used to
index the cache. If the data is present, then it can be returned, without
executing the entire function. Otherwise the function is executed and then the
result is added to the cache. Let's take an example of adding function with
memoization,

const memoizAddition = () => { let cache = {}; return (value) => { if (value in
cache) { console.log('Fetching from cache'); return cache[value]; // Here,
cache.value cannot be used as property name starts with the number which is not
a valid JavaScript identifier. Hence, can only be accessed using the square
bracket notation. } else { console.log('Calculating result'); let result =
value + 20; cache[value] = result; return result; } } } // returned function
from memoizAddition const addition = memoizAddition();
console.log(addition(20)); //output: 40 calculated console.log(addition(20));
//output: 40 cached

125. What are possible way to create an object?

There are many ways to create objects in javascript as below i. Object
constructor: The simplest way to create an empty object is using the Object
constructor. Currently this approach is not recommended. var object = new
Object(); ii. Object's create method: The create method of Object creates a new
object by passing the prototype object as a parameter var object =
Object.create(null); iii. Object literal syntax: The object literal syntax (or
object initializer), is a comma-separated set of name-value pairs wrapped in
curly braces. var object = { name: "Sudheer" age: 34 };

Object literal property values can be of any data type, including array,
function, and nested object. Note: This is an easiest way to create an object
iv. Function constructor: Create any function and apply the new operator to
create object instances, function Person(name){ this.name=name; this.age=21; }
var object = new Person("Sudheer"); v. Function constructor with prototype: This
is similar to function constructor but it uses prototype for their properties
and methods, function Person(){} Person.prototype.name = "Sudheer"; var object =
new Person(); This is equivalent to an instance created with an object create
method with a function prototype and then call that function with an instance
and parameters as arguments. function func {};

new func(x, y, z); (OR) // Create a new instance using function prototype. var
newInstance = Object.create(func.prototype)

// Call the function var result = func.call(newInstance, x, y, z),

// If the result is a non-null object then use it otherwise just use the new
instance. console.log(result && typeof result === 'object' ? result :
newInstance); vi. ES6 Class syntax: ES6 introduces class feature to create the
objects class Person { constructor(name) { this.name = name; } }

var object = new Person("Sudheer"); vii. Singleton pattern: A Singleton is an
object which can only be instantiated one time. Repeated calls to its
constructor return the same instance and this way one can ensure that they don't
accidentally create multiple instances. var object = new function(){ this.name =
"Sudheer"; } 126. Mutable vs Immutable 127. What is an async function ? An async
function is a function declared with the async keyword which enables
asynchronous, promise-based behavior to be written in a cleaner style by
avoiding promise chains. These functions can contain zero or more await
expressions. Let's take a below async function example, async function logger()
{

let data = await fetch('http://someapi.com/users'); // pause until fetch returns
console.log(data) } logger(); It is basically syntax sugar over ES2015 promises
and generators.

128. Async (series, parallel, waterfall, queue, priorityQueue, race)
129. Debouncing vs throttling
130. What is a prototype chain Prototype chaining is used to build new types of
     objects based on existing ones. It is similar to inheritance in a class
     based language. The prototype on object instance is available through
     Object.getPrototypeOf(object) or proto property whereas prototype on
     constructors function is available through Object.prototype.

131. What is JSON and its common operations

 JSON is a text-based data format following JavaScript object syntax, which was
popularized by Douglas Crockford. It is useful when you want to transmit data
across a network and it is basically just a text file with an extension of
.json, and a MIME type of application/json Parsing: Converting a string to a
native object JSON.parse(text) Stringification: converting a native object to a
string so it can be transmitted across the network JSON.stringify(object) 132.
How do you redeclare variables in switch block without an error ?

 If you try to redeclare variables in a switch block then it will cause errors
because there is only one block. For example, the below code block throws a
syntax error as below, let counter = 1; switch(x) { case 0: let name; break;

case 1: let name; // SyntaxError for redeclaration. break; } To avoid this
error, you can create a nested block inside a case clause and create a new block
scoped lexical environment. let counter = 1; switch(x) { case 0: { let name;
break; } case 1: { let name; // No SyntaxError for redeclaration. break; } }

133.  What is the Temporal Dead Zone  The Temporal Dead Zone is a behaviour in
      JavaScript that occurs when declaring a variable with the let and const
      keywords, but not with var. In ECMAScript 6, accessing a let or const
      variable before its declaration (within its scope) causes a Reference
      Error. The time span when that happens, between the creation of a
      variable’s binding and its declaration, is called the temporal dead zone.
      Let's see this behaviour with an example, function somemethod() {
      console.log(counter1); // undefined console.log(counter2); //
      ReferenceError var counter1 = 1; let counter2 = 2; }

134.  What is a Cookie ? A cookie is a piece of data that is stored on your
      computer to be accessed by your browser. Cookies are saved as key/value
      pairs. For example, you can create a cookie named username as below,
      document.cookie = "username=John";

135.  Why do you need a Cookie ? Cookies are used to remember information about
      the user profile(such as username). It basically involves two steps, iv.
      When a user visits a web page, the user profile can be stored in a cookie.
      v. Next time the user visits the page, the cookie remembers the user
      profile.

136.  How do you delete a cookie

                 You can delete a cookie by setting the expiry date as a passed date. You don't need to specify a cookie value in this case. For example, you can delete a username cookie in the current page as below.

      document.cookie = "username=; expires=Fri, 07 Jun 2019 00:00:00 UTC;
      path=/;"; Note: You should define the cookie path option to ensure that
      you delete the right cookie. Some browsers doesn't allow to delete a
      cookie unless you specify a path parameter.

137.  What are the differences between cookie, local storage and session storage
      ?

Feature Cookie Local storage Session storage Accessed on client or server side
Both server-side & client-side client-side only client-side only Lifetime As
configured using Expires option until deleted until tab is closed SSL support
Supported Not supported Not supported Maximum data size 4KB 5 MB 5MB

138. What is the main difference between localStorage and sessionStorage
     LocalStorage is the same as SessionStorage but it persists the data even
     when the browser is closed and reopened(i.e it has no expiration time)
     whereas in sessionStorage data gets cleared when the page session ends.

139. Difference between cookie & session ? Cookies and sessions are both
     mechanisms used in web applications to store and manage user-related
     information. Here's a breakdown of the differences between cookies and
     sessions in Node.js:

Cookies:

- A cookie is a small piece of data that is stored on the client-side (typically
  in the user's browser) as a text file.
- Cookies are sent back and forth between the client and the server with each
  HTTP request and response.
- Cookies are used to store data that persists across multiple requests, such as
  user preferences or authentication tokens.
- Cookies have a limited size (usually up to 4KB) and are subject to
  browser-specific limitations on the number of cookies per domain.
- Cookies can be set to have an expiration time, after which they will be
  automatically deleted from the client-side.
- Cookies can be accessed and manipulated both on the server-side and the
  client-side.

Sessions:

- A session is a server-side mechanism for storing and managing user-specific
  data during a user's interaction with a web application.
- Sessions are typically implemented using a unique session identifier (session
  ID) that is stored as a cookie on the client-side.
- The actual session data is stored on the server-side, usually in a database or
  in-memory storage.
- The session ID stored in the cookie is used to associate the client's requests
  with the corresponding session data on the server.
- Sessions can store larger amounts of data compared to cookies since the data
  is stored on the server.
- Sessions can have an expiration time, after which the session data is deleted
  from the server-side storage.
- Sessions provide a more secure way to store sensitive information as the data
  is not exposed to the client-side.

In Node.js, you can use various libraries and frameworks (e.g., Express.js) to
handle cookies and sessions. These libraries provide middleware and methods to
set and retrieve cookies, manage session data, and handle session-related
operations.

In summary, cookies are client-side storage mechanisms that store small amounts
of data, while sessions are server-side storage mechanisms that store larger
amounts of data. Cookies are sent back and forth between the client and the
server, while sessions use a session ID to associate client requests with
server-side data. Both cookies and sessions have their use cases depending on
the specific requirements of your application.

OR

Cookies and sessions are both mechanisms used to manage and store data on the
client-side and server-side, respectively, in web applications. In Node.js, as
well as in other web development environments, they are commonly used for
managing user sessions and maintaining user state across multiple requests.
Let's explore the differences between cookies and sessions:

Cookies:

1. Storage: Cookies are small pieces of data that are stored on the client-side,
   typically in the user's browser.
2. Purpose: Cookies are often used to store user-specific information or
   preferences, such as login credentials, shopping cart items, language
   preferences, etc.
3. Size Limit: Cookies have a size limit of around 4KB, so they can only store a
   limited amount of data.
4. Expiry: Cookies can be set with an expiration date. If an expiration date is
   not set, the cookie is considered a "session cookie" and will be removed when
   the user closes the browser.
5. Communication: Cookies are automatically included in the HTTP header of every
   request to the server, which means they are sent with each request to the
   server.
6. Security: Cookies are prone to security risks like cross-site scripting (XSS)
   and cross-site request forgery (CSRF). Therefore, sensitive data should be
   encrypted or not stored in cookies.

Sessions:

1. Storage: Sessions are stored on the server-side, typically in memory, a
   database, or a caching system.
2. Purpose: Sessions are used to store and manage user-specific data, allowing
   the server to maintain stateful information for a particular user throughout
   their visit.
3. Size Limit: Sessions can store larger amounts of data compared to cookies
   since they are stored on the server-side.
4. Expiry: Sessions can have a limited lifetime set by the server, and they may
   also expire when a user closes their browser, depending on the server's
   configuration.
5. Communication: A session is represented by a unique identifier (session ID)
   that is sent to the client as a cookie. The session ID allows the server to
   associate subsequent requests with the same session.
6. Security: Since session data is stored on the server-side, it is generally
   more secure than cookies. However, developers must be cautious about session
   management and preventing session hijacking.

In summary, cookies are small data stored on the client-side, while sessions are
used to store data on the server-side. Cookies are limited in size and have
various security risks, while sessions are more secure and can store larger
amounts of data. Both cookies and sessions have their specific use cases and are
often used together to provide a more comprehensive solution for managing user
state in web applications.

140.  What is the purpose JSON stringify When sending data to a web server, the
      data has to be in a string format. You can achieve this by converting JSON
      object into a string using stringify() method. var userJSON = {'name':
      'John', age: 31} var userString = JSON.stringify(user);
      console.log(userString); //"{"name":"John","age":31}"

141.  How do you parse JSON string? When receiving the data from a web server,
      the data is always in a string format. But you can convert this string
      value to a javascript object using parse() method. var userString =
      '{"name":"John","age":31}'; var userJSON = JSON.parse(userString);
      console.log(userJSON);// {name: "John", age: 31}

142.  Why do you need JSON ? When exchanging data between a browser and a
      server, the data can only be text. Since JSON is text only, it can easily
      be sent to and from a server, and used as a data format by any programming
      language.

143.  What are PWAs ?

          Progressive web applications (PWAs) are a type of mobile app delivered through the web, built using common web technologies including HTML, CSS and JavaScript. These PWAs are deployed to servers, accessible through URLs, and indexed by search engines.

144.  How do you check whether a string contains a substring ? There are 3
      possible ways to check whether a string contains a substring or not, i.
      Using includes: ES6 provided String.prototype.includes method to test a
      string contains a substring var mainString = "hello", subString = "hell";
      mainString.includes(subString) ii. Using indexOf: In an ES5 or older
      environment, you can use String.prototype.indexOf which returns the index
      of a substring. If the index value is not equal to -1 then it means the
      substring exists in the main string. var mainString = "hello", subString =
      "hell"; mainString.indexOf(subString) !== -1 iii. Using RegEx: The
      advanced solution is using Regular expression's test method(RegExp.test),
      which allows for testing for against regular expressions var mainString =
      "hello", regex = /hell/; regex.test(mainString)

145.  How do you check if a key exists in an object ? You can check whether a
      key exists in an object or not using three approaches, i. Using in
      operator: You can use the in operator whether a key exists in an object or
      not "key" in obj and If you want to check if a key doesn't exist, remember
      to use parenthesis, !("key" in obj) ii. Using hasOwnProperty method: You
      can use hasOwnProperty to particularly test for properties of the object
      instance (and not inherited properties) obj.hasOwnProperty("key") // true
      iii. Using undefined comparison: If you access a non-existing property
      from an object, the result is undefined. Let’s compare the properties
      against undefined to determine the existence of the property. const user =
      { name: 'John' };

console.log(user.name !== undefined); // true console.log(user.nickName !==
undefined); // false

146. How do you test for an empty object ? There are different solutions based
     on ECMAScript versions i. Using Object entries(ECMA 7+): You can use object
     entries length along with constructor type. Object.entries(obj).length ===
     0 && obj.constructor === Object // Since date object length is 0, you need
     to check constructor check as well ii. Using Object keys(ECMA 5+): You can
     use object keys length along with constructor type. Object.keys(obj).length
     === 0 && obj.constructor === Object // Since date object length is 0, you
     need to check constructor check as well iii. Using for-in with
     hasOwnProperty(Pre-ECMA 5): You can use a for-in loop along with
     hasOwnProperty. function isEmpty(obj) { for(var prop in obj) {
     if(obj.hasOwnProperty(prop)) { return false; } }

return JSON.stringify(obj) === JSON.stringify({});

147.  How do you compare two date objects ? You need to use date.getTime()
      method to compare date values instead of comparison operators (==, !=,
      ===, and !== operators) var d1 = new Date(); var d2 = new Date(d1);
      console.log(d1.getTime() === d2.getTime()); //True console.log(d1 === d2);
      // False

148.  How do you add a key value pair in javascript ? What are the different
      ways to access object properties There are two possible solutions to add
      new properties to an object. Let's take a simple object to explain these
      solutions. var object = { key1: value1, key2: value2 }; i. Using dot
      notation: This solution is useful when you know the name of the property
      object.key3 = "value3"; ii. Using square bracket notation: This solution
      is useful when the name of the property is dynamically determined.
      obj["key3"] = "value3";

149.  What are break and continue statements ?  The break statement is used to
      "jump out" of a loop. i.e, It breaks the loop and continues executing the
      code after the loop. for (i = 0; i < 10; i++) { if (i === 5) { break; }
      text += "Number: " + i + "<br>"; }  The continue statement is used to
      "jump over" one iteration in the loop. i.e, It breaks one iteration (in
      the loop), if a specified condition occurs, and continues with the next
      iteration in the loop. for (i = 0; i < 10; i++) { if (i === 5) { continue;
      } text += "Number: " + i + "<br>"; }

150.  What are the benefits of keeping declarations at the top? It is
      recommended to keep all declarations at the top of each script or
      function. The benefits of doing this are, i. Gives cleaner code ii. It
      provides a single place to look for local variables iii. Easy to avoid
      unwanted global variables iv. It reduces the possibility of unwanted
      re-declarations

151.  What is tree shaking ? Tree shaking is a form of dead code elimination. It
      means that unused modules will not be included in the bundle during the
      build process and for that it relies on the static structure of ES2015
      module syntax,( i.e. import and export). Initially this has been
      popularized by the ES2015 module bundler rollup.

152.  What is the need of tree shaking ? Tree Shaking can significantly reduce
      the code size in any application. i.e, The less code we send over the wire
      the more performant the application will be. For example, if we just want
      to create a “Hello World” Application using SPA frameworks then it will
      take around a few MBs, but by tree shaking it can bring down the size to
      just a few hundred KBs. Tree shaking is implemented in Rollup and Webpack
      bundlers.
153.  What is a Regular Expression ? A regular expression is a sequence of
      characters that forms a search pattern. You can use this search pattern
      for searching data in a text. These can be used to perform all types of
      text search and text replace operations. Let's see the syntax format now,
      /pattern/modifiers; For example, the regular expression or search pattern
      with case-insensitive username would be, /John/i

154.  What are the string methods available in Regular expression ?
                  Regular Expressions has two string methods: search() and replace(). The search() method uses an expression to search for a match, and returns the position of the match.
      var msg = "Hello John"; var n = msg.search(/John/i); // 6 The replace()
      method is used to return a modified string where the pattern is replaced.
      var msg = "Hello John"; var n = msg.replace(/John/i, "Buttler"); // Hello
      Buttler
155.  What are modifiers in regular expression ? Modifiers can be used to
      perform case-insensitive and global searches. Let's list down some of the
      modifiers, Modifier Description I Perform case-insensitive matching G
      Perform a global match rather than stops at first match M Perform
      multiline matching Let's take an example of global modifier, var text =
      "Learn JS one by one"; var pattern = /one/g; var result =
      text.match(pattern); // one,one

156.  What are regular expression patterns ? Regular Expressions provide a group
      of patterns in order to match characters. Basically they are categorized
      into 3 types, i. Brackets: These are used to find a range of characters.
      For example, below are some use cases, a. [abc]: Used to find any of the
      characters between the brackets(a,b,c) b. [0-9]: Used to find any of the
      digits between the brackets c. (a|b): Used to find any of the alternatives
      separated with | ii. Metacharacters: These are characters with a special
      meaning For example, below are some use cases, a. \d: Used to find a digit
      b. \s: Used to find a whitespace character c. \b: Used to find a match at
      the beginning or ending of a word iii. Quantifiers: These are useful to
      define quantities For example, below are some use cases, a. n+: Used to
      find matches for any string that contains at least one n b. n\*: Used to
      find matches for any string that contains zero or more occurrences of n c.
      n?: Used to find matches for any string that contains zero or one
      occurrences of n

157.  What is a RegExp object ? RegExp object is a regular expression object
      with predefined properties and methods. Let's see the simple usage of
      RegExp object, var regexp = new RegExp('\\w+'); console.log(regexp); //
      expected output: /\w+/

158.  How do you search a string for a pattern ? You can use the test() method
      of regular expression in order to search a string for a pattern, and
      return true or false depending on the result. var pattern = /you/;
      console.log(pattern.test("How are you?")); //true

159.  What are the differences between freeze and seal methods ?

If an object is frozen using the Object.freeze() method then its properties
become immutable and no changes can be made in them whereas if an object is
sealed using the Object.seal() method then the changes can be made in the
existing properties of the object.

160. What is the main difference between Object.values and Object.entries
     method? The Object.values() method's behavior is similar to
     Object.entries() method but it returns an array of values instead
     [key,value] pairs. const object = { a: 'Good morning', b: 100 };

for (let value of Object.values(object)) { console.log(`${value}`); // 'Good
morning' 100 }

161. How can you get the list of keys of any object ?

You can use the Object.keys() method which is used to return an array of a given
object's own property names, in the same order as we get with a normal loop. For
example, you can get the keys of a user object, const user = { name: 'John',
gender: 'male', age: 40 };

console.log(Object.keys(user)); //['name', 'gender', 'age']

162. What is an anonymous function ? An anonymous function is a function without
     a name! Anonymous functions are commonly assigned to a variable name or
     used as a callback function. The syntax would be as below, function
     (optionalParameters) { //do something }

const myFunction = function(){ //Anonymous function assigned to a variable //do
something };

[1, 2, 3].map(function(element){ //Anonymous function used as a callback
function //do something }); Let's see the above anonymous function in an
example, var x = function (a, b) {return a \* b}; var z = x(5, 10);
console.log(z); // 50

163. What is call stack ? Call Stack is a data structure for javascript
     interpreters to keep track of function calls in the program. It has two
     major actions, i. Whenever you call a function for its execution, you are
     pushing it to the stack. ii. Whenever the execution is completed, the
     function is popped out of the stack. Let's take an example and it's state
     representation in a diagram format function hungry() { eatFruits(); }
     function eatFruits() { return "I'm eating fruits"; }

// Invoke the `hungry` function hungry(); The above code processed in a call
stack as below, iii. Add the hungry() function to the call stack list and
execute the code. iv. Add the eatFruits() function to the call stack list and
execute the code. v. Delete the eatFruits() function from our call stack list.
vi. Delete the hungry() function from the call stack list since there are no
items anymore.

164.  What is an empty statement and purpose of it ? The empty statement is a
      semicolon (;) indicating that no statement will be executed, even if
      JavaScript syntax requires one. Since there is no action with an empty
      statement you might think that it's usage is quite less, but the empty
      statement is occasionally useful when you want to create a loop that has
      an empty body. For example, you can initialize an array with zero values
      as below, // Initialize an array a for(int i=0; i < a.length; a[i++] = 0)
      ;

165.  What is typescript ?

                 TypeScript is a typed superset of JavaScript created by Microsoft that adds optional types, classes, async/await, and many other features, and compiles to plain JavaScript. Angular built entirely in TypeScript and used as a primary language. You can install it globally as

      npm install -g typescript Let's see a simple example of TypeScript usage,
      function greeting(name: string): string { return "Hello, " + name; }

let user = "Sudheer";

console.log(greeting(user)); The greeting method allows only string type as
argument.

166. What are the differences between javascript and typescript?

Feature Typescript Javascript Language paradigm Object oriented programming
language Scripting language Typing support Supports static typing It has dynamic
typing Modules Supported Not supported Interface It has interfaces concept
Doesn't support interfaces Optional parameters Functions support optional
parameters No support of optional parameters for functions

167. What are the advantages of typescript over javascript ? Below are some of
     the advantages of typescript over javascript, i. TypeScript is able to find
     compile time errors at the development time only and it makes sures less
     runtime errors. Whereas javascript is an interpreted language. ii.
     TypeScript is strongly-typed or supports static typing which allows for
     checking type correctness at compile time. This is not available in
     javascript. iii. TypeScript compiler can compile the .ts files into ES3,ES4
     and ES5 unlike ES6 features of javascript which may not be supported in
     some browsers.

168. Does JavaScript supports namespace ? JavaScript doesn’t support namespace
     by default. So if you create any element(function, method, object,
     variable) then it becomes global and pollutes the global namespace. Let's
     take an example of defining two functions without any namespace, function
     func1() { console.log("This is a first definition");

} function func1() { console.log("This is a second definition"); } func1(); //
This is a second definition It always calls the second function definition. In
this case, namespace will solve the name collision problem.

169. How do you declare namespace ? Even though JavaScript lacks namespaces, we
     can use Objects , IIFE to create namespaces. i. Using Object Literal
     Notation: Let's wrap variables and functions inside an Object literal which
     acts as a namespace. After that you can access them using object notation
     var namespaceOne = { function func1() { console.log("This is a first
     definition"); } } var namespaceTwo = { function func1() { console.log("This
     is a second definition"); } } namespaceOne.func1(); // This is a first
     definition namespaceTwo.func1(); // This is a second definition ii. Using
     IIFE (Immediately invoked function expression): The outer pair of
     parentheses of IIFE creates a local scope for all the code inside of it and
     makes the anonymous function a function expression. Due to that, you can
     create the same function in two different function expressions to act as a
     namespace. (function() { function fun1(){ console.log("This is a first
     definition"); } fun1(); }());

(function() { function fun1(){ console.log("This is a second definition"); }
fun1(); }()); iii. Using a block and a let/const declaration: In ECMAScript 6,
you can simply use a block and a let declaration to restrict the scope of a
variable to a block. { let myFunction= function fun1(){ console.log("This is a
first definition"); } myFunction(); } //myFunction(): ReferenceError: myFunction
is not defined.

{ let myFunction= function fun1(){ console.log("This is a second definition"); }
myFunction(); } //myFunction(): ReferenceError: myFunction is not defined.

170. List down some of the features of ES6 ? Below are the list of some new
     features of ES6, i. Support for constants or immutable variables ii.
     Block-scope support for variables, constants and functions iii. Arrow
     functions iv. Default parameters v. Rest and Spread Parameters vi. Template
     Literals vii. Multi-line Strings viii. Destructuring Assignment ix.
     Enhanced Object Literals x. Promises xi. Classes xii. Modules
171. What is ES6 ? ES6 is the sixth edition of the javascript language and it
     was released in June 2015. It was initially known as ECMAScript 6 (ES6) and
     later renamed to ECMAScript 2015. Almost all the modern browsers support
     ES6 but for the old browsers there are many transpilers, like Babel.js etc.

172. Can I redeclare let and const variables ? No, you cannot redeclare let and
     const variables. If you do, it throws below error Uncaught SyntaxError:
     Identifier 'someVariable' has already been declared Explanation: The
     variable declaration with var keyword refers to a function scope and the
     variable is treated as if it were declared at the top of the enclosing
     scope due to hoisting feature. So all the multiple declarations
     contributing to the same hoisted variable without any error. Let's take an
     example of re-declaring variables in the same scope for both var and
     let/const variables. var name = 'John'; function myFunc() { var name =
     'Nick'; var name = 'Abraham'; // Re-assigned in the same function block
     alert(name); // Abraham } myFunc(); alert(name); // John The block-scoped
     multi-declaration throws syntax error, let name = 'John'; function myFunc()
     { let name = 'Nick'; let name = 'Abraham'; // Uncaught SyntaxError:
     Identifier 'name' has already been declared alert(name); }

myFunc(); alert(name);

173.  Is const variable makes the value immutable ?

                 No, the const variable doesn't make the value immutable. But it disallows subsequent assignments(i.e, You can declare with assignment but can't assign another value later)

      const userList = []; userList.push('John'); // Can mutate even though it
      can't re-assign console.log(userList); // ['John']

174.  How do you write multi-line strings in template literals

 In ES5, you would have to use newline escape characters('\n') and
concatenation symbols(+) in order to get multi-line strings. console.log('This
is string sentence 1\n' + 'This is string sentence 2');  Whereas in ES6, You
don't need to mention any newline sequence character,
console.log(`This is string sentence 'This is string sentence 2`);  
175. What is the easiest way to convert an array to an object ?

            You can convert an array to an object with the same data using spread(...) operator.

var fruits = ["banana", "apple", "orange", "watermelon"]; var fruitsObject =
{...fruits}; console.log(fruitsObject); // {0: "banana", 1: "apple", 2:
"orange", 3: "watermelon"}

176. How do you create an array with some data ? You can create an array with
     some data or an array with the same values using fill method. var newArray
     = new Array(5).fill("0"); console.log(newArray); // ["0", "0", "0", "0",
     "0"]

177. What is the easiest multi condition checking ? You can use indexOf to
     compare input with multiple values instead of checking each value as one
     condition. // Verbose approach if (input === 'first' || input === 1 ||
     input === 'second' || input === 2) { someFunction(); } // Shortcut if
     (['first', 1, 'second', 2].indexOf(input) !== -1) { someFunction(); }

178. What are the differences between promises and observables ?

Promises Observables Emits only a single value at a time Emits multiple values
over a period of time(stream of values ranging from 0 to multiple) Eager in
nature; they are going to be called immediately Lazy in nature; they require
subscription to be invoked Promise is always asynchronous even though it
resolved immediately Observable can be either synchronous or asynchronous
Doesn't provide any operators Provides operators such as map, forEach, filter,
reduce, retry, and retryWhen etc Cannot be canceled Canceled by using
unsubscribe() method

179. What is a microTask queue ? In JavaScript, the event loop manages the
     execution of various tasks and callbacks. The microtask queue, also known
     as the Job queue or Promise queue, is a specific queue in the event loop
     that handles microtasks.

Microtasks are tasks that have a higher priority than regular tasks (macrotasks)
such as setTimeout or I/O callbacks. They are typically used for handling
promises, as promises are resolved asynchronously. The microtask queue ensures
that these promise callbacks are executed before the next macrotask is
processed.

Here's how the microtask queue works in the event loop:

1. When a macrotask is completed, the event loop checks the microtask queue.
2. If the microtask queue is not empty, it starts executing the microtasks one
   by one, until the microtask queue is empty.
3. While executing the microtasks, any new microtasks added to the queue are
   also executed immediately.
4. Once the microtask queue is empty, the event loop moves on to the next
   macrotask in the queue and repeats the process.

Some examples of tasks that are added to the microtask queue are:

- Promise callbacks (`then`, `catch`, `finally`).
- Mutation Observer callbacks.
- `process.nextTick` callbacks in Node.js.

It's important to note that microtasks should not be long-running operations, as
they can starve other macrotasks from being executed. Long-running or recursive
microtasks can lead to an unresponsive application and a stalled event loop. In
summary, the microtask queue is a specific queue in the event loop that handles
high-priority tasks such as promise callbacks. It ensures that these callbacks
are executed before the next macrotask is processed, allowing for more
predictable and efficient asynchronous execution.

180. What is the difference between setTimeout, setImmediate and
     process.nextTick?

     `setTimeout`, `setImmediate`, and `process.nextTick` are all used in
     Node.js for scheduling and executing asynchronous operations, but they have
     different behaviors and priorities in the event loop. Here's a breakdown of
     their differences:

1. `setTimeout`:

   - `setTimeout` is a function that schedules a callback function to be
     executed after a specified delay, measured in milliseconds.
   - The callback function is added to the event loop's Callback Queue, and it
     will be executed after the specified delay has elapsed, as long as the
     event loop is not busy with other tasks.
   - `setTimeout` has a minimum delay of 1ms, meaning that even if you pass 0 as
     the delay, the callback will be executed after at least 1ms.

1. `setImmediate`:

   - `setImmediate` is a function that schedules a callback function to be
     executed at the end of the current event loop iteration, right after any
     I/O events callbacks.
   - The callback function is added to the event loop's Check Queue, and it will
     be executed as soon as possible after the I/O events callbacks have
     finished.
   - Compared to `setTimeout`, `setImmediate` has a higher priority and will be
     executed before any timers scheduled by `setTimeout` with the same or lower
     delay.

1. `process.nextTick`:
   - `process.nextTick` is a function that schedules a callback function to be
     executed immediately after the current operation completes and before the
     event loop continues to the next phase.
   - The callback function is added to the event loop's Next Tick Queue, and it
     will be executed before any I/O events, timers, or check callbacks.
   - `process.nextTick` has the highest priority among these three methods and
     will execute its callbacks before any other operations in the event loop.

In summary, the main differences between `setTimeout`, `setImmediate`, and
`process.nextTick` are their priority in the event loop and when they are
executed relative to other tasks. `setTimeout` schedules a callback after a
specified delay, `setImmediate` schedules a callback to be executed at the end
of the current event loop iteration, and `process.nextTick` schedules a callback
to be executed immediately after the current operation completes.

Certainly! Let's provide a combined example to illustrate the differences
between `setTimeout`, `setImmediate`, and `process.nextTick`:

console.log('Start of script');

setTimeout(() => { console.log('Inside setTimeout'); }, 0);

setImmediate(() => { console.log('Inside setImmediate'); });

process.nextTick(() => { console.log('Inside process.nextTick'); });

console.log('End of script');

```

Output:

```

Start of script End of script Inside process.nextTick Inside setImmediate Inside
setTimeout

```

Explanation:

1. The code starts by printing 'Start of script' and 'End of script' synchronously.
2. The `setTimeout` callback is scheduled to run after 0 milliseconds. Although it seems like it would run immediately, it's placed in the event loop's Timer Queue.
3. The `setImmediate` callback is scheduled to run at the end of the current event loop iteration. It's placed in the Check Queue.
4. The `process.nextTick` callback is scheduled to run immediately after the current operation completes and before the event loop proceeds to the next phase. It has the highest priority and is placed in the Next Tick Queue.
5. The event loop then starts processing the various queues:
   - The `process.nextTick` callback is executed first, printing 'Inside process.nextTick'.
   - Next, the event loop checks the Check Queue and executes the `setImmediate` callback, printing 'Inside setImmediate'.
   - Finally, the Timer Queue is checked, and the `setTimeout` callback is executed, printing 'Inside setTimeout'.

In summary, even though `setTimeout` was set with a delay of 0 milliseconds, it was placed in the Timer Queue and executed after the other callbacks. `setImmediate` was executed at the end of the current event loop iteration, and `process.nextTick` had the highest priority and was executed immediately before any other operations in the event loop.









```
