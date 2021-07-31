import { UserRoles } from './../../common/enums/user-roles.enum';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, Length } from 'class-validator';

export class StoreUserDTO {
  @IsNotEmpty()
  @ApiProperty()
  first_name: string;

  @IsNotEmpty()
  @ApiProperty()
  last_name: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsOptional()
  @ApiProperty({ nullable: true, required: false })
  username: string;

  @IsNotEmpty()
  @Length(6, 32)
  @ApiProperty({ type: String })
  password: string;

  @IsOptional()
  @ApiProperty({ enum: ['ADMIN', 'USER'], nullable: true, required: false })
  role: UserRoles;
}
