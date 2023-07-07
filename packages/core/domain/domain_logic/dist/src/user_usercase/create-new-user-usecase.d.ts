import { IUserRepository } from '@todo/abstractions';
export declare class CreateNewUserUseCase {
    private readonly repository;
    constructor(repository: IUserRepository);
    execute(firstName: string, lastName: string, userName: string, password: string): Promise<import("@todo/entities").IAxiosResponse>;
}
//# sourceMappingURL=create-new-user-usecase.d.ts.map