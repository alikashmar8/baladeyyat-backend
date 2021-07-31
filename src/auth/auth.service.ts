import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { UserEmailLoginDto } from './dtos/emailLogin.dto';
import { registerDTO } from './dtos/register.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async loginByEmail(dto: UserEmailLoginDto): Promise<string> {
    let { email, password } = dto;
    let user: any = await this.usersRepository
      .createQueryBuilder('user')
      .where(`user.email = '${email}'`)
      .getOne();
    if (!user) {
      throw new HttpException(
        'No user with this email found',
        HttpStatus.BAD_REQUEST,
      );
    }
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const token = jwt.sign({ user }, process.env.JWT_SECRET, {
        expiresIn: '24h',
      });
      user.access_token = token;
      return user;
    } else {
      throw new HttpException('Password Incorrect', HttpStatus.BAD_REQUEST);
    }
  }

  async register(user: registerDTO): Promise<User> {
    const u = this.usersRepository.create(user);
    return await this.usersRepository.save(u);
  }
}
