import { IsString, IsNumber, Min, Max } from 'class-validator';

export class UpdateUser 
{
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;
  
  @IsNumber()
  @Min(1)
  @Max(5)
  accessLevel: number;
}