import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import Home from './containers/HomeContainer';
import createLogger from 'redux-logger';
import * as SDKInitializer from './libs/SDKInitializer';

const createStoreWithMiddleware = applyMiddleware(createLogger)(createStore);

const App = () =>
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Home />
	</Provider>;

ReactDOM.render(<App />, document.querySelector('#app'));

SDKInitializer.initSDKs();