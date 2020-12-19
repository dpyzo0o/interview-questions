Function.prototype.myCall = function (context, ...rest) {
  context = context || window;
  context.fn = this;

  const result = context.fn(...rest);
  delete context.fn;

  return result;
};

function test() {
  let foo = {
    value: 1,
  };

  function bar(name, age) {
    console.log(name, age);
    console.log(this.value);
  }

  bar.myCall(foo, 'yang', 26);
}

test();
