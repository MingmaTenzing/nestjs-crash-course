import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { authModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { BookmarkController } from './bookmark/bookmark.controller';
import { BookmarkService } from './bookmark/bookmark.service';

import { BookmarkModule } from './bookmark/bookmark.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    authModule,
    PrismaModule,
    BookmarkModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
  ],
  controllers: [AppController, BookmarkController],
  providers: [AppService, BookmarkService],
})
export class AppModule {}
