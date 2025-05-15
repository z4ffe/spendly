import {IsNotEmpty, IsString} from 'class-validator'

export class SessionDto {
	@IsString()
	@IsNotEmpty()
	sessionId: number

	@IsString()
	@IsNotEmpty()
	userId: string

	@IsString()
	@IsNotEmpty()
	ipAddress: string

	@IsString()
	@IsNotEmpty()
	userAgent: string

	@IsString()
	@IsNotEmpty()
	expiredAt: Date
}