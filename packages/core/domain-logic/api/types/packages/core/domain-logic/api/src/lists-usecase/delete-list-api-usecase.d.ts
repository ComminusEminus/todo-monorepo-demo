export interface IDeleteListService {
    execute: (listId: string, userId: string) => Promise<void>;
}
export declare class DeleteListApiUseCase {
    deleteListService: IDeleteListService;
    constructor(deleteListService: IDeleteListService);
    execute(req: any, res: any): Promise<void>;
}
