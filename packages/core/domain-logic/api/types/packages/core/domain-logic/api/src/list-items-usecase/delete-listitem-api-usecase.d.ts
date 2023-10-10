export interface IDeleteListItemService {
    execute: (listItemId: string, listId: string) => void;
}
export declare class DeleteListItemApiUseCase {
    deleteListItemService: IDeleteListItemService;
    constructor(deleteListItemService: IDeleteListItemService);
    execute(req: any, res: any): Promise<void>;
}
