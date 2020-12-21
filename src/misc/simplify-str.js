// 输入 '1, 2, 3, 5, 7, 8, 10',
// 输出 '1~3, 5, 7~8, 10'

function simplifyStr(input) {
  const nums = input.split(',').map(x => parseInt(x));
  const res = [];
  let temp = [];

  for (let i = 0; i < nums.length; i++) {
    temp.push(nums[i]);

    if (nums[i] + 1 === nums[i + 1]) {
      continue;
    }

    if (temp.length > 1) {
      res.push(temp[0] + '~' + temp[temp.length - 1]);
    } else {
      res.push(temp[0]);
    }
    temp = [];
  }

  return res.join(',');
}

console.log(simplifyStr('1,2,3,4,5,7,8,10,11'));
