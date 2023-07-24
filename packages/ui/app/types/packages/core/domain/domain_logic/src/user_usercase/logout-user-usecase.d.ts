import { IUserRepository } from '@core/abstractions';
export declare class LogoutUserUseCase {
    private readonly repository;
    constructor(repository: IUserRepository);
    execute(userName: string): Promise<import("@core/entities").IAxiosResponse>;
}
