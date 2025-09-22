import { Injectable } from '@nestjs/common';
import { User, Bookmark } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable({})
export class AuthService {
  constructor(private primsa: PrismaService) {}
  login() {
    return { msg: 'login success' };
    this.primsa;
  }

  signup() {
    return { msg: 'signup success' };
  }
}
