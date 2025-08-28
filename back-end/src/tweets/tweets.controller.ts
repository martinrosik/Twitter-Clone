import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { TweetsService } from './tweets.service';

@Controller('tweets')
export class TweetsController {
  constructor(private readonly tweetsService: TweetsService) {}

  @Get()
  findAll() {
    return this.tweetsService.findAll();
  }

  @Post()
  create(@Body('content') content: string) {
    return this.tweetsService.create(content);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.tweetsService.remove(Number(id));
    return { message: 'Deleted' };
  }
}
