Coding Exercise

1. What is the output of below code var car = new Vehicle("Honda", "white",
   "2010", "UK"); console.log(car);

function Vehicle(model, color, year, country) { this.model = model; this.color =
color; this.year = year; this.country = country; } • 1: Undefined • 2:
ReferenceError • 3: null • 4: {model: "Honda", color: "white", year: "2010",
country: "UK"} Answer Answer: 4 The function declarations are hoisted similar to
any variables. So the placement for Vehicle function declaration doesn't make
any difference.

---

2. What is the output of below code function foo() { let x = y = 0; x++; y++;
   return x; }

console.log(foo(), typeof x, typeof y); • 1: 1, undefined and undefined • 2:
ReferenceError: X is not defined • 3: 1, undefined and number • 4: 1, number and
number Answer Answer: 3 Of course the return value of foo() is 1 due to the
increment operator. But the statement let x = y = 0 declares a local variable x.
Whereas y declared as a global variable accidentally. This statement is
equivalent to, let x; window.y = 0; x = window.y; Since the block scoped
variable x is undefined outside of the function, the type will be undefined too.
Whereas the global variable y is available outside the function, the value is 0
and type is number.

---

3. What is the output of below code function main(){ console.log('A');
   setTimeout( function print(){ console.log('B'); } ,0); console.log('C'); }
   main(); • 1: A, B and C • 2: B, A and C • 3: A and C • 4: A, C and B Answer
   Answer: 4 The statements order is based on the event loop mechanism. The
   order of statements follows the below order,
1. At first, the main function is pushed to the stack.
1. Then the browser pushes the fist statement of the main function( i.e, A's
   console.log) to the stack, executing and popping out immediately.
1. But setTimeout statement moved to Browser API to apply the delay for
   callback.
1. In the meantime, C's console.log added to stack, executed and popped out.
1. The callback of setTimeout moved from Browser API to message queue.
1. The main function popped out from stack because there are no statements to
   execute
1. The callback moved from message queue to the stack since the stack is empty.
1. The console.log for B is added to the stack and display on the console.

---

4. What is the output of below equality check console.log(0.1 + 0.2 === 0.3); •
   1: false • 2: true Answer Answer: 1 This is due to the float point math
   problem. Since the floating point numbers are encoded in binary format, the
   addition operations on them lead to rounding errors. Hence, the comparison of
   floating points doesn't give expected results. You can find more details
   about the explanation here 0.30000000000000004.com/

---

5. What is the output of below code var y = 1; if (function f(){}) { y += typeof
   f; } console.log(y); • 1: 1function • 2: 1object • 3: ReferenceError • 4:
   1undefined Answer Answer: 4 The main points in the above code snippets are,
1. You can see function expression instead function declaration inside if
   statement. So it always returns true.
1. Since it is not declared(or assigned) anywhere, f is undefined and typeof f
   is undefined too. In other words, it is same as var y = 1; if ('foo') { y +=
   typeof f; } console.log(y); Note: It returns 1object for MS Edge browser

---

6. What is the output of below code function foo() { return { message: "Hello
   World" }; } console.log(foo()); • 1: Hello World • 2: Object {message: "Hello
   World"} • 3: Undefined • 4: SyntaxError Answer Answer: 3 This is a semicolon
   issue. Normally semicolons are optional in JavaScript. So if there are any
   statements(in this case, return) missing semicolon, it is automatically
   inserted immediately. Hence, the function returned as undefined. Whereas if
   the opening curly brace is along with the return keyword then the function is
   going to be returned as expected. function foo() { return { message: "Hello
   World" }; } console.log(foo()); // {message: "Hello World"}

---

7. What is the output of below code var myChars = ['a', 'b', 'c', 'd'] delete
   myChars[0]; console.log(myChars); console.log(myChars[0]);
   console.log(myChars.length); • 1: [empty, 'b', 'c', 'd'], empty, 3 • 2:
   [null, 'b', 'c', 'd'], empty, 3 • 3: [empty, 'b', 'c', 'd'], undefined, 4 •
   4: [null, 'b', 'c', 'd'], undefined, 4 Answer Answer: 3 The delete operator
   will delete the object property but it will not reindex the array or change
   its length. So the number or elements or length of the array won't be
   changed. If you try to print myChars then you can observe that it doesn't set
   an undefined value, rather the property is removed from the array. The newer
   versions of Chrome use empty instead of undefined to make the difference a
   bit clearer.

---

8. What is the output of below code in latest Chrome var array1 = new Array(3);
   console.log(array1);

var array2 = []; array2[2] = 100; console.log(array2);

var array3 = [,,,]; console.log(array3); • 1: [undefined × 3], [undefined × 2,
100], [undefined × 3] • 2: [empty × 3], [empty × 2, 100], [empty × 3] • 3: [null
× 3], [null × 2, 100], [null × 3] • 4: [], [100], [] Answer Answer: 2 The latest
chrome versions display sparse array(they are filled with holes) using this
empty x n notation. Whereas the older versions have undefined x n notation.
Note: The latest version of FF displays n empty slots notation.

---

9. What is the output of below code const obj = { prop1: function() { return 0
   }, prop2() { return 1 }, ['prop' + 3]() { return 2 } }

console.log(obj.prop1()); console.log(obj.prop2()); console.log(obj.prop3()); •
1: 0, 1, 2 • 2: 0, { return 1 }, 2 • 3: 0, { return 1 }, { return 2 } • 4: 0, 1,
undefined Answer Answer: 1 ES6 provides method definitions and property
shorthands for objects. So both prop2 and prop3 are treated as regular function
values.

---

10. What is the output of below code console.log(1 < 2 < 3); console.log(3 > 2 >
    1); • 1: true, true • 2: true, false • 3: SyntaxError, SyntaxError, • 4:
    false, false Answer Answer: 2 The important point is that if the statement
    contains the same operators(e.g, < or >) then it can be evaluated from left
    to right. The first statement follows the below order,
1. console.log(1 < 2 < 3);
1. console.log(true < 3);
1. console.log(1 < 3); // True converted as 1 during comparison
1. True Whereas the second statement follows the below order,
1. console.log(3 > 2 > 1);
1. console.log(true > 1);
1. console.log(1 > 1); // False converted as 0 during comparison
1. False

---

11. What is the output of below code in non-strict mode function
    printNumbers(first, second, first) { console.log(first, second, first); }
    printNumbers(1, 2, 3); • 1: 1, 2, 3 • 2: 3, 2, 3 • 3: SyntaxError: Duplicate
    parameter name not allowed in this context • 4: 1, 2, 1 Answer Answer: 2 In
    non-strict mode, the regular JavaScript functions allow duplicate named
    parameters. The above code snippet has duplicate parameters on 1st and 3rd
    parameters. The value of the first parameter is mapped to the third argument
    which is passed to the function. Hence, the 3rd argument overrides the first
    parameter. Note: In strict mode, duplicate parameters will throw a Syntax
    Error.

---

12. What is the output of below code const printNumbersArrow = (first, second,
    first) => { console.log(first, second, first); } printNumbersArrow(1, 2, 3);
    • 1: 1, 2, 3 • 2: 3, 2, 3 • 3: SyntaxError: Duplicate parameter name not
    allowed in this context • 4: 1, 2, 1 Answer Answer: 3 Unlike regular
    functions, the arrow functions doesn't not allow duplicate parameters in
    either strict or non-strict mode. So you can see SyntaxError in the console.

---

13. What is the output of below code const arrowFunc = () => arguments.length;
    console.log(arrowFunc(1, 2, 3)); • 1: ReferenceError: arguments is not
    defined • 2: 3 • 3: undefined • 4: null Answer Answer: 1 Arrow functions do
    not have an arguments, super, this, or new.target bindings. So any reference
    to arguments variable tries to resolve to a binding in a lexically enclosing
    environment. In this case, the arguments variable is not defined outside of
    the arrow function. Hence, you will receive a reference error. Where as the
    normal function provides the number of arguments passed to the function
    const func = function () { return arguments.length; } console.log(func(1, 2,
    3)); But If you still want to use an arrow function then rest operator on
    arguments provides the expected arguments const arrowFunc = (...args) =>
    args.length; console.log(arrowFunc(1, 2, 3));

---

14. What is the output of below code console.log( String.prototype.trimLeft.name
    === 'trimLeft' ); console.log( String.prototype.trimLeft.name ===
    'trimStart' ); • 1: True, False • 2: False, True Answer Answer: 2 In order
    to be consistent with functions like String.prototype.padStart, the standard
    method name for trimming the whitespaces is considered as trimStart. Due to
    web web compatibility reasons, the old method name 'trimLeft' still acts as
    an alias for 'trimStart'. Hence, the prototype for 'trimLeft' is always
    'trimStart'

---

15. What is the output of below code console.log(Math.max()); • 1: undefined •
    2: Infinity • 3: 0 • 4: -Infinity Answer Answer: 4 -Infinity is the initial
    comparant because almost every other value is bigger. So when no arguments
    are provided, -Infinity is going to be returned. Note: Zero number of
    arguments is a valid case.

---

16. What is the output of below code console.log(10 == [10]); console.log(10 ==
    [[[[[[[10]]]]]]]); • 1: True, True • 2: True, False • 3: False, False • 4:
    False, True Answer Answer: 1 As per the comparison algorithm in the
    ECMAScript specification(ECMA-262), the above expression converted into JS
    as below 10 === Number([10].valueOf().toString()) // 10 So it doesn't matter
    about number brackets([]) around the number, it is always converted to a
    number in the expression.

---

17. What is the output of below code console.log(10 + '10'); console.log(10 -
    '10'); • 1: 20, 0 • 2: 1010, 0 • 3: 1010, 10-10 • 4: NaN, NaN Answer Answer:
    2 The concatenation operator(+) is applicable for both number and string
    types. So if any operand is string type then both operands concatenated as
    strings. Whereas subtract(-) operator tries to convert the operands as
    number type.

---

18. What is the output of below code console.log([0] == false); if([0]) {
    console.log("I'm True"); } else { console.log("I'm False"); } • 1: True, I'm
    True • 2: True, I'm False • 3: False, I'm True • 4: False, I'm False Answer
    Answer: 1 In comparison operators, the expression [0] converted to
    Number([0].valueOf().toString()) which is resolved to false. Whereas [0]
    just becomes a truthy value without any conversion because there is no
    comparison operator.
19. What is the output of below code console.log([1, 2] + [3, 4]); • 1:
    [1,2,3,4] • 2: [1,2][3,4] • 3: SyntaxError • 4: 1,23,4 Answer Answer: 4
    The + operator is not meant or defined for arrays. So it converts arrays
    into strings and concatenates them.

---

20. What is the output of below code const numbers = new Set([1, 1, 2, 3, 4]);
    console.log(numbers);

const browser = new Set('Firefox'); console.log(browser); • 1: {1, 2, 3, 4},
{"F", "i", "r", "e", "f", "o", "x"} • 2: {1, 2, 3, 4}, {"F", "i", "r", "e", "o",
"x"} • 3: [1, 2, 3, 4], ["F", "i", "r", "e", "o", "x"] • 4: {1, 1, 2, 3, 4},
{"F", "i", "r", "e", "f", "o", "x"} Answer Answer: 1 Since Set object is a
collection of unique values, it won't allow duplicate values in the collection.
At the same time, it is case sensitive data structure.

---

21. What is the output of below code console.log(NaN === NaN); • 1: True • 2:
    False Answer Answer: 2 JavaScript follows IEEE 754 spec standards. As per
    this spec, NaNs are never equal for floating-point numbers.

---

22. What is the output of below code let numbers = [1, 2, 3, 4, NaN];
    console.log(numbers.indexOf(NaN)); • 1: 4 • 2: NaN • 3: SyntaxError • 4: -1
    Answer Answer: 4 The indexOf uses strict equality operator(===) internally
    and NaN === NaN evaluates to false. Since indexOf won't be able to find NaN
    inside an array, it returns -1 always. But you can use
    Array.prototype.findIndex method to find out the index of NaN in an array or
    You can use Array.prototype.includes to check if NaN is present in an array
    or not. let numbers = [1, 2, 3, 4, NaN];
    console.log(numbers.findIndex(Number.isNaN)); // 4

console.log(numbers.includes(NaN)); // true

---

23. What is the output of below code let [a, ...b,] = [1, 2, 3, 4, 5];
    console.log(a, b); • 1: 1, [2, 3, 4, 5] • 2: 1, {2, 3, 4, 5} • 3:
    SyntaxError • 4: 1, [2, 3, 4] Answer Answer: 3 When using rest parameters,
    trailing commas are not allowed and will throw a SyntaxError. If you remove
    the trailing comma then it displays 1st answer let [a, ...b] = [1, 2, 3, 4,
    5]; console.log(a, b); // 1, [2, 3, 4, 5]

---

25. What is the output of below code async function func() { return 10; }
    console.log(func()); • 1: Promise {<fulfilled>: 10} • 2: 10 • 3: SyntaxError
    • 4: Promise {<rejected>: 10} Answer Answer: 1 Async functions always return
    a promise. But even if the return value of an async function is not
    explicitly a promise, it will be implicitly wrapped in a promise. The above
    async function is equivalent to below expression, function func() { return
    Promise.resolve(10) }

---

26. What is the output of below code async function func() { await 10; }
    console.log(func()); • 1: Promise {<fulfilled>: 10} • 2: 10 • 3: SyntaxError
    • 4: Promise {<resolved>: undefined} Answer Answer: 4 The await expression
    returns value 10 with promise resolution and the code after each await
    expression can be treated as existing in a .then callback. In this case,
    there is no return expression at the end of the function. Hence, the default
    return value of undefined is returned as the resolution of the promise. The
    above async function is equivalent to below expression, function func() {
    return Promise.resolve(10).then(() => undefined) }

---

27. What is the output of below code function delay() { return new
    Promise(resolve => setTimeout(resolve, 2000)); }

async function delayedLog(item) { await delay(); console.log(item); }

async function processArray(array) { array.forEach(item => { await
delayedLog(item); }) }

processArray([1, 2, 3, 4]); • 1: SyntaxError • 2: 1, 2, 3, 4 • 3: 4, 4, 4, 4 •
4: 4, 3, 2, 1 Answer Answer: 1 Even though “processArray” is an async function,
the anonymous function that we use for forEach is synchronous. If you use await
inside a synchronous function then it throws a syntax error.

---

28. What is the output of below code function delay() { return new
    Promise(resolve => setTimeout(resolve, 2000)); }

async function delayedLog(item) { await delay(); console.log(item); }

async function process(array) { array.forEach(async (item) => { await
delayedLog(item); }); console.log('Process completed!'); } process([1, 2, 3,
5]); • 1: 1 2 3 5 and Process completed! • 2: 5 5 5 5 and Process completed! •
3: Process completed! and 5 5 5 5 • 4: Process completed! and 1 2 3 5 Answer
Answer: 4 The forEach method will not wait until all items are finished but it
just runs the tasks and goes next. Hence, the last statement is displayed first
followed by a sequence of promise resolutions. But you control the array
sequence using for..of loop, async function processArray(array) { for (const
item of array) { await delayedLog(item); } console.log('Process completed!'); }

---

29. What is the output of below code var set = new Set();
    set.add("+0").add("-0").add(NaN).add(undefined).add(NaN);; console.log(set);
    • 1: Set(4) {"+0", "-0", NaN, undefined} • 2: Set(3) {"+0", NaN, undefined}
    • 3: Set(5) {"+0", "-0", NaN, undefined, NaN} • 4: Set(4) {"+0", NaN,
    undefined, NaN} Answer Answer: 1 Set has few exceptions from equality check,
1. All NaN values are equal
1. Both +0 and -0 considered as different values

---

30. What is the output of below code const sym1 = Symbol('one'); const sym2 =
    Symbol('one');

const sym3 = Symbol.for('two'); const sym4 = Symbol.for('two');

cnsooe.log(sym1 === sym2, sym3 === sym4); • 1: true, true • 2: true, false • 3:
false, true • 4: false, false Answer Answer: 3 Symbol follows below conventions,

1. Every symbol value returned from Symbol() is unique irrespective of the
   optional string.
2. Symbol.for() function creates a symbol in a global symbol registry list. But
   it doesn't necessarily create a new symbol on every call, it checks first if
   a symbol with the given key is already present in the registry and returns
   the symbol if it is found. Otherwise a new symbol created in the registry.
   Note: The symbol description is just useful for debugging purposes.

---

31. What is the output of below code const sym1 = new Symbol('one');
    console.log(sym1); • 1: SyntaxError • 2: one • 3: Symbol('one') • 4: Symbol
    Answer Answer: 1 Symbol is a just a standard function and not an object
    constructor(unlike other primitives new Boolean, new String and new Number).
    So if you try to call it with the new operator will result in a TypeError

---

32. What is the output of below code let myNumber = 100; let myString = '100';

if (!typeof myNumber === "string") { console.log("It is not a string!"); } else
{ console.log("It is a string!"); }

if (!typeof myString === "number"){ console.log("It is not a number!") } else {
console.log("It is a number!"); } • 1: SyntaxError • 2: It is not a string!, It
is not a number! • 3: It is not a string!, It is a number! • 4: It is a string!,
It is a number! Answer Answer: 4 The return value of typeof myNumber (OR) typeof
myString is always the truthy value (either "number" or "string"). Since !
operator converts the value to a boolean value, the value of both !typeof
myNumber or !typeof myString is always false. Hence the if condition fails and
control goes to else block.

---

33. What is the output of below code console.log(JSON.stringify({ myArray:
    ['one', undefined, function(){}, Symbol('')] }));
    console.log(JSON.stringify({ [Symbol.for('one')]: 'one' },
    [Symbol.for('one')])); • 1: {"myArray":['one', undefined, {}, Symbol]}, {} •
    2: {"myArray":['one', null,null,null]}, {} • 3: {"myArray":['one',
    null,null,null]}, "{ [Symbol.for('one')]: 'one' }, [Symbol.for('one')]" • 4:
    {"myArray":['one', undefined, function(){}, Symbol('')]}, {} Answer Answer:
    2 The symbols has below constraints,
1. The undefined, Functions, and Symbols are not valid JSON values. So those
   values are either omitted (in an object) or changed to null (in an array).
   Hence, it returns null values for the value array.
1. All Symbol-keyed properties will be completely ignored. Hence it returns an
   empty object({}).

---

34. What is the output of below code class A { constructor() {
    console.log(new.target.name) } }

class B extends A { constructor() { super() } }

new A(); new B(); • 1: A, A • 2: A, B Answer Answer: 2 Using constructors,
new.target refers to the constructor (points to the class definition of class
which is initialized) that was directly invoked by new. This also applies to the
case if the constructor is in a parent class and was delegated from a child
constructor.

---

35. What is the output of below code const [x, ...y,] = [1, 2, 3, 4];
    console.log(x, y); • 1: 1, [2, 3, 4] • 2: 1, [2, 3] • 3: 1, [2] • 4:
    SyntaxError Answer Answer: 4 It throws a syntax error because the rest
    element should not have a trailing comma. You should always consider using a
    rest operator as the last element.

---

36. What is the output of below code const {a: x = 10, b: y = 20} = {a: 30};

console.log(x); console.log(y); • 1: 30, 20 • 2: 10, 20 • 3: 10, undefined • 4:
30, undefined Answer Answer: 1 The object property follows below rules,

1. The object properties can be retrieved and assigned to a variable with a
   different name
2. The property assigned a default value when the retrieved value is undefined

---

37. What is the output of below code function area({length = 10, width = 20}) {
    console.log(length\*width); }

area(); • 1: 200 • 2: Error • 3: undefined • 4: 0 Answer Answer: 2 If you leave
out the right-hand side assignment for the destructuring object, the function
will look for at least one argument to be supplied when invoked. Otherwise you
will receive an error Error: Cannot read property 'length' of undefined as
mentioned above. You can avoid the error with either of the below changes,

1. Pass at least an empty object: function area({length = 10, width = 20}) {
   console.log(length\*width); }

area({}); 2. Assign default empty object: function area({length = 10, width =
20} = {}) { console.log(length\*width); }

area();

---

38. What is the output of below code const props = [ { id: 1, name: 'John'}, {
    id: 2, name: 'Jack'}, { id: 3, name: 'Tom'} ];

const [,, { name }] = props; console.log(name); • 1: Tom • 2: Error • 3:
undefined • 4: John Answer Answer: 1 It is possible to combine Array and Object
destructuring. In this case, the third element in the array props accessed first
followed by name property in the object.

---

39. What is the output of below code function checkType(num = 1) {
    console.log(typeof num); }

checkType(); checkType(undefined); checkType(''); checkType(null); • 1: number,
undefined, string, object • 2: undefined, undefined, string, object • 3: number,
number, string, object • 4: number, number, number, number Answer Answer: 3 If
the function argument is set implicitly(not passing argument) or explicitly to
undefined, the value of the argument is the default parameter. Whereas for other
falsy values('' or null), the value of the argument is passed as a parameter.
Hence, the result of function calls categorized as below,

1. The first two function calls logs number type since the type of default value
   is number
2. The type of '' and null values are string and object type respectively.

---

40. What is the output of below code function add(item, items = []) {
    items.push(item); return items; }

console.log(add('Orange')); console.log(add('Apple')); • 1: ['Orange'],
['Orange', 'Apple'] • 2: ['Orange'], ['Apple'] Answer Answer: 2 Since the
default argument is evaluated at call time, a new object is created each time
the function is called. So in this case, the new array is created and an element
pushed to the default empty array.

---

41. What is the output of below code function greet(greeting, name, message =
    greeting + ' ' + name) { console.log([greeting, name, message]); }

greet('Hello', 'John'); greet('Hello', 'John', 'Good morning!'); • 1:
SyntaxError • 2: ['Hello', 'John', 'Hello John'], ['Hello', 'John', 'Good
morning!'] Answer Answer: 2 Since parameters defined earlier are available to
later default parameters, this code snippet doesn't throw any error.

---

42. What is the output of below code function outer(f = inner()) { function
    inner() { return 'Inner' } } outer(); • 1: ReferenceError • 2: Inner Answer
    Answer: 1 The functions and variables declared in the function body cannot
    be referred from default value parameter initializers. If you still try to
    access, it throws a run-time ReferenceError(i.e, inner is not defined).

---

43. What is the output of below code function myFun(x, y, ...manyMoreArgs) {
    console.log(manyMoreArgs) }

myFun(1, 2, 3, 4, 5); myFun(1, 2); • 1: [3, 4, 5], undefined • 2: SyntaxError •
3: [3, 4, 5], [] • 4: [3, 4, 5], [undefined] Answer Answer: 3 The rest parameter
is used to hold the remaining parameters of a function and it becomes an empty
array if the argument is not provided.

---

44. What is the output of below code const obj = {'key': 'value'}; const array =
    [...obj]; console.log(array); • 1: ['key', 'value'] • 2: TypeError • 3: [] •
    4: ['key'] Answer Answer: 2 Spread syntax can be applied only to iterable
    objects. By default, Objects are not iterable, but they become iterable when
    used in an Array, or with iterating functions such as map(), reduce(), and
    assign(). If you still try to do it, it still throws TypeError: obj is not
    iterable.

---

45. What is the output of below code function\* myGenFunc() { yield 1; yield 2;
    yield 3; } var myGenObj = new myGenFunc; console.log(myGenObj.next().value);
    • 1: 1 • 2: undefined • 3: SyntaxError • 4: TypeError Answer Answer: 4
    Generators are not constructible type. But if you still proceed to do, there
    will be an error saying "TypeError: myGenFunc is not a constructor"

---

46. What is the output of below code function\* yieldAndReturn() { yield 1;
    return 2; yield 3; }

var myGenObj = yieldAndReturn() console.log(myGenObj.next());
console.log(myGenObj.next()); console.log(myGenObj.next()); • 1: { value: 1,
done: false }, { value: 2, done: true }, { value: undefined, done: true } • 2: {
value: 1, done: false }, { value: 2, done: false }, { value: undefined, done:
true } • 3: { value: 1, done: false }, { value: 2, done: true }, { value: 3,
done: true } • 4: { value: 1, done: false }, { value: 2, done: false }, { value:
3, done: true } Answer Answer: 1 A return statement in a generator function will
make the generator finish. If a value is returned, it will be set as the value
property of the object and done property to true. When a generator is finished,
subsequent next() calls return an object of this form: {value: undefined, done:
true}.

---

47. What is the output of below code const myGenerator = (function \*(){ yield
    1; yield 2; yield 3; })(); for (const value of myGenerator) {
    console.log(value); break; }

for (const value of myGenerator) { console.log(value); } • 1: 1,2,3 and 1,2,3 •
2: 1,2,3 and 4,5,6 • 3: 1 and 1 • 4: 1 Answer Answer: 4 The generator should not
be re-used once the iterator is closed. i.e, Upon exiting a loop(on completion
or using break & return), the generator is closed and trying to iterate over it
again does not yield any more results. Hence, the second loop doesn't print any
value.

---

48. What is the output of below code const num = 0o38; console.log(num); • 1:
    SyntaxError • 2: 38 Answer Answer: 1 If you use an invalid number(outside of
    0-7 range) in the octal literal, JavaScript will throw a SyntaxError. In
    ES5, it treats the octal literal as a decimal number.

---

49. What is the output of below code const squareObj = new Square(10);
    console.log(squareObj.area);

class Square { constructor(length) { this.length = length; }

get area() { return this.length \* this.length; }

set area(value) { this.area = value; } } • 1: 100 • 2: ReferenceError Answer
Answer: 2 Unlike function declarations, class declarations are not hoisted. i.e,
First You need to declare your class and then access it, otherwise it will throw
a ReferenceError "Uncaught ReferenceError: Square is not defined". Note: Class
expressions also applies to the same hoisting restrictions of class
declarations.

---

50. What is the output of below code function Person() { }

Person.prototype.walk = function() { return this; }

Person.run = function() { return this; }

let user = new Person(); let walk = user.walk; console.log(walk());

let run = Person.run; console.log(run()); • 1: undefined, undefined • 2: Person,
Person • 3: SyntaxError • 4: Window, Window Answer Answer: 4 When a regular or
prototype method is called without a value for this, the methods return an
initial this value if the value is not undefined. Otherwise global window object
will be returned. In our case, the initial this value is undefined so both
methods return window objects.

---

51. What is the output of below code class Vehicle { constructor(name) {
    this.name = name; }

start() { console.log(`${this.name} vehicle started`); } }

class Car extends Vehicle { start() { console.log(`${this.name} car started`);
super.start(); } }

const car = new Car('BMW'); console.log(car.start()); • 1: SyntaxError • 2: BMW
vehicle started, BMW car started • 3: BMW car started, BMW vehicle started • 4:
BMW car started, BMW car started Answer Answer: 3 The super keyword is used to
call methods of a superclass. Unlike other languages the super invocation
doesn't need to be a first statement. i.e, The statements will be executed in
the same order of code.

---

52. What is the output of below code const USER = {'age': 30}; USER.age = 25;
    console.log(USER.age); • 1: 30 • 2: 25 • 3: Uncaught TypeError • 4:
    SyntaxError Answer Answer: 2 Even though we used constant variables, the
    content of it is an object and the object's contents (e.g properties) can be
    altered. Hence, the change is going to be valid in this case.

---

53. What is the output of below code console.log('🙂' === '🙂'); • 1: false • 2:
    true Answer Answer: 2 Emojis are unicodes and the unicode for smile symbol
    is "U+1F642". The unicode comparision of same emojies is equivalent to
    string comparison. Hence, the output is always true.

---

54. What is the output of below code? console.log(typeof typeof typeof true); •
    1: string • 2: boolean • 3: NaN • 4: number Answer Answer: 1 The typeof
    operator on any primitive returns a string value. So even if you apply the
    chain of typeof operators on the return value, it is always string.

---

55. What is the output of below code? let zero = new Number(0);

if (zero) { console.log("If"); } else { console.log("Else"); } • 1: If • 2: Else
• 3: NaN • 4: SyntaxError Answer Answer: 1

1. The type of operator on new Number always returns object. i.e, typeof new
   Number(0) --> object.
2. Objects are always truthy in if block Hence the above code block always goes
   to if section.

---

55. What is the output of below code in non strict mode? let msg = "Good
    morning!!";

msg.name = "John";

console.log(msg.name); • 1: "" • 2: Error • 3: John • 4: Undefined Answer
Answer: 4 It returns undefined for non-strict mode and returns Error for strict
mode. In non-strict mode, the wrapper object is going to be created and get the
mentioned property. But the object get disappeared after accessing the property
in next line.

---

56. What is the output of below code? let count = 10;

(function innerFunc() { if (count === 10) { let count = 11; console.log(count);
} console.log(count); })(); • 1: 11, 10 • 2: 11, 11 • 3: 10, 11 • 4: 10, 10
Answer Answer: 1 11 and 10 is logged to the console. The innerFunc is a closure
which captures the count variable from the outerscope. i.e, 10. But the
conditional has another local variable count which overwrites the ourter count
variable. So the first console.log displays value 11. Whereas the second
console.log logs 10 by capturing the count variable from outerscope.

57. What is the output of below code ? • 1: console.log(true && 'hi'); • 2:
    console.log(true && 'hi' && 1); • 3: console.log(true && '' && 0); Answer

---

58. What is the output of below code ? let arr = [1, 2, 3]; let str = "1,2,3";

console.log(arr == str); • 1: false • 2: Error • 3: true Answer Answer: 3 Arrays
have their own implementation of toString method that returns a comma-separated
list of elements. So the above code snippet returns true. In order to avoid
conversion of array type, we should use === for comparison.

Toptal Javascript Output Questions: 59. What is a potential pitfall with using
typeof bar === "object" to determine if bar is an object? How can this pitfall
be avoided? Answer Although typeof bar === "object" is a reliable way of
checking if bar is an object, the surprising gotcha in JavaScript is that null
is also considered an object! Therefore, the following code will, to the
surprise of most developers, log true (not false) to the console: var bar =
null; console.log(typeof bar === "object"); // logs true! As long as one is
aware of this, the problem can easily be avoided by also checking if bar is
null: console.log((bar !== null) && (typeof bar === "object")); // logs false To
be entirely thorough in our answer, there are two other things worth noting:
First, the above solution will return false if bar is a function. In most cases,
this is the desired behavior, but in situations where you want to also return
true for functions, you could amend the above solution to be: console.log((bar
!== null) && ((typeof bar === "object") || (typeof bar === "function")));
Second, the above solution will return true if bar is an array (e.g., if var bar
= [];). In most cases, this is the desired behavior, since arrays are indeed
objects, but in situations where you want to also false for arrays, you could
amend the above solution to be: console.log((bar !== null) && (typeof bar ===
"object") && (toString.call(bar) !== "[object Array]")); However, there’s one
other alternative that returns false for nulls, arrays, and functions, but true
for objects: console.log((bar !== null) && (bar.constructor === Object)); Or, if
you’re using jQuery: console.log((bar !== null) && (typeof bar === "object") &&
(! $.isArray(bar))); ES5 makes the array case quite simple, including its own
null check: console.log(Array.isArray(bar));

60.What will the code below output to the console and why? (function(){ var a =
b = 3; })(); console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined')); Answer Since both a and
b are defined within the enclosing scope of the function, and since the line
they are on begins with the var keyword, most JavaScript developers would expect
typeof a and typeof b to both be undefined in the above example. However, that
is not the case. The issue here is that most developers incorrectly understand
the statement var a = b = 3; to be shorthand for: var b = 3; var a = b; But in
fact, var a = b = 3; is actually shorthand for: b = 3; var a = b; As a result
(if you are not using strict mode), the output of the code snippet would be: a
defined? false b defined? true But how can b be defined outside of the scope of
the enclosing function? Well, since the statement var a = b = 3; is shorthand
for the statements b = 3; and var a = b;, b ends up being a global variable
(since it is not preceded by the var keyword) and is therefore still in scope
even outside of the enclosing function. Note that, in strict mode (i.e., with
use strict), the statement var a = b = 3; will generate a runtime error of
ReferenceError: b is not defined, thereby avoiding any headfakes/bugs that might
othewise result. (Yet another prime example of why you should use use strict as
a matter of course in your code!) 61. What will the code below output to the
console and why? var myObject = { foo: "bar", func: function() { var self =
this; console.log("outer func: this.foo = " + this.foo); console.log("outer
func: self.foo = " + self.foo); (function() { console.log("inner func: this.foo
= " + this.foo); console.log("inner func: self.foo = " + self.foo); }()); } };
myObject.func(); Answer The above code will output the following to the console:
outer func: this.foo = bar outer func: self.foo = bar inner func: this.foo =
undefined inner func: self.foo = bar In the outer function, both this and self
refer to myObject and therefore both can properly reference and access foo. In
the inner function, though, this no longer refers to myObject. As a result,
this.foo is undefined in the inner function, whereas the reference to the local
variable self remains in scope and is accessible there. 62. What is the
significance of, and reason for, wrapping the entire content of a JavaScript
source file in a function block? Answer This is an increasingly common practice,
employed by many popular JavaScript libraries (jQuery, Node.js, etc.). This
technique creates a closure around the entire contents of the file which,
perhaps most importantly, creates a private namespace and thereby helps avoid
potential name clashes between different JavaScript modules and libraries.
Another feature of this technique is to allow for an easily referenceable
(presumably shorter) alias for a global variable. This is often used, for
example, in jQuery plugins. jQuery allows you to disable the $ reference to the
jQuery namespace, using jQuery.noConflict(). If this has been done, your code
can still use $ employing this closure technique, as follows:

(function($) { /_ jQuery plugin code referencing $ _/ } )(jQuery); 63.What is
the significance, and what are the benefits, of including 'use strict' at the
beginning of a JavaScript source file? Answer The short and most important
answer here is that use strict is a way to voluntarily enforce stricter parsing
and error handling on your JavaScript code at runtime. Code errors that would
otherwise have been ignored or would have failed silently will now generate
errors or throw exceptions. In general, it is a good practice. Some of the key
benefits of strict mode include: Makes debugging easier. Code errors that would
otherwise have been ignored or would have failed silently will now generate
errors or throw exceptions, alerting you sooner to problems in your code and
directing you more quickly to their source. Prevents accidental globals. Without
strict mode, assigning a value to an undeclared variable automatically creates a
global variable with that name. This is one of the most common errors in
JavaScript. In strict mode, attempting to do so throws an error. Eliminates this
coercion. Without strict mode, a reference to a this value of null or undefined
is automatically coerced to the global. This can cause many headfakes and
pull-out-your-hair kind of bugs. In strict mode, referencing a a this value of
null or undefined throws an error. Disallows duplicate parameter values. Strict
mode throws an error when it detects a duplicate named argument for a function
(e.g., function foo(val1, val2, val1){}), thereby catching what is almost
certainly a bug in your code that you might otherwise have wasted lots of time
tracking down. Note: It used to be (in ECMAScript 5) that strict mode would
disallow duplicate property names (e.g. var object = {foo: "bar", foo: "baz"};)
but as of ECMAScript 2015 this is no longer the case. Makes eval() safer. There
are some differences in the way eval() behaves in strict mode and in non-strict
mode. Most significantly, in strict mode, variables and functions declared
inside of an eval() statement are not created in the containing scope (they are
created in the containing scope in non-strict mode, which can also be a common
source of problems). Throws error on invalid usage of delete. The delete
operator (used to remove properties from objects) cannot be used on
non-configurable properties of the object. Non-strict code will fail silently
when an attempt is made to delete a non-configurable property, whereas strict
mode will throw an error in such a case. 64. Consider the two functions below.
Will they both return the same thing? Why or why not? function foo1() { return {
bar: "hello" }; } function foo2() { return { bar: "hello" }; } Answer
Surprisingly, these two functions will not return the same thing. Rather:
console.log("foo1 returns:"); console.log(foo1()); console.log("foo2 returns:");
console.log(foo2()); will yield: foo1 returns: Object {bar: "hello"} foo2
returns: undefined Not only is this surprising, but what makes this particularly
gnarly is that foo2() returns undefined without any error being thrown. The
reason for this has to do with the fact that semicolons are technically optional
in JavaScript (although omitting them is generally really bad form). As a
result, when the line containing the return statement (with nothing else on the
line) is encountered in foo2(), a semicolon is automatically inserted
immediately after the return statement.

No error is thrown since the remainder of the code is perfectly valid, even
though it doesn’t ever get invoked or do anything (it is simply an unused code
block that defines a property bar which is equal to the string "hello"). This
behavior also argues for following the convention of placing an opening curly
brace at the end of a line in JavaScript, rather than on the beginning of a new
line. As shown here, this becomes more than just a stylistic preference in
JavaScript.

65. What will the code below output? Explain your answer. console.log(0.1 +
    0.2); console.log(0.1 + 0.2 == 0.3); Answer An educated answer to this
    question would simply be: “You can’t be sure. it might print out 0.3 and
    true, or it might not. Numbers in JavaScript are all treated with floating
    point precision, and as such, may not always yield the expected results.”
    The example provided above is classic case that demonstrates this issue.
    Surprisingly, it will print out: 0.30000000000000004 false A typical
    solution is to compare the absolute difference between two numbers with the
    special constant Number.EPSILON: function areTheNumbersAlmostEqual(num1,
    num2) { return Math.abs( num1 - num2 ) < Number.EPSILON; }
    console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3));
66. In what order will the numbers 1-4 be logged to the console when the code
    below is executed? Why? (function() { console.log(1);
    setTimeout(function(){console.log(2)}, 1000);
    setTimeout(function(){console.log(3)}, 0); console.log(4); })(); Answer The
    values will be logged in the following order: 1 4 3 2 Let’s first explain
    the parts of this that are presumably more obvious: 1 and 4 are displayed
    first since they are logged by simple calls to console.log() without any
    delay 2 is displayed after 3 because 2 is being logged after a delay of 1000
    msecs (i.e., 1 second) whereas 3 is being logged after a delay of 0 msecs.
    OK, fine. But if 3 is being logged after a delay of 0 msecs, doesn’t that
    mean that it is being logged right away? And, if so, shouldn’t it be logged
    before 4, since 4 is being logged by a later line of code? The answer has to
    do with properly understanding JavaScript events and timing. The browser has
    an event loop which checks the event queue and processes pending events. For
    example, if an event happens in the background (e.g., a script onload event)
    while the browser is busy (e.g., processing an onclick), the event gets
    appended to the queue. When the onclick handler is complete, the queue is
    checked and the event is then handled (e.g., the onload script is executed).
    Similarly, setTimeout() also puts execution of its referenced function into
    the event queue if the browser is busy. When a value of zero is passed as
    the second argument to setTimeout(), it attempts to execute the specified
    function “as soon as possible”. Specifically, execution of the function is
    placed on the event queue to occur on the next timer tick. Note, though,
    that this is not immediate; the function is not executed until the next
    tick. That’s why in the above example, the call to console.log(4) occurs
    before the call to console.log(3) (since the call to console.log(3) is
    invoked via setTimeout, so it is slightly delayed). 67.Write a simple
    function (less than 160 characters) that returns a boolean indicating
    whether or not a string is a palindrome. Answer The following one line
    function will return true if str is a palindrome; otherwise, it returns
    false. function isPalindrome(str) { str = str.replace(/\W/g,
    '').toLowerCase(); return (str == str.split('').reverse().join('')); } For
    example: console.log(isPalindrome("level")); // logs 'true'
    console.log(isPalindrome("levels")); // logs 'false'
    console.log(isPalindrome("A car, a man, a maraca")); // logs 'true' 68.Write
    a sum method which will work properly when invoked using either syntax
    below. console.log(sum(2,3)); // Outputs 5 console.log(sum(2)(3)); //
    Outputs 5 Hide answer There are (at least) two ways to do this: METHOD 1
    function sum(x) { if (arguments.length == 2) { return arguments[0] +
    arguments[1]; } else { return function(y) { return x + y; }; } } In
    JavaScript, functions provide access to an arguments object which provides
    access to the actual arguments passed to a function. This enables us to use
    the length property to determine at runtime the number of arguments passed
    to the function. If two arguments are passed, we simply add them together
    and return. Otherwise, we assume it was called in the form sum(2)(3), so we
    return an anonymous function that adds together the argument passed to sum()
    (in this case 2) and the argument passed to the anonymous function (in this
    case 3). METHOD 2 function sum(x, y) { if (y !== undefined) { return x + y;
    } else { return function(y) { return x + y; }; } } When a function is
    invoked, JavaScript does not require the number of arguments to match the
    number of arguments in the function definition. If the number of arguments
    passed exceeds the number of arguments in the function definition, the
    excess arguments will simply be ignored. On the other hand, if the number of
    arguments passed is less than the number of arguments in the function
    definition, the missing arguments will have a value of undefined when
    referenced within the function. So, in the above example, by simply checking
    if the 2nd argument is undefined, we can determine which way the function
    was invoked and proceed accordingly.

69.Consider the following code snippet: for (var i = 0; i < 5; i++) { var btn =
document.createElement('button');
btn.appendChild(document.createTextNode('Button ' + i));
btn.addEventListener('click', function(){ console.log(i); });
document.body.appendChild(btn); } (a) What gets logged to the console when the
user clicks on “Button 4” and why? (b) Provide one or more alternate
implementations that will work as expected. Answer (a) No matter what button the
user clicks the number 5 will always be logged to the console. This is because,
at the point that the onclick method is invoked (for any of the buttons), the
for loop has already completed and the variable i already has a value of 5.
(Bonus points for the interviewee if they know enough to talk about how
execution contexts, variable objects, activation objects, and the internal
“scope” property contribute to the closure behavior.) (b) The key to making this
work is to capture the value of i at each pass through the for loop by passing
it into a newly created function object. Here are four possible ways to
accomplish this: for (var i = 0; i < 5; i++) { var btn =
document.createElement('button');
btn.appendChild(document.createTextNode('Button ' + i));
btn.addEventListener('click', (function(i) { return function() { console.log(i);
}; })(i)); document.body.appendChild(btn); } Alternatively, you could wrap the
entire call to btn.addEventListener in the new anonymous function: for (var i =
0; i < 5; i++) { var btn = document.createElement('button');
btn.appendChild(document.createTextNode('Button ' + i)); (function (i) {
btn.addEventListener('click', function() { console.log(i); }); })(i);
document.body.appendChild(btn); } Or, we could replace the for loop with a call
to the array object’s native forEach method: ['a', 'b', 'c', 'd',
'e'].forEach(function (value, i) { var btn = document.createElement('button');
btn.appendChild(document.createTextNode('Button ' + i));
btn.addEventListener('click', function() { console.log(i); });
document.body.appendChild(btn); }); Lastly, the simplest solution, if you’re in
an ES6/ES2015 context, is to use let i instead of var i: for (let i = 0; i < 5;
i++) { var btn = document.createElement('button');
btn.appendChild(document.createTextNode('Button ' + i));
btn.addEventListener('click', function(){ console.log(i); });
document.body.appendChild(btn); } Assuming d is an “empty” object in scope, say:

var d = {}; 70. what is accomplished using the following code?

[ 'zebra', 'horse' ].forEach(function(k) { d[k] = undefined; }); Answer The
snippet of code shown above sets two properties on the object d. Ideally, any
lookup performed on a JavaScript object with an unset key evaluates to
undefined. But running this code marks those properties as “own properties” of
the object. This is a useful strategy for ensuring that an object has a given
set of properties. Passing this object to Object.keys will return an array with
those set keys as well (even if their values are undefined). 71.What will the
code below output to the console and why? var arr1 = "john".split(''); var arr2
= arr1.reverse(); var arr3 = "jones".split(''); arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1)); Hide
answer The logged output will be: "array 1: length=5 last=j,o,n,e,s" "array 2:
length=5 last=j,o,n,e,s" arr1 and arr2 are the same (i.e. ['n','h','o','j',
['j','o','n','e','s'] ]) after the above code is executed for the following
reasons: Calling an array object’s reverse() method doesn’t only return the
array in reverse order, it also reverses the order of the array itself (i.e., in
this case, arr1). The reverse() method returns a reference to the array itself
(i.e., in this case, arr1). As a result, arr2 is simply a reference to (rather
than a copy of) arr1. Therefore, when anything is done to arr2 (i.e., when we
invoke arr2.push(arr3);), arr1 will be affected as well since arr1 and arr2 are
simply references to the same object. And a couple of side points here that can
sometimes trip someone up in answering this question: Passing an array to the
push() method of another array pushes that entire array as a single element onto
the end of the array. As a result, the statement arr2.push(arr3); adds arr3 in
its entirety as a single element to the end of arr2 (i.e., it does not
concatenate the two arrays, that’s what the concat() method is for). Like
Python, JavaScript honors negative subscripts in calls to array methods like
slice() as a way of referencing elements at the end of the array; e.g., a
subscript of -1 indicates the last element in the array, and so on. 72.What will
the code below output to the console and why ? console.log(1 + "2" + "2");
console.log(1 + +"2" + "2"); console.log(1 + -"1" + "2"); console.log(+"1" +
"1" + "2"); console.log( "A" - "B" + "2"); console.log( "A" - "B" + 2); Answer
The above code will output the following to the console:

"122" "32" "02" "112" "NaN2" NaN Here’s why…

The fundamental issue here is that JavaScript (ECMAScript) is a loosely typed
language and it performs automatic type conversion on values to accommodate the
operation being performed. Let’s see how this plays out with each of the above
examples.

Example 1: 1 + "2" + "2" Outputs: "122" Explanation: The first operation to be
performed in 1 + "2". Since one of the operands ("2") is a string, JavaScript
assumes it needs to perform string concatenation and therefore converts the type
of 1 to "1", 1 + "2" yields "12". Then, "12" + "2" yields "122". Example 2: 1 +
+"2" + "2" Outputs: "32" Explanation: Based on order of operations, the first
operation to be performed is +"2" (the extra + before the first "2" is treated
as a unary operator). Thus, JavaScript converts the type of "2" to numeric and
then applies the unary + sign to it (i.e., treats it as a positive number). As a
result, the next operation is now 1 + 2 which of course yields 3. But then, we
have an operation between a number and a string (i.e., 3 and "2"), so once again
JavaScript converts the type of the numeric value to a string and performs
string concatenation, yielding "32". Example 3: 1 + -"1" + "2" Outputs: "02"
Explanation: The explanation here is identical to the prior example, except the
unary operator is - rather than +. So "1" becomes 1, which then becomes -1 when
the - is applied, which is then added to 1 yielding 0, which is then converted
to a string and concatenated with the final "2" operand, yielding "02". Example
4: +"1" + "1" + "2" Outputs: "112" Explanation: Although the first "1" operand
is typecast to a numeric value based on the unary + operator that precedes it,
it is then immediately converted back to a string when it is concatenated with
the second "1" operand, which is then concatenated with the final "2" operand,
yielding the string "112". Example 5: "A" - "B" + "2" Outputs: "NaN2"
Explanation: Since the - operator can not be applied to strings, and since
neither "A" nor "B" can be converted to numeric values, "A" - "B" yields NaN
which is then concatenated with the string "2" to yield “NaN2”. Example 6: "A" -
"B" + 2 Outputs: NaN Explanation: As exlained in the previous example, "A" - "B"
yields NaN. But any operator applied to NaN with any other numeric operand will
still yield NaN. 73.The following recursive code will cause a stack overflow if
the array list is too large. How can you fix this and still retain the recursive
pattern? var list = readHugeList(); var nextListItem = function() { var item =
list.pop(); if (item) { // process the list item... nextListItem(); } }; Answer
The potential stack overflow can be avoided by modifying the nextListItem
function as follows: var list = readHugeList(); var nextListItem = function() {
var item = list.pop(); if (item) { // process the list item... setTimeout(
nextListItem, 0); } }; The stack overflow is eliminated because the event loop
handles the recursion, not the call stack. When nextListItem runs, if item is
not null, the timeout function (nextListItem) is pushed to the event queue and
the function exits, thereby leaving the call stack clear. When the event queue
runs its timed-out event, the next item is processed and a timer is set to again
invoke nextListItem. Accordingly, the method is processed from start to finish
without a direct recursive call, so the call stack remains clear, regardless of
the number of iterations. 74.What is a “closure” in JavaScript? Provide an
example. Answer A closure is an inner function that has access to the variables
in the outer (enclosing) function’s scope chain. The closure has access to
variables in three scopes; specifically: (1) variable in its own scope, (2)
variables in the enclosing function’s scope, and (3) global variables. Here is
an example: var globalVar = "xyz"; (function outerFunc(outerArg) { var outerVar
= 'a';  
 (function innerFunc(innerArg) { var innerVar = 'b';

    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);

    })(456);

})(123); In the above example, variables from innerFunc, outerFunc, and the
global namespace are all in scope in the innerFunc. The above code will
therefore produce the following output:

outerArg = 123 innerArg = 456 outerVar = a innerVar = b globalVar = xyz 75.What
would the following lines of code output to the console? console.log("0 || 1 =
"+(0 || 1)); console.log("1 || 2 = "+(1 || 2)); console.log("0 && 1 = "+(0 &&
1)); console.log("1 && 2 = "+(1 && 2)); Explain your answer. Answer The code
will output the following four lines: 0 || 1 = 1 1 || 2 = 1 0 && 1 = 0 1 && 2 =
2 In JavaScript, both || and && are logical operators that return the first
fully-determined “logical value” when evaluated from left to right.

The or (||) operator. In an expression of the form X||Y, X is first evaluated
and interpreted as a boolean value. If this boolean value is true, then true (1)
is returned and Y is not evaluated, since the “or” condition has already been
satisfied. If this boolean value is “false”, though, we still don’t know if X||Y
is true or false until we evaluate Y, and interpret it as a boolean value as
well. Accordingly, 0 || 1 evaluates to true (1), as does 1 || 2. The and (&&)
operator. In an expression of the form X&&Y, X is first evaluated and
interpreted as a boolean value. If this boolean value is false, then false (0)
is returned and Y is not evaluated, since the “and” condition has already
failed. If this boolean value is “true”, though, we still don’t know if X&&Y is
true or false until we evaluate Y, and interpret it as a boolean value as well.
However, the interesting thing with the && operator is that when an expression
is evaluated as “true”, then the expression itself is returned. This is fine,
since it counts as “true” in logical expressions, but also can be used to return
that value when you care to do so. This explains why, somewhat surprisingly, 1
&& 2 returns 2 (whereas you might it expect it to return true or 1).

76.What will be the output when the following code is executed? Explain.
console.log(false == '0') console.log(false === '0') Answer The code will
output: true false In JavaScript, there are two sets of equality operators. The
triple-equal operator === behaves like any traditional equality operator would:
evaluates to true if the two expressions on either of its sides have the same
type and the same value. The double-equal operator, however, tries to coerce the
values before comparing them. It is therefore generally good practice to use the
=== rather than ==. The same holds true for !== vs !=.

77.What is the output out of the following code? Explain your answer ? var a={},
b={key:'b'}, c={key:'c'};

a[b]=123; a[c]=456; console.log(a[b]); Answer The output of this code will be
456 (not 123). The reason for this is as follows: When setting an object
property, JavaScript will implicitly stringify the parameter value. In this
case, since b and c are both objects, they will both be converted to "[object
Object]". As a result, a[b] anda[c] are both equivalent to a["[object Object]"]
and can be used interchangeably. Therefore, setting or referencing a[c] is
precisely the same as setting or referencing a[b].

78.What will the following code output to the console: ? console.log((function
f(n){return ((n > 1) ? n _ f(n-1) : n)})(10)); Explain your answer. Answer The
code will output the value of 10 factorial (i.e., 10!, or 3,628,800). Here’s
why: The named function f() calls itself recursively, until it gets down to
calling f(1) which simply returns 1. Here, therefore, is what this does: f(1):
returns n, which is 1 f(2): returns 2 _ f(1), which is 2 f(3): returns 3 _ f(2),
which is 6 f(4): returns 4 _ f(3), which is 24 f(5): returns 5 _ f(4), which is
120 f(6): returns 6 _ f(5), which is 720 f(7): returns 7 _ f(6), which is 5040
f(8): returns 8 _ f(7), which is 40320 f(9): returns 9 _ f(8), which is 362880
f(10): returns 10 _ f(9), which is 3628800 79.Consider the code snippet below.
What will the console output be and why?

(function(x) { return (function(y) { console.log(x); })(2) })(1); Answer The
output will be 1, even though the value of x is never set in the inner function.
Here’s why: As explained in our JavaScript Hiring Guide, a closure is a
function, along with all variables or functions that were in-scope at the time
that the closure was created. In JavaScript, a closure is implemented as an
“inner function”; i.e., a function defined within the body of another function.
An important feature of closures is that an inner function still has access to
the outer function’s variables. Therefore, in this example, since x is not
defined in the inner function, the scope of the outer function is searched for a
defined variable x, which is found to have a value of 1. 80.What will the
following code output to the console and why:? var hero = { \_name: 'John Doe',
getSecretIdentity: function (){ return this.\_name; } }; var stoleSecretIdentity
= hero.getSecretIdentity; console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity()); 80.What is the issue with this code and
how can it be fixed. Hide answer The code will output: undefined John Doe The
first console.log prints undefined because we are extracting the method from the
hero object, so stoleSecretIdentity() is being invoked in the global context
(i.e., the window object) where the \_name property does not exist.

One way to fix the stoleSecretIdentity() function is as follows: var
stoleSecretIdentity = hero.getSecretIdentity.bind(hero); 81. Create a function
that, given a DOM Element on the page, will visit the element itself and all of
its descendents (not just its immediate children). For each element visited, the
function should pass that element to a provided callback function. The arguments
to the function should be: a DOM element a callback function (that takes a DOM
element as its argument) Answer Visiting all elements in a tree (DOM) is a
classic Depth-First-Search algorithm application. Here’s an example solution:
function Traverse(p_element,p_callback) { p_callback(p_element); var list =
p_element.children; for (var i = 0; i < list.length; i++) {
Traverse(list[i],p_callback); // recursive call } } 82.Testing your this
knowledge in JavaScript: What is the output of the following code? var length =
10; function fn() { console.log(this.length); } var obj = { length: 5, method:
function(fn) { fn(); arguments[0](); } }; obj.method(fn, 1); Hide answer Output:
10 2 Why isn’t it 10 and 5? In the first place, as fn is passed as a parameter
to the function method, the scope (this) of the function fn is window. var
length = 10; is declared at the window level. It also can be accessed as
window.length or length or this.length (when this === window.) method is bound
to Object obj, and obj.method is called with parameters fn and 1. Though method
is accepting only one parameter, while invoking it has passed two parameters;
the first is a function callback and other is just a number. When fn() is called
inside method, which was passed the function as a parameter at the global level,
this.length will have access to var length = 10 (declared globally) not length =
5 as defined in Object obj. Now, we know that we can access any number of
arguments in a JavaScript function using the arguments[] array. Hence
arguments[0]() is nothing but calling fn(). Inside fn now, the scope of this
function becomes the arguments array, and logging the length of arguments[] will
return 2. Hence the output will be as above. 83.Consider the following code.
What will the output be, and why? (function () { try { throw new Error(); }
catch (x) { var x = 1, y = 2; console.log(x); } console.log(x); console.log(y);
})(); Answer 1 undefined 2 var statements are hoisted (without their value
initialization) to the top of the global or function scope it belongs to, even
when it’s inside a with or catch block. However, the error’s identifier is only
visible inside the catch block. It is equivalent to: (function () { var x, y; //
outer and hoisted try { throw new Error(); } catch (x /_ inner _/) { x = 1; //
inner x, not the outer one y = 2; // there is only one y, which is in the outer
scope console.log(x /_ inner _/); } console.log(x); console.log(y); })();
84.What will be the output of this code? var x = 21; var girl = function () {
console.log(x); var x = 20; }; girl (); Answer Neither 21, nor 20, the result is
undefined It’s because JavaScript initialization is not hoisted.

(Why doesn’t it show the global value of 21? The reason is that when the
function is executed, it checks that there’s a local x variable present but
doesn’t yet declare it, so it won’t look for global one.) for (let i = 0; i < 5;
i++) { setTimeout(function() { console.log(i); }, i \* 1000 ); } 85. What will
this code print? Answer It will print 0 1 2 3 4, because we use let instead of
var here. The variable i is only seen in the for loop’s block scope. 86.What do
the following lines output, and why? console.log(1 < 2 < 3); console.log(3 > 2 >
1); Hide answer The first statement returns true which is as expected. The
second returns false because of how the engine works regarding operator
associativity for < and >. It compares left to right, so 3 > 2 > 1 JavaScript
translates to true > 1. true has value 1, so it then compares 1 > 1, which is
false. 87.How do you add an element at the begining of an array? How do you add
one at the end? Answer var myArray = ['a', 'b', 'c', 'd']; myArray.push('end');
myArray.unshift('start'); console.log(myArray); // ["start", "a", "b", "c", "d",
"end"] With ES6, one can use the spread operator: myArray = ['start',
...myArray]; myArray = [...myArray, 'end']; Or, in short: myArray = ['start',
...myArray, 'end']; Imagine you have this code:

var a = [1, 2, 3]; a) Will this result in a crash? a[10] = 99; b) What will this
output? console.log(a[6]); Hide answer a) It will not crash. The JavaScript
engine will make array slots 3 through 9 be “empty slots.” b) Here, a[6] will
output undefined, but the slot still remains empty rather than filled with
undefined. This may be an important nuance in some cases. For example, when
using map(), empty slots will remain empty in map()’s output, but undefined
slots will be remapped using the function passed to it: var b = [undefined];
b[2] = 1; console.log(b); // (3) [undefined, empty × 1, 1] console.log(b.map(e
=> 7)); // (3) [7, empty × 1, 7] 88.What is the value of typeof undefined ==
typeof NULL? Answer The expression will be evaluated to true, since NULL will be
treated as any other undefined variable. Note: JavaScript is case-sensitive and
here we are using NULL instead of null. 89.What would following code return?
console.log(typeof typeof 1); Answer string typeof 1 will return "number" and
typeof "number" will return string. 90.What will be the output of the following
code: for (var i = 0; i < 5; i++) { setTimeout(function() { console.log(i); },
i \* 1000 ); } Explain your answer. How could the use of closures help here?

Answer The code sample shown will not display the values 0, 1, 2, 3, and 4 as
might be expected; rather, it will display 5, 5, 5, 5, and 5. The reason for
this is that each function executed within the loop will be executed after the
entire loop has completed and all will therefore reference the last value stored
in i, which was 5. Closures can be used to prevent this problem by creating a
unique scope for each iteration, storing each unique value of the variable
within its scope, as follows: for (var i = 0; i < 5; i++) { (function(x) {
setTimeout(function() { console.log(x); }, x _ 1000 ); })(i); } This will
produce the presumably desired result of logging 0, 1, 2, 3, and 4 to the
console. In an ES2015 context, you can simply use let instead of var in the
original code: for (let i = 0; i < 5; i++) { setTimeout(function() {
console.log(i); }, i _ 1000 ); } 91.What is NaN? What is its type? How can you
reliably test if a value is equal to NaN? Answer The NaN property represents a
value that is “not a number”. This special value results from an operation that
could not be performed either because one of the operands was non-numeric (e.g.,
"abc" / 4), or because the result of the operation is non-numeric. While this
seems straightforward enough, there are a couple of somewhat surprising
characteristics of NaN that can result in hair-pulling bugs if one is not aware
of them. For one thing, although NaN means “not a number”, its type is, believe
it or not, Number: console.log(typeof NaN === "number"); // logs "true"
Additionally, NaN compared to anything – even itself! – is false:
console.log(NaN === NaN); // logs "false" A semi-reliable way to test whether a
number is equal to NaN is with the built-in function isNaN(), but even using
isNaN() is an imperfect solution.

A better solution would either be to use value !== value, which would only
produce true if the value is equal to NaN. Also, ES6 offers a new Number.isNaN()
function, which is a different and more reliable than the old global isNaN()
function. 92.What will the following code output and why? var b = 1; function
outer(){ var b = 2 function inner(){ b++; var b = 3; console.log(b) } inner(); }
outer(); Hide answer Output to the console will be “3”. There are three closures
in the example, each with it’s own var b declaration. When a variable is invoked
closures will be checked in order from local to global until an instance is
found. Since the inner closure has a b variable of its own, that is what will be
output. Furthermore, due to hoisting the code in inner will be interpreted as
follows: function inner () { var b; // b is undefined b++; // b is NaN b = 3; //
b is 3 console.log(b); // output "3" } Discuss possible ways to write a function
isInteger(x) that determines if x is an integer. Answer This may sound trivial
and, in fact, it is trivial with ECMAscript 6 which introduces a new
Number.isInteger() function for precisely this purpose. However, prior to
ECMAScript 6, this is a bit more complicated, since no equivalent of the
Number.isInteger() method is provided. The issue is that, in the ECMAScript
specification, integers only exist conceptually; i.e., numeric values are always
stored as floating point values. With that in mind, the simplest and cleanest
pre-ECMAScript-6 solution (which is also sufficiently robust to return false
even if a non-numeric value such as a string or null is passed to the function)
would be the following use of the bitwise XOR operator: function isInteger(x) {
return (x ^ 0) === x; } The following solution would also work, although not as
elegant as the one above: function isInteger(x) { return (typeof x === 'number')
&& (x % 1 === 0); } The following function (or with Math.ceil() or Math.floor()
in place of Math.round()) might also seem useful, but the results are not
exactly the same as with the above two functions: function isInteger(x) { return
Math.round(x) === x; } The difference is, these Math-based solutions return true
for Infinity and -Infinity, whereas the others (and notably ES6’s
Number.isInteger()) return false. Another fairly common incorrect solution is
the following: function isInteger(x) { return parseInt(x, 10) === x; } While
this parseInt-based approach will work well for many values of x, once x becomes
quite large, it will fail to work properly. The problem is that parseInt()
coerces its first parameter to a string before parsing digits. Therefore, once
the number becomes sufficiently large, its string representation will be
presented in exponential form (e.g., 1e+21). Accordingly, parseInt() will then
try to parse 1e+21, but will stop parsing when it reaches the e character and
will therefore return a value of 1. Observe:

> String(1000000000000000000000) '1e+21' parseInt(1000000000000000000000, 10) 1
> parseInt(1000000000000000000000, 10) === 1000000000000000000000 false 93.How
> do you clone an object? Hide answer var obj = {a: 1 ,b: 2} var objclone =
> Object.assign({},obj); Now the value of objclone is {a: 1 ,b: 2} but points to
> a different object than obj. Note the potential pitfall, though:
> Object.assign() will just do a shallow copy, not a deep copy. This means that
> nested objects aren’t copied. They still refer to the same nested objects as
> the original: let obj = {

    a: 1,
    b: 2,
    c: {
        age: 30
    }

}; var objclone = Object.assign({},obj); console.log('objclone: ', objclone);
obj.c.age = 45; console.log('After Change - obj: ', obj); // 45 - This also
changes console.log('After Change - objclone: ', objclone); // 45
