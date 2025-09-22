import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { get } from 'http';
import { User, Bookmark } from 'generated/prisma';
@Controller('auth')
export class authController {
  constructor(private authService: AuthService) {}

  @Get('signup')
  signup() {
    return this.authService.signup();
  }

  @Get('signin')
  signin() {
    return this.authService.login();
  }
}
