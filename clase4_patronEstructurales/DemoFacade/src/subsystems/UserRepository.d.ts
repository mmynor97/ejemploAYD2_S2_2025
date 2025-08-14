type User = {
    id: number;
    email: string;
    passwordHash: string;
};
export declare class UserRepository {
    private users;
    private byEmail;
    private seq;
    create(email: string, passwordHash: string): Promise<User>;
    findByEmail(email: string): Promise<User | undefined>;
    findById(id: number): Promise<User | undefined>;
}
export {};
//# sourceMappingURL=UserRepository.d.ts.map