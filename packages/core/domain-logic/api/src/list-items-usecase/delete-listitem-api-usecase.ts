import {Responses, IDeleteListItemResponseDTO } from '@core/entities'
import {mapDeleteListItemRequest} from './mappers/map-delete-list-item-req'


export interface IDeleteListItemService{
    execute: (listItemId: string, listId: string) => void;
}

export class DeleteListItemApiUseCase{
    deleteListItemService: IDeleteListItemService;

    constructor(deleteListItemService: IDeleteListItemService){
        this.deleteListItemService = deleteListItemService;
    }

    public async execute(req: any, res: any){
        const {body} = req;

        const {listId, listItemId, error} = mapDeleteListItemRequest(body)

        if (error) {
        
            const missingDataResponse: IDeleteListItemResponseDTO = {message: Responses.MISSING_DATA}
            
            res.status(418).json(missingDataResponse)
    
        }

        try{
            await this.deleteListItemService.execute(listItemId, listId)
            
            const successDeleteListItemResponse : IDeleteListItemResponseDTO = {message: Responses.OK}
            
            res.status(200).send(successDeleteListItemResponse)
        }catch(err){
            const errorDeleteListItemResponse: IDeleteListItemResponseDTO = {message: Responses.DBERROR, error: err}

            res.json(errorDeleteListItemResponse)
        }


    }

}