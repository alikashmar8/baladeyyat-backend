import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, Length } from 'class-validator';
import { UserRoles } from 'src/common/enums/user-roles.enum';

export class registerDTO {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ type: String })
  email: string;

  @IsNotEmpty()
  @Length(8, 16)
  @ApiProperty({ type: String })
  password: string;

  @IsNotEmpty()
  @Length(1, 50)
  @ApiProperty({ type: String })
  first_name: string;

  @IsNotEmpty()
  @Length(1, 50)
  @ApiProperty({ type: String })
  last_name: string;

  @IsNotEmpty()
  @IsEnum(UserRoles)
  @ApiProperty({ type: String })
  role: UserRoles;
}
