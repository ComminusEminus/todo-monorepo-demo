import { ITodoListItem, ITodoList, Responses, IUpdateListItemResponseDTO } from '@core/entities'
import { mapUpdateListItemRequest } from './mappers/map-update-list-item-req';

export interface IUpdateListItemService{
    execute: (_id: string, title: string, description: string, complete: string) => void;
}

export class UpdateListItemApiUseCase{
    updateListItemService: IUpdateListItemService
    constructor(updateListItemService: IUpdateListItemService ){
        this.updateListItemService = updateListItemService

    }

    public async execute(req: any, res: any){
        const {body} = req;

        const {_id, title, description, complete, error} = mapUpdateListItemRequest(body)

        if (error) {
        
            const missingDataResponse: IUpdateListItemResponseDTO = {message: Responses.MISSING_DATA}
            
            res.status(418).json(missingDataResponse)
    
        }

        try{
            await this.updateListItemService.execute(_id, title, description, complete)
            
            const successUpdateListItemResponse: IUpdateListItemResponseDTO = {message: Responses.OK}

            res.json(successUpdateListItemResponse)
        }catch(err){
            const errorUpdateListItemResponse :IUpdateListItemResponseDTO = {message: Responses.DBERROR, error: err}

            res.json(errorUpdateListItemResponse)
        }
        
    }

}