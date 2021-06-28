import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Interval from './interval';
import store from './store';

const App = () => (
  <main>
    <Provider store={store}>
      <Interval />
    </Provider>
  </main>
);

const rootElement = document.getElementById('app');
ReactDOM.render(<App />, rootElement);


