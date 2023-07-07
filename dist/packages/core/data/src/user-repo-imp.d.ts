import { IHttpClient } from '@core/entities';
import { IUserRepository } from '@core/abstractions';
import { IUser, IAxiosResponse } from '@core/entities';
export declare class UserRepoImp implements IUserRepository {
    dataSource: IHttpClient;
    constructor(dataSource: IHttpClient);
    loginUser(userName: string, password: string): Promise<IAxiosResponse>;
    logoutUser(userName: string): Promise<IAxiosResponse>;
    editUserProfile(userProfile: IUser): Promise<IAxiosResponse>;
    createUserProfile(userName: string, password: string, firstName: string, lastName: string): Promise<IAxiosResponse>;
}
//# sourceMappingURL=user-repo-imp.d.ts.map