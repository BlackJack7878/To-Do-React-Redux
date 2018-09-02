import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './Store/reducers';
import List from './Components/List/List';
import './index.css';

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<List />
	</Provider>
, document.getElementById('root'));