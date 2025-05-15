import {Module} from '@nestjs/common'
import {MainConfigModule} from './config/config.module'
import {DatabaseModule} from './config/db.module'
import {UsersModule} from './users/users.module'
import { AuthModule } from './auth/auth.module';
import { SessionsModule } from './sessions/sessions.module';

@Module({
	imports: [MainConfigModule, DatabaseModule, UsersModule, AuthModule, SessionsModule]
})
export class AppModule {
}
