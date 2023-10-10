import { Responses, IUpdateUserProfileResponseDTO } from '@core/entities'
import {mapUserProfileUpdateRequest} from './mappers/map-user-profile-update-req'

export interface IUpdateUserProfileService{
    execute: (_id: string, firstName: string, lastName:string, userName:string, password: string) => void;
} 

export class UpdateUserProfileApiUseCase{
    updateUserProfileService: IUpdateUserProfileService
    
    constructor(updateUserProfileService: IUpdateUserProfileService){
        this.updateUserProfileService = updateUserProfileService
    
    }

    public async execute(req: any, res: any){
        const { body } = req;

        const {_id, firstName, lastName, userName, password, error} = mapUserProfileUpdateRequest(body)

        if (error) {
        
            const missingDataResponse: IUpdateUserProfileResponseDTO = {message: Responses.MISSING_DATA}
            
            res.status(418).json(missingDataResponse)
    
        }

        try{
            
            await this.updateUserProfileService.execute(_id, firstName, lastName, userName, password)
            const succesfulUserProfileResponse: IUpdateUserProfileResponseDTO = {message: Responses.OK}
            res.json(succesfulUserProfileResponse)

        }catch(err){
            const errorUpdatingUserProfileResponse: IUpdateUserProfileResponseDTO = {message: Responses.DBERROR, error: err}

            res.json(errorUpdatingUserProfileResponse)
        }
    }

}