import {Injectable, NotFoundException} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {SignupDto} from '../auth/dto/signup.dto'
import {UsersService} from '../users/users.service'
import {createSessionId} from '../utils/createSessionId'
import {expiredSessionDate} from '../utils/expiredSessionDate'
import {Session} from './entities/session.entity'

@Injectable()
export class SessionsService {
	constructor(@InjectRepository(Session) private readonly sessionRepository: Repository<Session>,
					private readonly usersService: UsersService) {
	}

	async create(body: SignupDto, clientIp: string, userAgent: string) {
		const user = await this.usersService.findByEmail(body.email)
		if (!user) {
			throw new NotFoundException('User not found')
		}
		const session = this.sessionRepository.create({
			sessionId: createSessionId(),
			expiredAt: expiredSessionDate(30),
			ipAddress: clientIp,
			userId: user,
			userAgent
		})
		return await this.sessionRepository.save(session)
	}
}
