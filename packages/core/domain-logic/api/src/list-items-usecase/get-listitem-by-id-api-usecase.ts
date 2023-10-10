import { ITodoListItem, Responses, IGetListItemByIdResponseDTO } from '@core/entities'
import { mapGetListItemByIdRequest } from './mappers/map-get-list-item-by-id-req';

export interface IGetListItemByIdCallSignature{
    (id: string): Promise<ITodoListItem | null>
}

export interface IGetListItemByIdService{
    execute: IGetListItemByIdCallSignature
}

export class GetListItemByIdApiUseCase{
    getListItemByIdService: IGetListItemByIdService

    constructor(getListItemByIdService: IGetListItemByIdService ){
        this.getListItemByIdService = getListItemByIdService;

    }

    public async execute(req: any, res: any){
        const {body} = req;

        const {id, error} = mapGetListItemByIdRequest(body)

        if (error) {
        
            const missingDataResponse: IGetListItemByIdResponseDTO = {message: Responses.MISSING_DATA}
            
            res.status(418).json(missingDataResponse)
    
        }

        try{
            const requestedListItem = await this.getListItemByIdService.execute(id)

            const successGetTodoListItemResponse= {listItem: requestedListItem}
            
            res.json(successGetTodoListItemResponse)

        }catch(err){
            const errorRetrievingTodoListItemResponse: IGetListItemByIdResponseDTO = {message: Responses.DBERROR, error: err}

            res.json({errorRetrievingTodoListItemResponse})
        }

    }

}