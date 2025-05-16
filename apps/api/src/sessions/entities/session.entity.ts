import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn} from 'typeorm'
import {User} from '../../users/entities/users.entitiy'

@Entity()
export class Session {
	@PrimaryColumn({name: 'session_id'})
	sessionId: string

	@ManyToOne(() => User, (user) => user.id)
	@JoinColumn({name: 'user_id'})
	userId: User

	@Column({name: 'ip_address', length: 50, nullable: true})
	ipAddress: string

	@Column({name: 'userAgent', length: 255, nullable: true})
	userAgent: string

	@Column({name: 'expired_at', type: 'timestamp'})
	expiredAt: Date

	@CreateDateColumn({name: 'created_at', type: 'timestamp'})
	createdAt: Date
}