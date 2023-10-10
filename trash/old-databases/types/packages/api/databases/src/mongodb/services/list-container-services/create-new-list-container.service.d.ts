import { ITodoListContainer } from '@core/entities';
import { Model } from 'mongoose';
export declare class CreateNewListContainerService {
    listContainer: Model<ITodoListContainer>;
    constructor(listContainer: Model<ITodoListContainer>);
    execute(userId: string): Promise<void>;
}
