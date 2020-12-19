function getType(target) {
  return Object.prototype.toString.call(target).slice(8, -1);
}

function deepClone(target, map = new WeakMap()) {
  // 基本数据类型
  if (typeof target !== 'object' || target == null) {
    return target;
  }

  const type = getType(target);

  let cloned;

  if (map.get(target)) {
    return map.get(target);
  }

  switch (type) {
    case 'Set':
      cloned = new Set();
      map.set(target, cloned);
      target.forEach(val => {
        cloned.add(deepClone(val, map));
      });
      break;

    case 'Map':
      cloned = new Map();
      map.set(target, cloned);
      for (let [key, value] of target) {
        cloned.set(key, deepClone(value, map));
      }
      break;

    case 'Array':
      cloned = new Array();
      map.set(target, cloned);
      for (let key in target) {
        cloned[key] = deepClone(target[key], map);
      }
      break;

    case 'Object':
      cloned = new Object();
      map.set(target, cloned);
      for (let key in target) {
        cloned[key] = deepClone(target[key], map);
      }
      break;

    default:
      const cFn = target.constructor;
      cloned = new cFn(target);
      break;
  }

  return cloned;
}

function test() {
  const map = new Map();
  map.set('key', 'value');

  const set = new Set();
  set.add('value1');
  set.add('value2');

  const target = {
    field1: 1,
    field2: undefined,
    field3: {
      child: 'child',
    },
    field4: [2, 4, 8],
    empty: null,
    map,
    set,
    bool: new Boolean(true),
    num: new Number(2),
    str: new String(2),
    date: new Date(),
    reg: /\d+/,
    error: new Error(),
    func1: () => {
      console.log('hello friend!');
    },
    func2: function (a, b) {
      return a + b;
    },
  };

  const result = deepClone(target);
  console.log(result);
  console.log(result.field3 === target.field3);
  console.log(result.field4 === target.field4);
  console.log(result.map === target.map);
  console.log(result.num === target.num);
  console.log(result.reg === target.reg);
}

test();
