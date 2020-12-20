const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const post = require('../models/post')


const db = "mongodb+srv://iiiuuu890:iiiuuu890@cluster0.ybyfp.mongodb.net/postnow?retryWrites=true&w=majority";

mongoose.Promise = global.Promise;

mongoose.connect(db, function (err) {
  if (err) {
    console.log('COnnection Error')
  }
});

router.get('/posts', function (req, res) {
  console.log('gettin posts');
  post.find({})
    .exec(function (err, posts) {
      if (err) console.log("error gettin posts")
      else {
        res.json(posts);
      }
    })
})

router.get('/details/:id', function (req, res) {
  console.log('gettin post');
  post.findById(req.params.id)
    .exec(function (err, post) {
      if (err) console.log("error gettin posts")
      else {
        res.json(post);
      }
    })
})

router.post('/post', function (req, res) {
  console.log('addin post');
  var newPost = new post();
  newPost.title = req.body.title;
  newPost.url = req.body.url;
  newPost.description = req.body.description;
  newPost.save(function (err, addedPost) {
    if (err) {
      console.log('Error while adding post')
    }
    else {
      res.json(addedPost)
    }
  })

})


module.exports = router;
