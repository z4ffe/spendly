import {ValidationPipe} from '@nestjs/common'
import {NestFactory} from '@nestjs/core'
import cookieParser from 'cookie-parser'
import {AppModule} from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		bodyParser: true,
		rawBody: true,
		cors: true
	})
	app.setGlobalPrefix('api')
	app.useGlobalPipes(new ValidationPipe())
	app.use(cookieParser())
	await app.listen(process.env.PORT ?? 3000)
}

void bootstrap()
