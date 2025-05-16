import {CanActivate, ExecutionContext, Injectable} from '@nestjs/common'
import {SessionsService} from '../sessions/sessions.service'

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private readonly sessionsService: SessionsService) {
	}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest()
		const sessionId = request.cookies.sessionId

		if (!sessionId) return false

		return await this.sessionsService.validateSession(sessionId)
	}
}
