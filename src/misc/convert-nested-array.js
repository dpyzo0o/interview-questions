// 将 a 转换为 b
const a = [1, [2, [3, [4, null]]]];
const b = [4, [3, [2, [1, null]]]];

function transform(input) {
  let res = [input[0], null];
  let queue = [input[1]];

  while (queue.length) {
    let current = queue.shift();

    if (current === null) {
      break;
    }

    if (typeof current === 'number') {
      res = [current, res];
    } else {
      queue.push(...current);
    }
  }

  return res;
}

console.log(JSON.stringify(transform(a)));
