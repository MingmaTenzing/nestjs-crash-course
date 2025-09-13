import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { authModule } from './auth/auth.module';

@Module({
  imports: [authModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
