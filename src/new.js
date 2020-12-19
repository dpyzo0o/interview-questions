function MyNew(fn, ...params) {
  const obj = {};

  obj.__proto__ = fn.prototype;

  const res = fn.call(obj, ...params);

  return typeof res === 'object' ? res : obj;
}

function test() {
  function Otaku(name, age) {
    this.name = name;
    this.age = age;
    this.habit = 'Games';
  }

  Otaku.prototype.strength = 60;

  Otaku.prototype.sayYourName = function () {
    console.log('I am ' + this.name);
  };

  // const person = new Otaku('Kevin', '18');
  const person = MyNew(Otaku, 'Kevin', '18');

  console.log(person.name); // Kevin
  console.log(person.habit); // Games
  console.log(person.strength); // 60

  person.sayYourName(); // I am Kevin
}

test();
