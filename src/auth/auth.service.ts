import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { authDto } from './dto';
import * as argon2 from 'argon2';
import { PrismaClientKnownRequestError } from 'generated/prisma/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable({})
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtservice: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: authDto) {
    const hash = await argon2.hash(dto.password);
    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash: hash,
        },
      });
      // const { hash: _, ...userWithoutHash } = user;

      return this.signToken(user.id, user.email);

      // return userWithoutHash;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code == 'P2002') {
          console.log('im here');
          throw new ForbiddenException('Credentials used already');
        }
      }
    }
  }

  async login(dto: authDto): Promise<string> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!user) {
      throw new ForbiddenException('Wrong credentials');
    }

    const verify = await argon2.verify(user.hash, dto.password);
    if (!verify) {
      throw new ForbiddenException('Wrong password');
    }

    //  const { hash: _, ...userWithoutHash } = user;
    return this.signToken(user.id, user.email);
  }

  async signToken(userId: number, email: string) {
    const payload = {
      sub: userId,
      email,
    };

    return this.jwtservice.signAsync(payload, {
      expiresIn: '15min',

      secret: this.config.get('JWT_SECRET'),
    });
  }
}
