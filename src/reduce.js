Array.prototype.myReduce = function (callback, initialValue) {
  const array = this;
  const hasInitialValue = initialValue == null;
  let res = hasInitialValue ? initialValue : array[0];

  for (let i = hasInitialValue ? 0 : 1; i < array.length; i++) {
    res = callback(res, array[i], i, array);
  }

  return res;
};

function test() {
  const nums = [1, 2, 3, 4, 5];

  const sum = nums.myReduce((acc, cur, index, source) => {
    console.log(acc, cur, index, source);
    return acc + cur;
  });

  console.log(sum);
}

test();
