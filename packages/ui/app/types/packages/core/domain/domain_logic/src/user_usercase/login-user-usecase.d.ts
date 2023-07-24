import { IUserRepository } from '@core/abstractions';
export declare class LoginUserUseCase {
    private readonly repository;
    constructor(repository: IUserRepository);
    execute(userName: string, password: string): Promise<import("@core/entities").IAxiosResponse>;
}
