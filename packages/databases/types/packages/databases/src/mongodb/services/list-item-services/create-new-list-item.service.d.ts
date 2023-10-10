import { ITodoListItem, ITodoList } from '@core/entities';
import { Model } from 'mongoose';
export declare class CreateNewListItemService {
    listItemModel: Model<ITodoListItem>;
    listModel: Model<ITodoList>;
    constructor(listItemModel: Model<ITodoListItem>, listModel: Model<ITodoList>);
    execute(title: string, description: string, listId: string): Promise<void>;
}
