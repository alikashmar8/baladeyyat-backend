import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, Length } from 'class-validator';
import { UserRoles } from 'src/common/enums/user-roles.enum';

export class UpdateUserDTO {
  @IsOptional()
  @ApiProperty({ nullable: true, required: false })
  first_name: string;

  @IsOptional()
  @ApiProperty({ nullable: true, required: false })
  last_name: string;

  @IsOptional()
  @IsEmail()
  @ApiProperty({ nullable: true, required: false })
  email: string;

  @IsOptional()
  @ApiProperty({ nullable: true, required: false })
  username: string;

  @IsOptional()
  @Length(6, 32)
  @ApiProperty({ nullable: true, required: false })
  password: string;

  @IsOptional()
  @ApiProperty({ enum: ['ADMIN', 'USER'], nullable: true, required: false })
  role: UserRoles;
}
