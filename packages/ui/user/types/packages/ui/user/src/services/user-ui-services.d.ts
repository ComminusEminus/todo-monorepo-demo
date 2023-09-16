import { IHttpResponse, ILoginUserResponseDTO, IMappedUserProfile } from '@core/entities';
export declare const mapUserProfile: (response: IHttpResponse) => IMappedUserProfile;
export declare const mapLoginResponse: (response: IHttpResponse) => ILoginUserResponseDTO;
export declare const mapUserProfileForLoginUI: (input: IMappedUserProfile) => {
    _id: string;
    userName: string;
    firstName: string;
    lastName: string;
};
