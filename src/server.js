import App from './components/App';
import { StaticRouter } from 'react-router-dom';
import configureStore from './redux/configureStore';
import express from 'express';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDom from 'react-dom/server';

const app = express();

app.use((req, res) => {
    const store = configureStore();
    const context = {};
    const componentHTML = ReactDom.renderToString(
        <Provider store={store}>
            <StaticRouter context={context}>
                <App />
            </StaticRouter>
        </Provider>
    );
    return res.end(renderHTML(componentHTML));
});

const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8050' : '/';

function renderHTML (componentHTML) {
    return `
    <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Tns mystery manager</title>
          <link rel="stylesheet" href="${assetUrl}/styles.css">
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
