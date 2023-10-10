import { ITodoList, ITodoListContainer } from '@core/entities';
import { Model } from 'mongoose';
export declare class DeleteListService {
    listContainer: Model<ITodoListContainer>;
    listModel: Model<ITodoList>;
    constructor(listContainer: Model<ITodoListContainer>, listModel: Model<ITodoList>);
    execute(listId: string, userId: string): Promise<void>;
}
