import { IUser } from '@core/entities';
import { Model } from 'mongoose';
export declare class UpdateUserProfileService {
    user: Model<IUser>;
    constructor(user: Model<IUser>);
    execute(_id: string, firstName: string, lastName: string, userName: string, password: string): Promise<void>;
}
