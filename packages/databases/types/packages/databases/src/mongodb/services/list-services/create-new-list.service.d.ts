import { Responses, ITodoList, ITodoListContainer } from '@core/entities';
import { Model } from 'mongoose';
export declare class CreateNewListService {
    listContainer: Model<ITodoListContainer>;
    listModel: Model<ITodoList>;
    constructor(listContainer: Model<ITodoListContainer>, listModel: Model<ITodoList>);
    execute(title: string, userId: string): Promise<Responses>;
}
