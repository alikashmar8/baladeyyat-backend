import { MailerService } from '@nestjs-modules/mailer';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { SendEmailDTO } from 'src/common/dtos/send-email.dto';
import { Repository } from 'typeorm';
import { StoreUserDTO } from './dtos/store-user.dto';
import { UpdateUserDTO } from './dtos/update-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        private mailerService: MailerService,
      ) {}
    
      async findAll(): Promise<User[]> {
        return await this.usersRepository.find();
      }
    
      async store(userDTO: StoreUserDTO) {
        const user: User = this.usersRepository.create(userDTO);
        await this.usersRepository.save(user);
        return user;
      }
    
      async update(id: string, data: UpdateUserDTO) {
        return await this.usersRepository.update(id, data);
      }
    
      async findByIdOrFail(id: string) {
        return await this.usersRepository.findOneOrFail(id).catch((error) => {
          throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
        });
      }
    
      async delete(id: string) {
        return await this.usersRepository.delete(id);
      }
    
    //   async sendEmail(data: SendEmailDTO) {
    //     return await this.mailerService.sendMail({
    //       to: process.env.ADMIN_EMAIL,
    //       from: 'csvuploaderexercise@gmail.com',
    //       subject: 'Customer Contacted you',
    //       html: `
    //       <h1><strong>Customer name:</strong></h1> ${data.name}
    //       <br>
    //       <h1><strong>Customer email:</strong></h1> ${data.email}
    //       <br>
    //       <h1><strong>Subject:</strong></h1> ${data.subject}
    //       <br>
    //       <h1><strong>Message:</strong></h1> ${data.message}
    //       `,
    //     });
    //   }
    
}
