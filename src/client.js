import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

const store = configureStore();

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('react-view'));
