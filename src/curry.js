function curry1(fn) {
  function curried(...args) {
    if (args.length === fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...moreArgs) {
        return curried.apply(this, [...args, ...moreArgs]);
      };
    }
  }

  return curried;
}

function curry2(fn, ...args) {
  function curried() {
    const argList = [...args, ...arguments];
    if (argList.length === fn.length) {
      return fn.call(this, ...argList);
    } else {
      return curry2(fn, ...argList);
    }
  }

  return curried;
}

function sum(a, b, c) {
  return a + b + c;
}

const cSum = curry2(sum);

console.log(cSum(1, 2, 3));
console.log(cSum(1, 2)(3));
console.log(cSum(1)(2)(3));
