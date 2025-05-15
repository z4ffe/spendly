import { User } from '../../users/entities/users.entitiy';
export declare class Session {
    sessionId: string;
    userId: User;
    ipAddress: string;
    userAgent: string;
    expiredAt: Date;
    createdAt: Date;
}
