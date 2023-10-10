import { ITodoListItem, ITodoList } from '@core/entities';
import { Model } from 'mongoose';
export declare class DeleteListItemService {
    listItemModel: Model<ITodoListItem>;
    listModel: Model<ITodoList>;
    constructor(listItemModel: Model<ITodoListItem>, listModel: Model<ITodoList>);
    execute(listItemId: string, userId: string): Promise<void>;
}
