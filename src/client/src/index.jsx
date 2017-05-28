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

// Misc dependencies
import createHistory from 'history/createBrowserHistory';

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
});

const store = createStore(
  combineWithOwnReducers(),
  composeWithDevTools(
    applyMiddleware(thunk, promiseMiddleware(), routerMiddleware(history))
  )
);

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
