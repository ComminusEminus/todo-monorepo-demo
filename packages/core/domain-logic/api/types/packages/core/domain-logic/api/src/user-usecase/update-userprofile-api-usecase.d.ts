export interface IUpdateUserProfileService {
    execute: (_id: string, firstName: string, lastName: string, userName: string, password: string) => void;
}
export declare class UpdateUserProfileApiUseCase {
    updateUserProfileService: IUpdateUserProfileService;
    constructor(updateUserProfileService: IUpdateUserProfileService);
    execute(req: any, res: any): Promise<void>;
}
