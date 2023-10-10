import { IUserLoginRequestDTO } from '@core/entities';
export declare const mapUserLoginRequest: (body: IUserLoginRequestDTO) => {
    username: string;
    password: string;
    error: boolean;
};
