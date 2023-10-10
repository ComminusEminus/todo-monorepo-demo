import { IFindListByIdRequestDTO } from '@core/entities'

export const mapGetListByIdRequest = (body: IFindListByIdRequestDTO) =>{
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
