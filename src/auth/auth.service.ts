import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {
    return { msg: 'login success' };
  }

  signup() {
    return { msg: 'signup success' };
  }
}
