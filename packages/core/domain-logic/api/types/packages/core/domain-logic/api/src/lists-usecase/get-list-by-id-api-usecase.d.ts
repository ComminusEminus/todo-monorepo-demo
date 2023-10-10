import { ITodoList } from '@core/entities';
export interface IGetListByIdCallSignature {
    (listId: string): Promise<ITodoList | null>;
}
export interface IGetListByIdService {
    execute: IGetListByIdCallSignature;
}
export declare class GetListByIdApiUseCase {
    getListByIdService: IGetListByIdService;
    constructor(getListByIdService: IGetListByIdService);
    execute(req: any, res: any): Promise<void>;
}
