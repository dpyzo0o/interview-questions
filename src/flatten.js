// 递归
function flatten1(arr, depth = Infinity) {
  return arr.reduce((acc, cur) => {
    if (Array.isArray(cur) && depth > 0) {
      return [...acc, ...flatten1(cur, depth - 1)];
    } else {
      return [...acc, cur];
    }
  }, []);
}

// 迭代
function flatten2(arr, depth = Infinity) {
  while (arr.some(a => Array.isArray(a)) && depth > 0) {
    arr = [].concat(...arr);
    depth--;
  }
  return arr;
}

function test() {
  const arr = [1, '2', [3, [4, 5]]];
  console.log(flatten1(arr, 1));
  console.log(flatten2(arr, 2));
}

test();
