// 原始 list 如下
let list = [
  { id: 1, name: '部门A', parentId: 0 },
  { id: 2, name: '部门B', parentId: 0 },
  { id: 3, name: '部门C', parentId: 1 },
  { id: 4, name: '部门D', parentId: 1 },
  { id: 5, name: '部门E', parentId: 2 },
  { id: 6, name: '部门F', parentId: 3 },
  { id: 7, name: '部门G', parentId: 2 },
  { id: 8, name: '部门H', parentId: 4 },
];

// 转换后的结果如下
let result = [
  {
    id: 1,
    name: '部门A',
    parentId: 0,
    children: [
      {
        id: 3,
        name: '部门C',
        parentId: 1,
        children: [
          {
            id: 6,
            name: '部门F',
            parentId: 3,
          },
        ],
      },
      {
        id: 4,
        name: '部门D',
        parentId: 1,
        children: [
          {
            id: 8,
            name: '部门H',
            parentId: 4,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: '部门B',
    parentId: 0,
    children: [
      {
        id: 5,
        name: '部门E',
        parentId: 2,
      },
      {
        id: 7,
        name: '部门G',
        parentId: 2,
      },
    ],
  },
];

function convert(list) {
  const res = [];
  const map = new Map();

  list.reduce((acc, cur) => {
    acc.set(cur.id, cur);
    return map;
  }, map);

  for (let i = 0; i < list.length; i++) {
    let item = list[i];

    if (item.parentId === 0) {
      res.push(item);
      continue;
    }

    let parent = map.get(item.parentId);
    parent.children = parent.children || [];
    parent.children.push(item);
  }

  return res;
}

console.log(JSON.stringify(convert(list)) === JSON.stringify(result));
