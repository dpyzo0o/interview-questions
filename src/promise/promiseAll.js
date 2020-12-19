function PromiseAll(promises) {
  let results = [];
  let completed = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((value, index) => {
      Promise.resolve(value)
        .then(result => {
          results[index] = result;
          completed += 1;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(err => reject(err));
    });
  });
}
