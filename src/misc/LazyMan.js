class LazyManClass {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    console.log(`Hi I am ${name}`);
    setTimeout(() => this.next(), 0);
  }

  eat(food) {
    const fn = () => {
      console.log(`I am eating ${food}`);
      this.next();
    };
    this.tasks.push(fn);
    return this;
  }

  sleep(secs) {
    const fn = () => {
      setTimeout(() => {
        console.log(`等待了${secs}秒...`);
        this.next();
      }, secs * 1000);
    };
    this.tasks.push(fn);
    return this;
  }

  sleepFirst(secs) {
    const fn = () => {
      setTimeout(() => {
        console.log(`等待了${secs}秒...`);
        this.next();
      }, secs * 1000);
    };
    this.tasks.unshift(fn);
    return this;
  }

  next() {
    const fn = this.tasks.shift();
    fn && fn();
  }
}

function LazyMan(name) {
  return new LazyManClass(name);
}

// LazyMan('Tony');
// Hi I am Tony

// LazyMan('Tony').sleep(5).eat('lunch');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch

// LazyMan('Tony').eat('lunch').sleep(5).eat('dinner');
// Hi I am Tony
// I am eating lunch
// 等待了5秒...
// I am eating diner

LazyMan('Tony')
  .eat('lunch')
  .eat('dinner')
  .sleepFirst(5)
  .sleep(5)
  .eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了5秒...
// I am eating junk food
