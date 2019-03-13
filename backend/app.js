const express = require('express');

const app = express();

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
