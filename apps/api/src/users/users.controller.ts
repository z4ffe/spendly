import {Body, Controller, HttpCode, HttpStatus, Post} from '@nestjs/common'
import {UsersCreateDto} from './dto/usersCreate.dto'
import {UsersService} from './users.service'

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {
	}

	@Post('register')
	@HttpCode(HttpStatus.CREATED)
	async create(@Body() body: UsersCreateDto) {
		await this.usersService.create(body)
		return {message: 'OK'}
	}
}