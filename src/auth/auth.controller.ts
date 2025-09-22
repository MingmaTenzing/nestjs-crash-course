import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { get } from 'http';
import { User, Bookmark } from 'generated/prisma';
import { type auth } from './dto';
@Controller('auth')
export class authController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() body: auth) {
    console.log(body.password, body.username);
    return this.authService.signup();
  }

  @Post('signin')
  signin() {
    return this.authService.login();
  }
}
