const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post')

const app = express();

mongoose.connect('mongodb+srv://sakurahidemaru:sakurahidemaruisogichan@ogy-cluster-5kzzb.mongodb.net/test?retryWrites=true')
  .then(() => {
    console.log('MongoDB connection successful');
  })
  .catch(() => {
    console.log('MongoDB connection failed');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  console.log(post);
  res.status(201).json({
    message: 'post added successfully',
  });
})

app.get('/api/posts', (req, res, next) => {
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
