import { IUpdateListItemRequestDTO } from '@core/entities'

export const mapUpdateListItemRequest = (body: IUpdateListItemRequestDTO) => {
    const {_id, title, description, complete} = body

    let error = false;

    if(!_id || !title || !description || !complete){
    
        error = true;

    }

    return{
        _id: _id,
        title: title,
        description: description,
        complete: complete,   
        error: error
    }
}


