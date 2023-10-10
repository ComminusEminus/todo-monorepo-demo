import { INewUserRequestDTO } from '@core/entities';
export declare const mapCreateNewUserRequest: (body: INewUserRequestDTO) => {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    error: boolean;
};
