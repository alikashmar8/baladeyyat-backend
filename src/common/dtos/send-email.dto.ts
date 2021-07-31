import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class SendEmailDTO {
    @IsNotEmpty()
    @ApiProperty()
    name: string;
  
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email: string;
  
    @IsNotEmpty()
    @ApiProperty()
    password: string;
  
    @IsNotEmpty()
    @ApiProperty()
    subject: string;
  
    @IsNotEmpty()
    @ApiProperty()
    message: string;
}