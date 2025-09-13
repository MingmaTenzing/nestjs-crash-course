import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  getData(): string {
    return 'hello. world';
  }
}
