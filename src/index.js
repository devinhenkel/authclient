import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import thunk from 'redux-thunk';

import App from './components/app';
import Login from './components/auth/login';
import Feature from './components/feature';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter history={browserHistory}>
      <div>
        <Route path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/feature" component={Feature} />
      </div>
    </BrowserRouter>
    
  </Provider>
  , document.querySelector('.container'));
