import { Responses } from '../common/enum';
export interface ICreateNewUserResponseDTO {
    message?: Responses;
    error?: any;
}
export interface ILoginUserResponseDTO {
    message?: Responses;
    error?: any;
}
export interface ILogOutUserResponseDTO {
    message?: Responses;
    error?: any;
}
export interface IUpdateUserProfileResponseDTO {
    message?: Responses;
    error?: any;
}
