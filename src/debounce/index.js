function debounce(fn, wait, immediate = false) {
  let timer = null;

  function debounced() {
    let args = arguments;
    let context = this;

    if (timer) {
      clearTimeout(timer);
    }

    if (immediate) {
      if (!timer) {
        fn.apply(context, args);
      }
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, wait);
    } else {
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, wait);
    }
  }

  debounced.cancel = function () {
    clearTimeout(timer);
    timer = null;
  };

  return debounced;
}

function main() {
  let count = 1;
  let container = document.getElementById('container');

  function getUserAction(e) {
    console.log(this, e);
    container.innerHTML = count++;
  }

  let debounced = debounce(getUserAction, 10000, true);

  container.onmousemove = debounced;
  document.getElementById('cancel').onclick = debounced.cancel;
}

main();
