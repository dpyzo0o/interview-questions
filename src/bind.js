Function.prototype.myBind = function (context, ...bindArgs) {
  if (typeof this !== 'function') {
    throw new Error(
      'Function.prototype.bind - what is trying to be bound is not callable'
    );
  }

  let self = this;

  return function (...args) {
    let fullArgs = [...bindArgs, ...args];
    return self.call(context, ...fullArgs);
  };
};

function test() {
  let foo = {
    value: 1,
  };

  function bar(name, age) {
    console.log(name, age);
    console.log(this.value);
  }

  // 返回了一个函数
  let bindFoo = bar.myBind(foo, 'yang');

  bindFoo(26); // 1
}

test();
