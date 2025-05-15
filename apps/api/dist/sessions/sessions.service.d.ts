import { Repository } from 'typeorm';
import { SignupDto } from '../auth/dto/signup.dto';
import { UsersService } from '../users/users.service';
import { Session } from './entities/session.entity';
export declare class SessionsService {
    private readonly sessionRepository;
    private readonly usersService;
    constructor(sessionRepository: Repository<Session>, usersService: UsersService);
    create(body: SignupDto, clientIp: string, userAgent: string): Promise<Session>;
}
