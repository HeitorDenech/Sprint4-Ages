import { IsString, Min, Max, IsNumber } from 'class-validator';

export class CreateUser
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
    acessLevel: number;
}