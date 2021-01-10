function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

module.exports = function applyMiddleware(...middlewares) {
  return createStore => (...args) => {
    const store = createStore(...args);

    // 只暴露 getState 和 dispatch 两个方法给 enhance
    const middlewareAPI = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args),
    };

    const chain = middlewares.map(middleware => middleware(middlewareAPI));

    dispatch = compose(...chain)(store.dispatch);

    return {
      ...store,
      dispatch,
    };
  };
};
