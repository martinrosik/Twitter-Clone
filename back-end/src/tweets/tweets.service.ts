import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tweet, TweetDocument } from './entities/tweet.entity';

@Injectable()
export class TweetsService {
  constructor(@InjectModel(Tweet.name) private tweetModel: Model<TweetDocument>) {}

  async findAll(): Promise<Tweet[]> {
    return this.tweetModel.find().exec();
  }

  async create(content: string): Promise<Tweet> {
    const newTweet = new this.tweetModel({ content });
    return newTweet.save();
  }

  async remove(id: string): Promise<void> {
    await this.tweetModel.findByIdAndDelete(id).exec();
  }
}
