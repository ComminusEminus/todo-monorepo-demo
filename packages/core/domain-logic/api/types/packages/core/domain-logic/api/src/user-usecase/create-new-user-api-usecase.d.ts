export interface ICreateNewUserService {
    execute: (firstName: string, lastName: string, userName: string, password: string) => void;
}
export declare class CreateNewUserApiUseCase {
    createNewUserService: ICreateNewUserService;
    constructor(createNewUserService: ICreateNewUserService);
    execute(req: any, res: any): Promise<void>;
}
