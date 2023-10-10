export interface IUpdateListItemService {
    execute: (_id: string, title: string, description: string, complete: string) => void;
}
export declare class UpdateListItemApiUseCase {
    updateListItemService: IUpdateListItemService;
    constructor(updateListItemService: IUpdateListItemService);
    execute(req: any, res: any): Promise<void>;
}
