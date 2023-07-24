import { IUserRepository } from '@core/abstractions';
export declare class CreateNewUserUseCase {
    private readonly repository;
    constructor(repository: IUserRepository);
    execute(firstName: string, lastName: string, userName: string, password: string): Promise<import("packages/core/domain/entities/types/packages/core/domain/entities/src").IAxiosResponse>;
}
