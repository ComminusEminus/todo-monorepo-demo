import { IUserRepository } from '@core/abstractions';
import { IUser } from '@core/entities';
import { IHttpResponse } from '@core/entities';
export declare class UpdateUserProfileUseCase {
    private readonly repository;
    constructor(repository: IUserRepository<IHttpResponse>);
    execute(user: IUser): Promise<IHttpResponse>;
}
