import React from 'react';
import Router from './router/router';
import { Provider } from 'react-redux';
import { store } from './data/reducers/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router/>
      </div>
    </Provider>
  );
}

export default App;
