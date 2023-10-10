import { Responses } from '@core/entities';
export interface ICreateNewListService {
    execute: (title: string, userId: string) => Promise<Responses>;
}
export declare class CreateNewListApiUseCase {
    createNewListService: ICreateNewListService;
    constructor(createNewListService: ICreateNewListService);
    execute(req: any, res: any): Promise<void>;
}
