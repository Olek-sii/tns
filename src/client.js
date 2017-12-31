import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

const initialState = window.REDUX_INITIAL_STATE || {};

const store = configureStore(initialState);

ReactDOM.hydrate(
    <AppContainer>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </AppContainer>,
    document.getElementById('react-view')
);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept();
}
