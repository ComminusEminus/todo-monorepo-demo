import { ITodoListContainer } from '@core/entities';
export interface IGetAllListsCallSignature {
    (userId: string): Promise<ITodoListContainer | null>;
}
export interface IGetAllListsService {
    execute: IGetAllListsCallSignature;
}
export declare class GetAllListsApiUseCase {
    getAllListsService: IGetAllListsService;
    constructor(getAllListsService: IGetAllListsService);
    execute(req: any, res: any): Promise<void>;
}
