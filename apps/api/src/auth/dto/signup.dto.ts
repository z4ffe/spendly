import {IsEmail, IsNotEmpty, IsString} from 'class-validator'

export class SignupDto {
	@IsNotEmpty()
	@IsEmail()
	@IsString()
	email: string

	@IsNotEmpty()
	@IsString()
	password: string
}