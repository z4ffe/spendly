import { CanActivate, ExecutionContext } from '@nestjs/common';
import { SessionsService } from '../sessions/sessions.service';
export declare class AuthGuard implements CanActivate {
    private readonly sessionsService;
    constructor(sessionsService: SessionsService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
