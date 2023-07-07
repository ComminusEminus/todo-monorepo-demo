import { IUserRepository } from '@todo/abstractions';
import { IUser } from '@todo/entities';
export declare class UpdateUserProfileUseCase {
    private readonly repository;
    constructor(repository: IUserRepository);
    execute(userProfile: IUser): Promise<import("@todo/entities").IAxiosResponse>;
}
//# sourceMappingURL=update-userprofile-usecase.d.ts.map