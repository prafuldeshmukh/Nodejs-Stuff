function add(x) {
  return function (y) {
    return x + y;
  };
}
console.log(add(3)(5));

/*
One advantage is that it allows us to create specialized functions from a more generic one. 
We can create a reusable addOne function by partially applying the add function:

*/
const addOne = add(1);
console.log(addOne(5));
console.log(addOne(6));
console.log(addOne(10));

/*
   Here, addOne is a new function derived from add that always adds 1 to its argument. We can reuse this function throughout our codebase without duplicating the logic.
*/
