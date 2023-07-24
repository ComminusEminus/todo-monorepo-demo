import { IHttpClient, IAxiosResponse, IHttpInput } from '@core/entities';
export declare class AxiosHttpClient implements IHttpClient {
    baseURL: string;
    constructor(baseURL: string);
    get({ url, data }: IHttpInput): Promise<IAxiosResponse>;
    put({ url, data }: IHttpInput): Promise<IAxiosResponse>;
    post({ url, data }: IHttpInput): Promise<IAxiosResponse>;
    delete({ url, data }: IHttpInput): Promise<IAxiosResponse>;
}
