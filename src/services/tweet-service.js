const { TweetRepository } = require('../repository/index');

class TweetService {
    constructor() {
        this.tweetRepsitory = new TweetRepository();
    }
    async create(data){
        const content=data.content;
        const tags=content.match(/#[a-zA-Z0-9_]+/g);//this regex extracts hashtags
        tags=tags.map((tag)=>tag.substring(1));
        console.log(tags);
        const tweet=await this.tweetRepsitory.create(data);
        // todo create hashtags and add here
        /**
         * 1.bulkcreate in mongoose
         * 2.filter title of hashtags based on multiple tags
         * 3.How to add tweet id inside all the hashtag
         */
        return tweet;
    }
}

module.exports=TweetService