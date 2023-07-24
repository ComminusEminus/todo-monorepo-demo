export interface IHttpClient{
    baseURL: string;
    get({url, data}: IHttpInput): Promise<IAxiosResponse>;
    post({url, data}: IHttpInput): Promise<IAxiosResponse>;
    put({url, data}: IHttpInput): Promise<IAxiosResponse>;
    delete({url, data}: IHttpInput): Promise<IAxiosResponse>;
}

export interface IHttpInput{
    url:string;
    data?: object | string;
}

export interface IAxiosResponse{
    data: [] ;
    status: string;
    statusText: string;
    headers: object;
    config: object;
    request: object;

}

