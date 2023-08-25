import express from 'express';
import bodyParser from 'body-parser'

import apiRoutes from './routes/index.js';
import {connect} from './config/database.js';

import { UserRepository,TweetRepository } from './repository/index.js';
import LikeService  from './services/like-service.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',apiRoutes);



app.listen(3000, async () => {
    console.log('server started');
    await connect();
    console.log('Mongo db connected');

    // const userepo=new UserRepository();
    // const user=await userepo.getAll();

    // const tweetRepo=new TweetRepository();
    // const tweet = await tweetRepo.getAll(0,10);

    // const likeService=new LikeService();
    // await likeService.toggleLike(tweet[0].id,'Tweet',user[0].id);
});