let entry = {
  'a.b.c.dd': 'abcdd',
  'a.d.xx': 'adxx',
  'a.e': 'ae',
};

// 要求转换成如下对象
let output = {
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

function buildObj(entry) {
  const keys = Object.keys(entry);
  const res = {};

  for (let key of keys) {
    const keyArr = key.split('.');

    keyArr.reduce((acc, cur, index, array) => {
      if (index === array.length - 1) {
        acc[cur] = entry[key];
        return;
      }

      acc[cur] = acc[cur] || {};
      return acc[cur];
    }, res);
  }

  return res;
}

console.log(JSON.stringify(buildObj(entry), null, 2));
