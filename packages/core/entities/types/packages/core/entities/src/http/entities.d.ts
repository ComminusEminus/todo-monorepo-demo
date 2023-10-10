export interface IHttpInput {
    url: string;
    data?: object | string;
}
export interface IHttpResponse {
    data: any;
    status: string;
    statusText: string;
    headers: object;
    config: object;
    request: object;
}
