import { IHttpResponse } from '@core/entities';
export declare const mapGetAllListsResponse: (response: IHttpResponse) => {
    message: undefined;
    error: undefined;
    lists: undefined;
} | {
    message: any;
    lists: any[];
    error: undefined;
};
