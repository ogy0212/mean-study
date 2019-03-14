const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.use('/api/posts', (req, res, next) => {
  const posts = [{
    id: 'aseodfij',
    title: '1 server post title',
    content: '1 content from server'
  }, {
    id: 'asdfwer',
    title: '2 server post title',
    content: '2 content from server'
  }];
  res.status(200).json({
    message: 'it is response!',
    posts: posts
  });
});

module.exports = app;
