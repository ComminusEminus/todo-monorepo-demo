import { IHttpClient } from '@todo/entities';
import { IUserRepository } from '@todo/abstractions';
import { IUser, IAxiosResponse } from '@todo/entities';
export declare class UserRepoImp implements IUserRepository {
    dataSource: IHttpClient;
    constructor(dataSource: IHttpClient);
    loginUser(userName: string, password: string): Promise<IAxiosResponse>;
    logoutUser(userName: string): Promise<IAxiosResponse>;
    editUserProfile(userProfile: IUser): Promise<IAxiosResponse>;
    createUserProfile(userName: string, password: string, firstName: string, lastName: string): Promise<IAxiosResponse>;
}
//# sourceMappingURL=user-repo-imp.d.ts.map