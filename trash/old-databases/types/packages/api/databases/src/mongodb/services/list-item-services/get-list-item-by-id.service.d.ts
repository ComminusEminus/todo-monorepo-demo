import { ITodoListItem } from '@core/entities';
import { Model } from 'mongoose';
export declare class GetListItemByIdService {
    listItemModel: Model<ITodoListItem>;
    constructor(listItemModel: Model<ITodoListItem>);
    execute(id: string): Promise<ITodoListItem | null>;
}
