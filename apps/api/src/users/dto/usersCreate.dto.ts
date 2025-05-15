import {IsEmail, IsNotEmpty, IsString} from 'class-validator'

export class UsersCreateDto {
	@IsNotEmpty()
	@IsString()
	@IsEmail()
	email: string

	@IsNotEmpty()
	@IsString()
	password: string

	@IsNotEmpty()
	@IsString()
	firstName: string

	@IsNotEmpty()
	@IsString()
	lastName: string
}