import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { get } from 'http';
import { User, Bookmark } from 'generated/prisma';
import { authDto } from './dto';

@Controller('auth')
export class authController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() body: authDto) {
    console.log(body.password, body.email);
    return this.authService.signup(body);
  }

  @Post('signin')
  signin(@Body() body: authDto) {
    return this.authService.login(body);
  }
}
