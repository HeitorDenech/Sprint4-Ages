import { IsString, IsOptional, IsNumber, Min, Max, IsNotEmpty } from 'class-validator';

export class User
{
    @IsString()
    name: string;

    @IsString()
    email: string;
    
    @IsString()
    password: string;

    @Min(1)
    @Max(5)
    acessLevel: number;
}