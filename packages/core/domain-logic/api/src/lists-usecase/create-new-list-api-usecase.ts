import { Responses, IAddNewListResponseDTO } from '@core/entities'
import {mapCreateNewListRequest} from './mappers/map-create-new-list-req'

export interface ICreateNewListService{
    execute: (title: string, userId: string) => Promise<Responses>;
}


export class CreateNewListApiUseCase{
    createNewListService: ICreateNewListService
    constructor(createNewListService: ICreateNewListService){
        this.createNewListService = createNewListService;
    }

    public async execute(req: any, res: any){
        const {body} = req;
        console.log(body)
        const {title, error} = mapCreateNewListRequest(body)

        if (error) {
        
            const missingDataResponse: IAddNewListResponseDTO = {message: Responses.MISSING_DATA}
            
            res.status(418).send(missingDataResponse)
    
        }

        try{
            const newListServiceResponse: Responses = await this.createNewListService.execute(title, req.user._id)
            
            console.log('insidee create new list usecase')



            const successAddNewListResponse :IAddNewListResponseDTO = {message: newListServiceResponse, error: ''}

            res.status(200).send(successAddNewListResponse)

        }catch(err){
            const errorAddTodoListResponse: IAddNewListResponseDTO = {message: Responses.DBERROR, error: err}
            
            console.log(err)
            
            res.status(418).send(errorAddTodoListResponse)
        }
    }

}