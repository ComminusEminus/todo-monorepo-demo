import { IUser } from '@core/entities';
import { Model } from 'mongoose';
export declare class GetUserByIdService {
    user: Model<IUser>;
    constructor(user: Model<IUser>);
    execute(id: string): Promise<IUser | null>;
}
