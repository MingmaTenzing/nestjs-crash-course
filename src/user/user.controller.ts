import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { type Request } from 'express';
import { RoutingGuard } from 'src/routing/routing.guard';

@Controller('users')
export class UserController {
  @Get('/me')
  @UseGuards(AuthGuard('jwt'))
  @UseGuards(RoutingGuard)
  getMe(@Req() req: Request) {
    console.log(req.user);
    return 'user information';
  }
}
