import { IUserRepository } from '@core/abstractions';
import { IHttpResponse } from '@core/entities';
export declare class VerifyUserLoginUseCase {
    private readonly repository;
    constructor(repository: IUserRepository<IHttpResponse>);
    execute(): Promise<IHttpResponse>;
}
