import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { authDto } from './dto';
import * as argon2 from 'argon2';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signup(dto: authDto) {
    const hash = await argon2.hash(dto.password);
    const user = this.prisma.user.create({
      data: {
        email: dto.email,
        hash,
      },
    });

    return user;
  }

  async login() {
    const bookmark = await this.prisma.bookmark.create({
      data: {
        title: 'mybookmark',
        link: 'dfdfdf',
        userId: 1,
      },
    });
    return bookmark;
  }
}
