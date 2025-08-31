import { Injectable } from '@nestjs/common';
import { Tweet } from './tweet.model';

@Injectable()
export class TweetsService {
  private tweets: Tweet[] = [];
  private idCounter = 1;

  findAll(): Tweet[] {
    return this.tweets;
  }

  create(content: string): Tweet {
    const newTweet = { id: this.idCounter++, content };
    this.tweets.push(newTweet);
    return newTweet;
  }

  remove(id: number): void {
    this.tweets = this.tweets.filter((tweet) => tweet.id !== id);
  }
}
