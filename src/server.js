import { getHeaders, initialize } from 'redux-oauth';
import { apiUrl} from './url';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { StaticRouter } from 'react-router-dom';
import configureStore from './redux/configureStore';
import cookieParser from 'cookie-parser';
import express from 'express';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDom from 'react-dom/server';

const app = express();
app.use(cookieParser());

app.use((req, res) => {
    if (req.url === '/favicon.ico') {
        res.writeHead(200, {'Content-Type': 'image/x-icon'} );
        return res.end();
    }

    const store = configureStore();
    return store.dispatch(initialize({
        backend: {
            apiUrl: apiUrl,
            authProviderPaths: {
                google: '/auth/google_oauth2'
            },
            signOutPath: null
        },
        cookies: req.cookies,
        currentLocation: req.url,
    })).then(() => {
            const context = {};
            const componentHTML = ReactDom.renderToString(
                <AppContainer>
                    <Provider store={store}>
                        <StaticRouter context={context}>
                            <App/>
                        </StaticRouter>
                    </Provider>
                </AppContainer>
            );
            const state = store.getState();

            res.cookie('authHeaders', JSON.stringify(getHeaders(store.getState())), {maxAge: Date.now() + 14 * 24 * 3600 * 1000});

            return res.end(renderHTML(componentHTML, state));
        });
});

function renderHTML (componentHTML, initialState) {
    const staticUrl = 'http://localhost:8050';
    const bundle = `${staticUrl}/static/build/bundle.js`;
    const styles = `${staticUrl}/static/build/styles.css`;
    return `
    <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Tns mystery manager</title>
          <link rel="stylesheet" href="${styles}">
          <script type="application/javascript">
            window.REDUX_INITIAL_STATE = ${JSON.stringify(initialState)};
          </script>
      </head>
      <body>
        <div id="react-view">${componentHTML}</div>
        <script type="application/javascript" src="${bundle}"></script>
      </body>
    </html>
  `;
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on: ${PORT}`);
});
