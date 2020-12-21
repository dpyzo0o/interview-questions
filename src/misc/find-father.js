// 实现一个函数 fn, 找出指定 id 的所有父级 id
const data = [
  {
    id: '1',
    children: [
      {
        id: '11',
        children: [
          {
            id: '111',
          },
          {
            id: '112',
            children: [
              {
                id: '1121',
              },
              {
                id: '1122',
              },
            ],
          },
        ],
      },
      {
        id: '12',
        children: [
          {
            id: '121',
          },
          {
            id: '122',
          },
          {
            id: '123',
          },
        ],
      },
    ],
  },
];

function dfs1(id, data) {
  const stack = [...data];

  while (stack.length) {
    let current = stack.pop();

    if (current.id === id) {
      return current;
    }

    if (current.children) {
      stack.push(
        ...current.children.map(x => ({
          ...x,
          path: (current.path || current.id) + '-' + x.id,
        }))
      );
    }
  }
}

function dfs2(id, data) {
  let res = [];

  function dfsFn(list, ids) {
    for (let item of list) {
      if (item.id === id) {
        res = [...ids, item.id];
        return;
      }

      if (item.children) {
        dfsFn(item.children, [...ids, item.id]);
      }
    }
  }

  dfsFn(data, res);
  return res;
}

function bfs(id, data) {
  const queue = [...data];

  while (queue.length) {
    let current = queue.shift();

    if (current.id === id) {
      return current;
    }

    if (current.children) {
      queue.push(
        ...current.children.map(x => ({
          ...x,
          path: (current.path || current.id) + '-' + x.id,
        }))
      );
    }
  }
}

console.log(bfs('112', data).path);
