import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {SessionsModule} from '../sessions/sessions.module'
import {User} from '../users/entities/users.entitiy'
import {UsersService} from '../users/users.service'
import {AuthController} from './auth.controller'
import {AuthService} from './auth.service'

@Module({
	imports: [TypeOrmModule.forFeature([User]), SessionsModule],
	controllers: [AuthController],
	providers: [AuthService, UsersService]
})
export class AuthModule {
}
