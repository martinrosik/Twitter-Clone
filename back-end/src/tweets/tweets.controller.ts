import { Controller, Get, Post, Delete, Body, Param, Req, UseGuards, ForbiddenException, NotFoundException } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('tweets')
export class TweetsController {
  constructor(private readonly tweetsService: TweetsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body('content') content: string, @Req() req: Request & { user: any }) {
    const userId = req.user.sub;
    return this.tweetsService.create(content, userId);
  }

  @Get()
  async findAll() {
    return this.tweetsService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(@Param('id') id: string, @Req() req: Request & { user: any }) {
    const userId = req.user.sub;
    try {
      return await this.tweetsService.remove(id, userId);
    } catch (err) {
      if (err.message === 'Unauthorized') throw new ForbiddenException('You can only delete your own tweets.');
      if (err.message === 'Tweet not found') throw new NotFoundException('Tweet not found.');
      throw err;
    }
  }
}
