import {Body, Controller, HttpCode, HttpStatus, Ip, Post, Req, Res, UseGuards} from '@nestjs/common'
import {Request, Response} from 'express'
import {SessionsService} from '../sessions/sessions.service'
import {UsersService} from '../users/users.service'
import {AuthGuard} from './auth.guard'
import {AuthService} from './auth.service'
import {SignupDto} from './dto/signup.dto'

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService, private readonly usersService: UsersService, private readonly sessionsService: SessionsService) {
	}

	@Post('signin')
	@HttpCode(HttpStatus.OK)
	async signIn(@Body() body: SignupDto, @Ip() clientIP: string, @Req() request: Request, @Res({passthrough: true}) response: Response) {
		const userAgent = request.headers['user-agent'] || ''
		const session = await this.authService.signIn(body, clientIP, userAgent)
		response.cookie('sessionId', session.sessionId, {httpOnly: true, expires: session.expiredAt, secure: false})
	}

	@Post('logout')
	@UseGuards(AuthGuard)
	@HttpCode(HttpStatus.OK)
	async logout(@Req() request: Request, @Res({passthrough: true}) response: Response) {
		const sessionId = await request.cookies['sessionId']
		await this.authService.logout(sessionId)
		response.clearCookie('sessionId')
	}

	@Post('me')
	@UseGuards(AuthGuard)
	@HttpCode(HttpStatus.OK)
	async me(@Req() request: Request) {
		const sessionId = await request.cookies['sessionId']
		return await this.sessionsService.findUserIdBySessionId(sessionId)
	}
}
