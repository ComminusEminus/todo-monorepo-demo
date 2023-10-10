import { Responses, IDeleteListResponseDTO } from '@core/entities'
import { mapTodoListDeleteRequest } from './mappers/map-delete-list-req';

export interface IDeleteListService{
    execute: (listId: string, userId: string) => Promise<void>;
}


export class DeleteListApiUseCase{
    deleteListService: IDeleteListService
    constructor(deleteListService: IDeleteListService){
        this.deleteListService = deleteListService;
    }

    public async execute(req: any, res: any){
        const {body} = req;

        const {listId, error} = mapTodoListDeleteRequest(body)
        

        if (error) {
        
            const missingDataResponse: IDeleteListResponseDTO = {message: Responses.MISSING_DATA}
            
            res.status(418).json(missingDataResponse)
    
        }


        
        try{
            await this.deleteListService.execute(listId, req.user._id)

            const successDeleteListResponse : IDeleteListResponseDTO = {message: Responses.OK}

            res.json(successDeleteListResponse)

        }catch(err){
            const missingDataResponse: IDeleteListResponseDTO = {message: Responses.DBERROR, error: err}
            
            res.status(418).json(missingDataResponse)
        }

    }


}