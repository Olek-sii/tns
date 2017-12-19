import { getHeaders, initialize } from 'redux-oauth';
import App from './components/App';
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
    const store = configureStore();
    return store.dispatch(initialize({
        backend: {
            apiUrl: 'http://a4754e93.ngrok.io',
            authProviderPaths: {
                google: '/auth/google_oauth2'
            },
            signOutPath: null
        },
        cookies: req.cookies,
        currentLocation: req.url,
    })).then(() => {
            // if (redirectLocation) { // Если необходимо сделать redirect
            //     return res.redirect(301, redirectLocation.pathname + redirectLocation.search);
            // }
            //
            // if (error) { // Произошла ошибка любого рода
            //     return res.status(500).send(error.message);
            // }
            //
            // if (!renderProps) { // мы не определили путь, который бы подошел для URL
            //     return res.status(404).send('Not found');
            // }
            const context = {};
            const componentHTML = ReactDom.renderToString(
                <Provider store={store}>
                    <StaticRouter context={context}>
                        <App/>
                    </StaticRouter>
                </Provider>
            );
            const state = store.getState();

            res.cookie('authHeaders', JSON.stringify(getHeaders(store.getState())), {maxAge: Date.now() + 14 * 24 * 3600 * 1000});
            return res.end(renderHTML(componentHTML, state));
        });
});

const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8050' : '/';

function renderHTML (componentHTML, initialState) {
    return `
    <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Tns mystery manager</title>
          <link rel="stylesheet" href="${assetUrl}/styles.css">
          <script type="application/javascript">
            window.REDUX_INITIAL_STATE = ${JSON.stringify(initialState)};
          </script>
      </head>
      <body>
        <div id="react-view">${componentHTML}</div>
        <script type="application/javascript" src="${assetUrl}/common.bundle.js"></script>
        <script type="application/javascript" src="${assetUrl}/main.bundle.js"></script>
      </body>
    </html>
  `;
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on: ${PORT}`);
});
