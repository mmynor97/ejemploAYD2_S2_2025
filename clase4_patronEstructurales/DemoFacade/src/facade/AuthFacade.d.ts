import { Validator } from '../subsystems/validator';
import { PasswordHasher } from '../subsystems/PasswordHasher';
import { UserRepository } from '../subsystems/UserRepository';
import { SessionManager } from '../subsystems/SessionManager';
export declare class AuthFacade {
    private readonly validator;
    private readonly hasher;
    private readonly repo;
    private readonly sessions;
    constructor(validator?: Validator, hasher?: PasswordHasher, repo?: UserRepository, sessions?: SessionManager);
    register(email: string, password: string): Promise<{
        id: number;
    }>;
    login(email: string, password: string): Promise<{
        token: string;
    }>;
    getProfile(token: string): Promise<{
        id: number;
        email: string;
    }>;
    logout(token: string): Promise<void>;
}
//# sourceMappingURL=AuthFacade.d.ts.map