import {Module} from '@nestjs/common'
import {ConfigModule, ConfigService} from '@nestjs/config'
import {TypeOrmModule} from '@nestjs/typeorm'

@Module({
	imports: [TypeOrmModule.forRootAsync({
		imports: [ConfigModule],
		inject: [ConfigService],
		useFactory: (configService: ConfigService) => ({
			type: 'postgres',
			host: configService.getOrThrow('DB_URI'),
			port: configService.getOrThrow('DB_PORT'),
			username: configService.getOrThrow('POSTGRES_USER'),
			password: configService.getOrThrow('POSTGRES_PASSWORD'),
			database: configService.getOrThrow('POSTGRES_DB'),
			entities: ['./src/**/*{.entity.ts}'],
			synchronize: true,
			autoLoadEntities: true,
			ssl: false,
			logging: false,
			dropSchema: false
		})
	})]
})

export class DatabaseModule {
}