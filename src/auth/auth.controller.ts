import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IpAddress } from 'src/common/decorators/ip.decorator';
import { AuthService } from './auth.service';
import { UserEmailLoginDto } from './dtos/emailLogin.dto';
import { registerDTO } from './dtos/register.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UsePipes(new ValidationPipe())
  async emailLogin(
    @Body() user: UserEmailLoginDto,
    @IpAddress() ipAddress,
  ): Promise<string> {
    return await this.authService.loginByEmail(user);
  }

  @Post('register')
  @UsePipes(new ValidationPipe())
  async register(@Body() user: registerDTO, @IpAddress() ipAddress) {
    return await this.authService.register(user);
  }

  // @Get('logout')
  // @UseGuards(new AuthGuard())
  // async logout() {
  //   return { message: 'success' };
  // }
}
