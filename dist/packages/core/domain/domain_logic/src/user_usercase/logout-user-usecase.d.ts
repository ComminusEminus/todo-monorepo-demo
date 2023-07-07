import { IUserRepository } from '@core/abstractions';
export declare class LogoutUserUseCase {
    private readonly repository;
    constructor(repository: IUserRepository);
    execute(userName: string): Promise<import("@todo/entities").IAxiosResponse>;
}
//# sourceMappingURL=logout-user-usecase.d.ts.map