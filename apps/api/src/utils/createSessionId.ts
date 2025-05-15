import {randomBytes} from 'crypto'

export const createSessionId = (): string => {
	return randomBytes(64).toString('hex')
}