import {  ITodoList, Responses, IGetListByIdResponseDTO } from '@core/entities'
import {mapGetListByIdRequest} from './mappers/map-get-list-by-id-req'

export interface IGetListByIdCallSignature{
    (listId: string): Promise<ITodoList | null>
}

export interface IGetListByIdService{
    execute: IGetListByIdCallSignature
}

export class GetListByIdApiUseCase{
    getListByIdService : IGetListByIdService
    constructor(getListByIdService : IGetListByIdService){
        this.getListByIdService = getListByIdService
        
    }

    public async execute(req: any, res: any){
        const {body} = req;

        const {listId, error} = mapGetListByIdRequest(body)

        if (error) {
        
            const missingDataResponse: IGetListByIdResponseDTO = {message: Responses.MISSING_DATA}
            
            res.status(418).json(missingDataResponse)
    
        }

        try{
            const getListByIdResponse = await this.getListByIdService.execute(listId)
            
            console.log('getListByIdResponse in get list by id usecase')
            

            const successGetTodoListItemResponse = {list: getListByIdResponse, message: Responses.OK, error: ''}
            
            res.json(successGetTodoListItemResponse)
        }catch(err){
            const errorDeleteTodoListResponse: IGetListByIdResponseDTO = {message: Responses.DBERROR, error: err}

            res.json(errorDeleteTodoListResponse)
        }

    }
    

}