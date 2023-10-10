import {ITodoList, IHttpResponse} from '@core/entities'

export const mapGetAllListsResponse = (response: IHttpResponse) => {
    const {data} = response;
    const {lists, message, error} = data;
    const {userId, todoLists} = lists;

    if(!todoLists){
        return {
            message: undefined,
            error: undefined,
            lists: undefined
        }
    }


    return {
        message: message,
        lists: [...todoLists],
        error: undefined
    };
}