import { INewUserRequestDTO, IUserLoginRequestDTO, IUserProfileUpdateRequestDTO } from '@core/entities';
export declare const mapUserProfileRequest: (body: INewUserRequestDTO) => {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    error: boolean;
};
export declare const mapUserLoginRequest: (body: IUserLoginRequestDTO) => {
    username: string;
    password: string;
    error: boolean;
};
export declare const mapUserProfileUpdateRequest: (body: IUserProfileUpdateRequestDTO) => {
    _id: string;
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    error: boolean;
};
