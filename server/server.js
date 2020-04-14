/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import path from 'path';
import fs from 'fs';

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Home from '../src/index';

const PORT = 8080;
const app = express();

const router = express.Router();

const serverRenderedContent = (req, res, next) => {
  fs.readFile(path.resolve('./dist/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred');
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<Home />)}</div>`,
      ),
    );
  });
};
router.use('^/$', serverRenderedContent);

router.use(
  express.static(path.resolve(__dirname, '..', 'dist'), { maxAge: '30d' }),
);

app.use(router);

app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`);
});
