Function.prototype.myApply = function (context, arr = []) {
  context = context || window;
  context.fn = this;

  const result = context.fn(...arr);
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

  bar.myApply(foo, ['yang', 26]);
}

test();
