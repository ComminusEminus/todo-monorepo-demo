import { IHttpClientRepository } from '@core/abstractions';
import { IHttpInput, IHttpResponse } from '@core/entities';
export declare class HttpClientRepository implements IHttpClientRepository<IHttpInput, IHttpResponse> {
    baseURL: string;
    constructor(baseURL: string);
    get(params: IHttpInput): Promise<IHttpResponse>;
    put(params: IHttpInput): Promise<IHttpResponse>;
    post(params: IHttpInput): Promise<IHttpResponse>;
    delete(params: IHttpInput): Promise<IHttpResponse>;
}
