import {Body, Controller, HttpCode, HttpStatus, Ip, Post, Req, Res} from '@nestjs/common'
import {Request, Response} from 'express'
import {AuthService} from './auth.service'
import {SignupDto} from './dto/signup.dto'

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {
	}

	@Post('signin')
	@HttpCode(HttpStatus.OK)
	async signIn(@Body() body: SignupDto, @Ip() clientIP: string, @Req() request: Request, @Res({passthrough: true}) response: Response) {
		const userAgent = request.headers['user-agent'] || ''
		const session = await this.authService.signIn(body, clientIP, userAgent)
		response.cookie('sessionId', session.sessionId, {httpOnly: true, expires: session.expiredAt, secure: false})
		return {message: 'success'}
	}
}
