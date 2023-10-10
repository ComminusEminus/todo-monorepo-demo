import { ITodoList } from '@core/entities';
import { Model } from 'mongoose';
export declare class GetListByIdService {
    listModel: Model<ITodoList>;
    constructor(listModel: Model<ITodoList>);
    execute(listId: string): Promise<ITodoList | null>;
}
