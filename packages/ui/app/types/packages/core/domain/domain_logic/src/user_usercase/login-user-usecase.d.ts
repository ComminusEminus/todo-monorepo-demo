import { IUserRepository } from '@core/abstractions';
import { IHttpResponse } from '@core/entities';
export declare class LoginUserUseCase {
    private readonly repository;
    constructor(repository: IUserRepository<IHttpResponse>);
    execute(username: string, password: string): Promise<IHttpResponse>;
}
