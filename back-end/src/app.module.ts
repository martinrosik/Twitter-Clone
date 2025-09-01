import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TweetsModule } from './tweets/tweets.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/tweets_database'),
    TweetsModule,
  ],
})
export class AppModule {}
