import { IUserProfileUpdateRequestDTO } from '@core/entities';
export declare const mapUserProfileUpdateRequest: (body: IUserProfileUpdateRequestDTO) => {
    _id: string;
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    error: boolean;
};
