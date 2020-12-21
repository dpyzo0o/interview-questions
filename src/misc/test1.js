// 修改使得输出 0 - 99
function print(n) {
  setTimeout(() => {
    console.log(n);
  }, Math.floor(Math.random() * 1000));
}

for (var i = 0; i < 100; i++) {
  printSolution2(i);
}

function printSolution1(n) {
  setTimeout(
    () => {
      console.log(n);
    },
    0,
    Math.floor(Math.random() * 1000)
  );
}

function printSolution2(n) {
  setTimeout(
    (() => {
      console.log(n);
      return () => {};
    })(),
    Math.floor(Math.random() * 1000)
  );
}
