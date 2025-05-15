import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(body: SignupDto, clientIP: string, request: Request, response: Response): Promise<{
        message: string;
    }>;
}
