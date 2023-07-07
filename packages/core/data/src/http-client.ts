import axios from 'axios'
import {IHttpClient, IAxiosResponse, IHttpInput} from '@core/entities'

export class AxiosHttpClient implements IHttpClient{
    baseURL: string
    constructor(baseURL: string){
        this.baseURL = baseURL
    }

    async get({url, data}: IHttpInput): Promise<IAxiosResponse> {
        return await axios({baseURL: this.baseURL, method:'get', url: url,  data: data})
    }
    async put({url, data}: IHttpInput): Promise<IAxiosResponse>{
        return await axios({baseURL: this.baseURL, method:'put', url: url,  data: data})
    }
    async post({url, data}: IHttpInput): Promise<IAxiosResponse>{
        return await axios({baseURL: this.baseURL, method:'post', url: url,  data: data})
    }
    async delete({url, data}: IHttpInput): Promise<IAxiosResponse>{
        return await axios({baseURL: this.baseURL, method:'delete', url: url,  data: data})
    }
}
