/**
 * Interface of repository for client side http operations
 * @typedef IHttpClientRepository
 * @prop {func} get
 * @prop {func} post
 * @prop {func} put
 * @prop {func} delete
 */


export interface IHttpClientRepository<T, U>{
    baseURL: string;
    get(params: T): Promise<U>;
    post(params: T): Promise<U>;
    put(params: T): Promise<U>;
    delete(params: T): Promise<U>;
}

