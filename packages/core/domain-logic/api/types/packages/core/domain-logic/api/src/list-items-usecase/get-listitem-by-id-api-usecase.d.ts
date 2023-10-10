import { ITodoListItem } from '@core/entities';
export interface IGetListItemByIdCallSignature {
    (id: string): Promise<ITodoListItem | null>;
}
export interface IGetListItemByIdService {
    execute: IGetListItemByIdCallSignature;
}
export declare class GetListItemByIdApiUseCase {
    getListItemByIdService: IGetListItemByIdService;
    constructor(getListItemByIdService: IGetListItemByIdService);
    execute(req: any, res: any): Promise<void>;
}
