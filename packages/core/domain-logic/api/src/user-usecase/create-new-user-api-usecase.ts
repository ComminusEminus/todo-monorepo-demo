import { Responses, ICreateNewUserResponseDTO, IUser} from '@core/entities'
import { mapCreateNewUserRequest } from './mappers/map-create-new-user-req';

export interface ICreateNewUserService{
    execute: (firstName: string, lastName: string, userName: string, password: string) => void;
}

export class CreateNewUserApiUseCase{
    createNewUserService: ICreateNewUserService
    
    constructor(createNewUserService: ICreateNewUserService){
        this.createNewUserService = createNewUserService
    }

    public async execute(req: any, res: any){
          
        const {body} = req;

        const {firstName, lastName, userName, password, error } = mapCreateNewUserRequest(body)

        if (error) {
            const missingDataResponse: ICreateNewUserResponseDTO = {message: Responses.MISSING_DATA}
    
            res.status(418).json(missingDataResponse)
        }

        try{
            const newUser = await this.createNewUserService.execute(firstName, lastName, userName, password)

            const successNewUserCreationResponse : ICreateNewUserResponseDTO = {message: Responses.OK}

            res.json(successNewUserCreationResponse)
        }catch(err){
            const errorCreatingNewUserResponse: ICreateNewUserResponseDTO = {message: Responses.DBERROR, error: err}

            res.json(errorCreatingNewUserResponse)
        }

    }

}