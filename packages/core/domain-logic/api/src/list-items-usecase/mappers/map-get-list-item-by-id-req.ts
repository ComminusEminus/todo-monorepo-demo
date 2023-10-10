import { IFindListItemByIdRequestDTO } from '@core/entities'

export const mapGetListItemByIdRequest = (body: IFindListItemByIdRequestDTO) =>{
    const {listItemId} = body
    
    let error = false;

    if(!listItemId){
    
        error = true;

    }

    return{
        id: listItemId,
        error: error
    }
}
