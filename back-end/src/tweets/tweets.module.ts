import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TweetsService } from './tweets.service';
import { TweetsController } from './tweets.controller';
import { Tweet, TweetDocument, TweetSchema } from './tweets.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tweet.name, schema: TweetSchema }])
  ],
  controllers: [TweetsController],
  providers: [TweetsService],
})
export class TweetsModule {}
