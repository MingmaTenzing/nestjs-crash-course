import { Module } from '@nestjs/common';
import { authController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [authModule],
  providers: [AuthService],
  controllers: [authController],
})
export class authModule {}
