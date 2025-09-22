import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { authModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { BookmarkController } from './bookmark/bookmark.controller';
import { BookmarkService } from './bookmark/bookmark.service';
import { TestService } from './test/test.service';
import { TestModule } from './test/test.module';
import { BookmarkModule } from './bookmark/bookmark.module';

@Module({
  imports: [authModule, PrismaModule, TestModule, BookmarkModule],
  controllers: [AppController, BookmarkController],
  providers: [AppService, BookmarkService, TestService],
})
export class AppModule {}
