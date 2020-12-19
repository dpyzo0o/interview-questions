function myInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left);
  let prototype = right.prototype;

  if (typeof left !== 'object' || left === null) {
    return false;
  }

  while (true) {
    if (proto === null) {
      return false;
    }

    if (proto === prototype) {
      return true;
    }

    proto = Object.getPrototypeOf(proto);
  }
}

function test() {
  console.log(myInstanceof('111', String)); //false
  console.log(myInstanceof(new String('111'), String)); //true
}

test();
