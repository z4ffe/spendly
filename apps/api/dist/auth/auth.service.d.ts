import { SessionsService } from '../sessions/sessions.service';
import { SignupDto } from './dto/signup.dto';
export declare class AuthService {
    private readonly sessionsService;
    constructor(sessionsService: SessionsService);
    signIn(body: SignupDto, clientIp: string, userAgent: string): Promise<import("../sessions/entities/session.entity").Session>;
    logout(sessionId: any): Promise<void>;
}
