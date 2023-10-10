import axios from 'axios'
import {IHttpClientRepository} from '@core/abstractions'
import {IHttpInput, IHttpResponse} from '@core/entities'

export class AxiosRepository implements IHttpClientRepository<IHttpInput, IHttpResponse>{
    baseURL: string
    constructor(baseURL: string){
        this.baseURL = baseURL
    }

    async get(params: IHttpInput): Promise<IHttpResponse> {
        const {url, data} = params
        return await axios({baseURL: this.baseURL, method:'get', url: url,  data: data, withCredentials: true})
    }
    async put(params: IHttpInput): Promise<IHttpResponse>{
        const {url, data} = params
        return await axios({baseURL: this.baseURL, method:'put', url: url,  data: data, withCredentials: true})
    }
    async post(params: IHttpInput): Promise<IHttpResponse>{
        const {url, data} = params
        return await axios({baseURL: this.baseURL, method:'post', url: url,  data: data, withCredentials: true})
    }
    async delete(params: IHttpInput): Promise<IHttpResponse>{
        const {url, data} = params
        return await axios({baseURL: this.baseURL, method:'delete', url: url,  data: data, withCredentials: true})
    }
}
