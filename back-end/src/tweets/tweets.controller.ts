import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { Tweet } from './entities/tweet.entity';

@Controller('tweets')
export class TweetsController {
  constructor(private readonly tweetsService: TweetsService) {}

  @Get()
  async findAll(): Promise<Tweet[]> {
    return this.tweetsService.findAll();
  }

  @Post()
  async create(@Body('content') content: string): Promise<Tweet> {
    return this.tweetsService.create(content);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<{ message: string }> {
    await this.tweetsService.remove(id);
    return { message: 'Deleted' };
  }
}
  