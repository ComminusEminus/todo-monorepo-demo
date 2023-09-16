export interface IHttpClientRepository<T, U>{
    baseURL: string;
    get(params: T): Promise<U>;
    post(params: T): Promise<U>;
    put(params: T): Promise<U>;
    delete(params: T): Promise<U>;
}

