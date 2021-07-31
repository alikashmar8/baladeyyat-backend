import { Length, IsEmail, IsNotEmpty } from 'class-validator';

export class UserEmailLoginDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Length(6)
  @IsNotEmpty()
  password: string;
}
