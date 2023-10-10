import { ITodoListContainer } from '@core/entities';
import { Model } from 'mongoose';
export declare class GetAllListsService {
    listContainer: Model<ITodoListContainer>;
    constructor(listContainer: Model<ITodoListContainer>);
    execute(userId: string): Promise<ITodoListContainer | null>;
}
