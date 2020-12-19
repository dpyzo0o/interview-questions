function compose(funcs) {
  if (funcs.length === 0) {
    return args => args;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

const a = name => `a -> ${name}`;
const b = name => `b -> ${name}`;
const c = name => `c -> ${name}`;

const fn = compose([a, b, c]);

console.log(fn('yang'));
