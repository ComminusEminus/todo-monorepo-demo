import { IUser } from '@core/entities';
export interface ILoginUserCallSignature {
    (username: string, password: string): Promise<null | IUser>;
}
export interface ILoginUserService {
    execute: ILoginUserCallSignature;
}
export declare class LoginUserApiUseCase {
    loginUserService: ILoginUserService;
    constructor(loginUserService: ILoginUserService);
    execute(req: any, res: any): Promise<any>;
}
