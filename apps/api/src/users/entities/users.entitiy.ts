import * as bcrypt from 'bcrypt'
import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'
import {Session} from '../../sessions/entities/session.entity'

@Entity()
export class User implements IUser {
	@PrimaryGeneratedColumn()
	id: number

	@Column({length: 50, unique: true})
	email: string

	@Column()
	password: string

	@Column({name: 'first_name', length: 50})
	firstName: string

	@Column({name: 'last_name', length: 50})
	lastName: string

	@CreateDateColumn({
		name: 'created_at',
		type: 'timestamp'
	})
	createdAt: Date

	@UpdateDateColumn({
		name: 'updated_at',
		type: 'timestamp'
	})
	updatedAt: Date

	@OneToMany(() => Session, (session) => session.userId)
	sessions: Session[]

	async validatePassword(password: string) {
		return await bcrypt.compare(password, this.password)
	}
}