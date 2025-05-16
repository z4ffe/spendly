import { Request, Response } from 'express';
import { SessionsService } from '../sessions/sessions.service';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
export declare class AuthController {
    private readonly authService;
    private readonly usersService;
    private readonly sessionsService;
    constructor(authService: AuthService, usersService: UsersService, sessionsService: SessionsService);
    signIn(body: SignupDto, clientIP: string, request: Request, response: Response): Promise<void>;
    logout(request: Request, response: Response): Promise<void>;
    me(request: Request): Promise<import("../users/entities/users.entitiy").User>;
}
