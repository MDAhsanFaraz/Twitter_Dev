import {HashtagRepository,TweetRepository }from "../repository/index.js";

class TweetService {
    constructor() {
        this.tweetRepsitory = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }
    async create(data){
        const content=data.content;
        
        let tags=content.match(/#[a-zA-Z0-9_]+/g);//this regex extracts hashtags
        tags=tags.map((tag)=>tag.substring(1));
        
        const tweet=await this.tweetRepsitory.create(data);

        let alreadyPresentTags=await this.hashtagRepository.findByName(tags)
        let titleOfPresenttags=alreadyPresentTags.map(tags=>tags.title);

        
        let newTags=tags.filter(tag=>!titleOfPresenttags.includes(tag));//new tags found in tweet
        newTags=newTags.map(tag=>{
            return {title:tag,tweets:[tweet.id]}
        }) 
        
        await this.hashtagRepository.bulkCreate(newTags);
        
        alreadyPresentTags.forEach((tag)=>{
                tag.tweets.push(tweet.id);
                tag.save();
        })
        return tweet;
    }
}

export default TweetService;