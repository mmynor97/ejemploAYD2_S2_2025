export declare class SessionManager {
    private sessions;
    generateToken(): string;
    create(userId: number): Promise<string>;
    getUserId(token: string): Promise<number | undefined>;
    revoke(token: string): Promise<void>;
}
//# sourceMappingURL=SessionManager.d.ts.map