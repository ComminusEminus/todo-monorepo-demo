import { ITodoListContainer, Responses, IGetAllListsResponseDTO } from '@core/entities'


export interface IGetAllListsCallSignature{
    (userId: string): Promise<ITodoListContainer | null>
}

export interface IGetAllListsService{
    execute: IGetAllListsCallSignature
}

export class GetAllListsApiUseCase{
    getAllListsService : IGetAllListsService
    constructor(getAllListsService : IGetAllListsService){
        this.getAllListsService = getAllListsService
        
    }

    public async execute(req: any, res: any){
       
        try{
            const getAllListsResponse = await this.getAllListsService.execute(req.user._id)
            console.log("get all lists response ")
            const successGetAllTodoListResponse= {lists: getAllListsResponse, message: Responses.OK, error: ''}
            
            res.json(successGetAllTodoListResponse)
        }catch(err){
            const errorGetAllTodoListsResponse: IGetAllListsResponseDTO = {message: Responses.DBERROR, error: err}

            res.json(errorGetAllTodoListsResponse)
        }

    }


}