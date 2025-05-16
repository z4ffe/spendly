import {ConflictException, Injectable, NotFoundException} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import * as bcrypt from 'bcrypt'
import {Repository} from 'typeorm'
import {UsersCreateDto} from './dto/usersCreate.dto'
import {User} from './entities/users.entitiy'

@Injectable()
export class UsersService {
	constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {
	}

	async create(body: UsersCreateDto) {
		const isUserExist = await this.userRepository.findOne({
			where: {email: body.email.trim()}
		})
		if (isUserExist) {
			throw new ConflictException('User already exist')
		}
		const hashedPassword = await bcrypt.hash(body.password, 12)
		const newUser = this.userRepository.create({
			email: body.email.trim(),
			password: hashedPassword,
			firstName: body.firstName,
			lastName: body.lastName
		})
		return await this.userRepository.save(newUser)
	}

	async findByEmail(email: string) {
		return await this.userRepository.findOneBy({email})
	}

	async getUserInfo(id: number) {
		const user = await this.userRepository.findOne({
			where: {id},
			select: {email: true, firstName: true, lastName: true, createdAt: true}
		})
		if (!user) throw new NotFoundException()
		return user
	}
}