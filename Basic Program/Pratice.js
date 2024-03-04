const sum = function (a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
};
// const c1 = sum(6);
// const c2 = c1(6);
// const ans = c2(6);
// console.log(ans);

const ans = sum(6)(6)(6);
console.log(ans);

const sum1 = (a) => (b) => (c) => a + b + c;
const ans1 = sum1(6)(6)(6);
console.log(ans1);
