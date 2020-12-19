function throttle(fn, wait) {
  let timer = null;
  let previous = 0;
  let context;
  let args;

  function later() {
    previous = new Date().getTime();
    timer = null;
    fn.apply(context, args);
  }

  function throttled() {
    let now = new Date().getTime();
    let remaining = wait - (now - previous);

    context = this;
    args = arguments;

    if (remaining <= 0 || remaining >= wait) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      previous = now;
      fn.apply(context, args);
    } else if (!timer) {
      timer = setTimeout(later, remaining);
    }
  }

  return throttled;
}

function main() {
  let count = 1;
  let container = document.getElementById('container');

  function getUserAction(e) {
    console.log(this, e);
    container.innerHTML = count++;
  }

  let throttled = throttle(getUserAction, 3000);

  container.onmousemove = throttled;
}

main();
