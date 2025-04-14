import { IsString, Min, Max, IsNumber } from 'class-validator';
///////////////////////////////////////////////////////////////////////////////

export class CreateUserDto {
    @IsString()
    name: string;
  
    @IsString()
    email: string;
  
    @IsString()
    password: string;
  
    @IsNumber()
    @Min(1)
    @Max(5)
    level: number;
  
    @IsString()
    profile_img?: string; // torna opcional
  }
  