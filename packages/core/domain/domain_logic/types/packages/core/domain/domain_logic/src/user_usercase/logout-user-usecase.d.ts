import { IUserRepository } from '@core/abstractions';
import { IHttpResponse } from '@core/entities';
export declare class LogoutUserUseCase {
    private readonly repository;
    constructor(repository: IUserRepository<IHttpResponse>);
    execute(): Promise<IHttpResponse>;
}
