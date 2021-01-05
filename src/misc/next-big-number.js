// 输出给定数字下一个比它大的数字，比如输入1234，输出1243，比如1243，输出1324

function findNextBigNumber(num) {
  const nums = num
    .toString()
    .split('')
    .map(n => parseInt(n));

  let cursor;
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i - 1] < nums[i]) {
      cursor = i - 1;
      break;
    }
  }

  for (let i = cursor + 1; i < nums.length; i++) {
    if (nums[i] > nums[cursor]) {
      if (i === nums.length - 1 || nums[i + 1] < nums[cursor]) {
        let temp = nums.splice(cursor, i - cursor);
        if (typeof temp === 'number') {
          temp = [temp];
        }
        nums.push(...temp);
        break;
      }
    }
  }

  return nums.join('');
}

console.log(findNextBigNumber(1234));
