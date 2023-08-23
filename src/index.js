const express = require('express');
const connect  = require('./config/database');
const app = express();

const Tweet=require('./models/tweet');

app.listen(3000, async () => {
          console.log('Server started at PORT:3000');
          await connect();
          console.log('Mongo db connected');
          const tweets=await Tweet.find({
                    content:["123456","1st mail","34234",'asdff']
          });
          console.log(tweets);
});