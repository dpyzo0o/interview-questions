const createStore = require('./createStore');
const combineReducers = require('./combineReducers');
const applyMiddleware = require('./applyMiddleware');

let initialCounterState = {
  count: 0,
};

function counterReducer(state = initialCounterState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}

let initialInfoState = {
  name: 'dpyzo0o',
  hobby: ['football', 'basketball'],
};

function infoReducer(state = initialInfoState, action) {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name,
      };
    case 'SET_HOBBY':
      return {
        ...state,
        hobby: action.hobby,
      };
    default:
      return state;
  }
}

const loggerMiddleware = store => next => action => {
  console.log('this state', store.getState());
  console.log('action', action);
  next(action);
  console.log('next state', store.getState());
};

const timeMiddleware = store => next => action => {
  console.log('time', new Date().getTime());
  next(action);
};

function test() {
  const reducer = combineReducers({
    counter: counterReducer,
    info: infoReducer,
  });

  const store = createStore(
    reducer,
    {},
    applyMiddleware(timeMiddleware, loggerMiddleware)
  );

  console.dir(store.getState());

  store.subscribe(() => {
    let state = store.getState();
    console.log('state', state);
  });

  store.dispatch({
    type: 'INCREMENT',
  });

  store.dispatch({
    type: 'DECREMENT',
  });

  store.dispatch({
    type: 'SET_NAME',
    name: 'yang',
  });
}

test();
