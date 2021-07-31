import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { StoreUserDTO } from './dtos/store-user.dto';
import { UpdateUserDTO } from './dtos/update-user.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async store(@Body() userDTO: StoreUserDTO) {
    return await this.usersService.store(userDTO);
  }

  @Put(':id')
  @UseGuards(new AuthGuard())
  @UsePipes(new ValidationPipe())
  async update(@Param('id') id: string, @Body() userDTO: UpdateUserDTO) {
    return await this.usersService.update(id, userDTO);
  }

  @Get(':id')
  async getOneById(@Param('id') id: string) {
    return await this.usersService.findByIdOrFail(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.usersService.delete(id);
  }

  // @Post('/sendEmail')
  // async sendEmail(@Body() data: SendEmailDTO) {
  //   return await this.usersService.sendEmail(data);
  // }
}
