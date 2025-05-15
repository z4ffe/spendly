import {Injectable} from '@nestjs/common'
import {SessionsService} from '../sessions/sessions.service'
import {SignupDto} from './dto/signup.dto'

@Injectable()
export class AuthService {
	constructor(private readonly sessionsService: SessionsService) {
	}

	async signIn(body: SignupDto, clientIp: string, userAgent: string) {
		return await this.sessionsService.create(body, clientIp, userAgent)
	}
}
