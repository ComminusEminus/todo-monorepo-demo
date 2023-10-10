export interface ICreateNewListItemService {
    execute: (title: string, description: string, listId: string) => Promise<void>;
}
export declare class CreateNewListItemApiUseCase {
    createNewListItemService: ICreateNewListItemService;
    constructor(createNewListItemService: ICreateNewListItemService);
    execute(req: any, res: any): Promise<void>;
}
