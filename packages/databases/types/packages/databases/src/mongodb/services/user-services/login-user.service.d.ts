import { IUser } from '@core/entities';
import { Model } from 'mongoose';
export declare class LoginUserService {
    user: Model<IUser>;
    constructor(user: Model<IUser>);
    execute(username: string, password: string): Promise<IUser | null>;
}
