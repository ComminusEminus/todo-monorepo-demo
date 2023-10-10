import { IDeleteListRequestDTO } from '@core/entities'



export const mapTodoListDeleteRequest = (body: IDeleteListRequestDTO) => {
    const {listId} = body;

    let error = false;

    if(!listId){
        error = true;
    }

    return{
        listId: listId,        
        error: error
    }
}
