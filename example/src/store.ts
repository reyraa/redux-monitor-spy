import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import spy from '../../../redux-monitor-spy/src';

const counterReducer = (state = { value: 0 }, action:any) => {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/reset':
      return { value: 0}
    default:
      return state
  }
};

const middleWares = [spy];
const App = combineReducers({ counterReducer });
const store = createStore(App, compose(applyMiddleware(...middleWares)));
export default store;
