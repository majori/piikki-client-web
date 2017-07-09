// @flow
// React related
import React from 'react';
import * as ReactDOM from 'react-dom';

// Redux related
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { combineForms } from 'react-redux-form';

// Misc dependencies
import createHistory from 'history/createBrowserHistory';
import { initializeSocket } from './services/socket';

// Own reducers
import reducers from './reducers/index';

// Styles
import './main.scss';

// Components
import App from './components/layout/App';

const history = createHistory();

const combineWithOwnReducers = () => combineReducers({
  ...reducers,
  routing: routerReducer,
  models: combineForms({

  }, 'models'),
});

const store = createStore(
  combineWithOwnReducers(),
  composeWithDevTools(
    applyMiddleware(thunk, promiseMiddleware(), routerMiddleware(history))
  )
);

initializeSocket(store);

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Component />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('app-container')
  );
};

if (module.hot) {
  module.hot.accept('./components/layout/App', () => render(App));

  module.hot.accept('./reducers/index', () => {
    store.replaceReducer(combineWithOwnReducers());
  });
}

render(App);
