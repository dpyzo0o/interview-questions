module.exports = function createStore(reducer, initialState, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer, initialState);
  }

  let state = initialState;
  let listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
  }

  function dispatch(action) {
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }

  function getState() {
    return state;
  }

  dispatch({ type: Symbol() });

  return {
    subscribe,
    dispatch,
    getState,
  };
};
