class Scheduler {
  constructor(count) {
    this.count = count;
    this.tasks = [];
  }

  add(task) {
    if (this.count) {
      return this.schedule(task);
    }

    return new Promise(resolve => this.tasks.push(resolve)).then(() =>
      this.schedule(task)
    );
  }

  schedule(task) {
    this.count--;
    return task().then(() => {
      this.count++;

      if (this.tasks.length > 0) {
        this.tasks.shift()();
      }
    });
  }
}

// Usage
const timeout = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });
const scheduler = new Scheduler(2);
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order));
};

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');
// output: 2 3 1 4
// 一开始，1、2两个任务进入队列
// 500ms时，2完成，输出2，任务3进队
// 800ms时，3完成，输出3，任务4进队
// 1000ms时，1完成，输出1
// 1200ms时，4完成，输出4
