import { IUserRepository } from '@core/abstractions';
import { IUser } from '@core/entities';
export declare class UpdateUserProfileUseCase {
    private readonly repository;
    constructor(repository: IUserRepository);
    execute(userProfile: IUser): Promise<import("@core/entities").IAxiosResponse>;
}
//# sourceMappingURL=update-userprofile-usecase.d.ts.map