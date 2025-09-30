import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { type Request } from 'express';

@Controller('users')
export class UserController {
  @Get('/me')
  @UseGuards(AuthGuard('jwt'))
  getMe(@Req() req: Request) {
    console.log(req.user);
    return 'user information';
  }
}
