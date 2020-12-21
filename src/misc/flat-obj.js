let entry = {
  a: {
    b: {
      c: {
        dd: 'abcdd',
      },
    },
    d: {
      xx: 'adxx',
    },
    e: 'ae',
  },
};

// 要求转换成如下对象
let output = {
  'a.b.c.dd': 'abcdd',
  'a.d.xx': 'adxx',
  'a.e': 'ae',
};

function recursion(entry, parentKey, res = {}) {
  for (let key in entry) {
    let currentKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof entry[key] === 'object') {
      recursion(entry[key], currentKey, res);
    } else {
      res[currentKey] = entry[key];
    }
  }

  return res;
}

function dfs(entry) {
  const stack = [...Object.entries(entry)];
  const res = {};

  while (stack.length) {
    let [key, value] = stack.pop();

    if (typeof value === 'object') {
      for (let [k, v] of Object.entries(value)) {
        stack.push([`${key}.${k}`, v]);
      }
    } else {
      res[key] = value;
    }
  }

  return res;
}

function bfs(entry) {
  const queue = [...Object.entries(entry)];
  const res = {};

  while (queue.length) {
    let [key, value] = queue.shift();

    if (typeof value === 'object') {
      for (let [k, v] of Object.entries(value)) {
        queue.push([`${key}.${k}`, v]);
      }
    } else {
      res[key] = value;
    }
  }

  return res;
}

console.log(dfs(entry));
