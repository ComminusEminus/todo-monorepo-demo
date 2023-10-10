import { Responses, IAddNewListItemResponseDTO } from '@core/entities'
import {mapCreateNewListItemRequest} from './mappers/map-create-new-list-item-req'

export interface ICreateNewListItemService{
    execute: (title: string, description: string, listId: string) => Promise<void>;
}


export class CreateNewListItemApiUseCase{
    createNewListItemService: ICreateNewListItemService;

    constructor(createNewListItemService: ICreateNewListItemService){
        this.createNewListItemService = createNewListItemService    
    }

    public async execute(req: any, res: any){
        const {body} = req;
        
        const mappedRequest = mapCreateNewListItemRequest(body)

        const {title, description, listId, error} = mappedRequest

        if (error) {
        
            const missingDataResponse: IAddNewListItemResponseDTO = {message: Responses.MISSING_DATA}
            
            res.status(418).json(missingDataResponse)
    
        }

        try{    
            await this.createNewListItemService.execute(title, description, listId)
            
            const successAddNewListItemResponse :IAddNewListItemResponseDTO = {message: Responses.OK}
            
            res.status(200).send(successAddNewListItemResponse)
        }catch(err){
            const errorAddNewLIstItemResponse :IAddNewListItemResponseDTO = {message: Responses.DBERROR, error: err}
        
            res.json(errorAddNewLIstItemResponse)
        }

    }

}