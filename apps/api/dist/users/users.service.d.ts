import { Repository } from 'typeorm';
import { UsersCreateDto } from './dto/usersCreate.dto';
import { User } from './entities/users.entitiy';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(body: UsersCreateDto): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
    getUserInfo(id: number): Promise<User>;
}
