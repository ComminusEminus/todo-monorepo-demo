import { ITodoListItem, IHttpResponse } from '@core/entities';
export declare const mapGetListByIdResponse: (response: IHttpResponse) => {
    list: ITodoListItem[];
    message: import("@core/entities").Responses | undefined;
    error: any;
};
