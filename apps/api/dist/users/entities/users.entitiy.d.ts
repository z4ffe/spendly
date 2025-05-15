import { Session } from '../../sessions/entities/session.entity';
export declare class User implements IUser {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt: Date;
    updatedAt: Date;
    sessions: Session[];
    validatePassword(password: string): Promise<boolean>;
}
