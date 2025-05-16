import {Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {compare} from 'bcrypt'
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

		const passwordIsValid = await compare(body.password, user.password)
		if (!passwordIsValid) {
			throw new UnauthorizedException('Wrong email or password')
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

	async remove(sessionId: string) {
		const session = await this.sessionRepository.findOneBy({sessionId})
		if (session) await this.sessionRepository.remove(session)
	}

	async findUserIdBySessionId(sessionId: string) {
		const session = await this.sessionRepository.findOne({
			where: {sessionId},
			relations: ['userId'],
			select: {
				userId: {
					email: true,
					firstName: true,
					lastName: true,
					createdAt: true
				}
			}
		})
		if (!session) throw new NotFoundException()
		return session.userId
	}

	async validateSession(sessionId: string) {
		const session = await this.sessionRepository.findOneBy({sessionId})

		if (!session) return false

		const isExpired = new Date(session.expiredAt) < new Date()

		if (isExpired) {
			await this.sessionRepository.remove(session)
			return false
		}

		return true
	}
}