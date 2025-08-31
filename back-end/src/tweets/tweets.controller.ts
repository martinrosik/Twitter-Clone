import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import type { Tweet } from './tweet.model';

@Controller('tweets')
export class TweetsController {
  constructor(private readonly tweetsService: TweetsService) {}

  @Get()
  findAll(): Tweet[] {
    return this.tweetsService.findAll();
  }

  @Post()
  create(@Body('content') content: string): Tweet {
    return this.tweetsService.create(content);
  }

  @Delete(':id')
  remove(@Param('id') id: string): { message: string } {
    this.tweetsService.remove(Number(id));
    return { message: 'Deleted' };
  }
}
