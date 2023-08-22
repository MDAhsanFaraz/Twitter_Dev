const express = require('express');
const connect  = require('./config/database');
const app = express();

const TweetRepository=require('./repository/tweet-repository');
const Comment=require('./models/comment');

app.listen(3000, async () => {
          console.log('Server started at PORT:3000');
          await connect();
          console.log('Mongo db connected');
          
          const tweetrepo=new TweetRepository();
          const tweet=await tweetrepo.getWithComments('64e5269fea00535e783f8c77');
          console.log(tweet);

}) 