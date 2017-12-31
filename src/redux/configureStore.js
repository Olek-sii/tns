import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/index';
import thunk from 'redux-thunk';

export default function (initialState = {}) {
    const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        // module.hot.accept();
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers/index').default;
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}
