import { IHttpResponse} from '@core/entities'

export const mapLoginUser = (response: IHttpResponse) => {
    const {data}  = response;
    const {message, error} = data;
    if(!message){
        throw new Error('add new listitem returned no message')
    }
    
    return {
        message, error
    }
}

