import { UsersCreateDto } from './dto/usersCreate.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(body: UsersCreateDto): Promise<{
        message: string;
    }>;
}
