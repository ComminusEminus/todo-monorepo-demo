import { IUserRepository } from '@core/abstractions';
import { IHttpResponse } from '@core/entities';
export declare class CreateNewUserUseCase {
    private readonly repository;
    constructor(repository: IUserRepository<IHttpResponse>);
    execute(firstName: string, lastName: string, userName: string, password: string): Promise<IHttpResponse>;
}
