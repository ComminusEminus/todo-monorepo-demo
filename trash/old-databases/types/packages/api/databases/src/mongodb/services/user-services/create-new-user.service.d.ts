import { ITodoListContainer, IUser } from '@core/entities';
import { Model } from 'mongoose';
export declare class CreateNewUserService {
    user: Model<IUser>;
    listContainer: Model<ITodoListContainer>;
    constructor(user: Model<IUser>, listContainer: Model<ITodoListContainer>);
    execute(firstName: string, lastName: string, userName: string, password: string): Promise<void>;
}
