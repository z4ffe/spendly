import {ValidationPipe} from '@nestjs/common'
import {NestFactory} from '@nestjs/core'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import {AppModule} from './app.module'
import {ResponseInterceptor} from './global/interceptors/response.interceptor'

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		bodyParser: true,
		rawBody: true,
		cors: true
	})
	app.setGlobalPrefix('api')
	app.useGlobalPipes(new ValidationPipe())
	app.useGlobalInterceptors(new ResponseInterceptor())
	app.use(cookieParser())
	app.use(helmet())
	await app.listen(process.env.PORT ?? 3000)
}

void bootstrap()
