import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tweet, TweetDocument } from './tweets.schema';

@Injectable()
export class TweetsService {
  constructor(
    @InjectModel(Tweet.name) private tweetModel: Model<TweetDocument>,
  ) {}

  async create(content: string, userId: string) {
    const tweet = new this.tweetModel({ content, userId });
    return tweet.save();
  }

  async findAll() {
    return this.tweetModel.find().sort({ createdAt: -1 }).exec();
  }

  async remove(tweetId: string, userId: string) {
    const tweet = await this.tweetModel.findById(tweetId);
    if (!tweet) throw new Error('Tweet not found');
    if (tweet.userId !== userId) throw new Error('Unauthorized');

    return this.tweetModel.findByIdAndDelete(tweetId).exec();
  }
}
