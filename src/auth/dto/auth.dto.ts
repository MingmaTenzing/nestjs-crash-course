import {
  IsEmail,
  IsNotEmpty,
  isNotEmpty,
  IsString,
  isString,
} from 'class-validator';

export class authDto {
  @IsEmail()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
