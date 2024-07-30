import { IsEmail, IsNumber, IsString, Length, Matches } from "class-validator";

export class ClienteModel {

    @IsNumber({}, { message: "O id do cliente deve ser um número." })
    id: number;

    @Length(6, 150, { message: 'O nome do cliente deve ter de 6 a 150 caracteres.' })
    @Matches(/^[A-Za-zÀ-Üà-ü\s]+$/, 
        { message: 'O nome do cliente deve conter apenas letras e espaços.' })
    @IsString({ message: 'O nome do cliente deve ser do tipo texto.' })
    nome: string;

    @IsEmail({}, { message: 'O email do cliente deve ser um endereço de email válido.' })
    @IsString({ message: 'O email do cliente deve ser do tipo texto.' })
    email: string
}