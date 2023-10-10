import {IAddNewListRequestDTO} from '@core/entities'

export const mapCreateNewListRequest = (body: IAddNewListRequestDTO) => {
    const {title} = body

    let error = false;

    if(!title){
        error = true;
    }

    return{
        title: title,
        error: error
    }
}

