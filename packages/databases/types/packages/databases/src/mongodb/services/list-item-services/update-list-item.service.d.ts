import { ITodoListItem } from '@core/entities';
import { Model } from 'mongoose';
export declare class UpdateListItemService {
    listItemModel: Model<ITodoListItem>;
    constructor(listItemModel: Model<ITodoListItem>);
    execute(_id: string, title: string, description: string, complete: string): Promise<void>;
}
