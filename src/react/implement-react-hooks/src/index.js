import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// hooks 存放在这个数组, react 实际的实现采用单链表的形式
let memoizedState = [];
// 当前 hook 的下标
let cursor = 0;

function useState(initialValue) {
  memoizedState[cursor] = memoizedState[cursor] || initialValue;
  const currentCursor = cursor;

  function setState(newState) {
    memoizedState[currentCursor] =
      typeof newState === 'function'
        ? newState(memoizedState[currentCursor])
        : newState;
    render();
  }

  // 返回当前 state，并把 cursor 加 1
  return [memoizedState[cursor++], setState];
}

function useEffect(callback, depArray) {
  const hasNoDeps = !depArray;
  const deps = memoizedState[cursor];
  const hasChangedDeps = deps ? depArray.some((d, i) => d !== deps[i]) : true;

  if (hasNoDeps || hasChangedDeps) {
    callback();
    memoizedState[cursor] = depArray;
  }

  cursor++;
}

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('dpyzo0o');

  useEffect(() => {
    console.log(count);
  }, [count]);

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(c => c + 2)}>click</button>
      <input value={name} onChange={e => setName(e.target.value)} />
    </div>
  );
}

function render() {
  cursor = 0;
  ReactDOM.render(<App />, document.getElementById('root'));
}

render();
