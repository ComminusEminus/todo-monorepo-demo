import { Request, Response, NextFunction } from 'express';
import { mapUserProfileUpdateRequest, mapUserProfileRequest, mapUserLoginRequest } from '@api/services'
import { User } from '@api/models'
import {Responses,IUpdateUserProfileResponseDTO} from '@core/entities'
import env from 'dotenv'

export const updateUserProfile = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;

    const mappedRequest = mapUserProfileUpdateRequest(body);

    const { _id, firstName, lastName, userName, password, error } = mappedRequest

    if (error) {
        
        const missingDataResponse: IUpdateUserProfileResponseDTO = {message: Responses.MISSING_DATA}
        
        res.status(418).json(missingDataResponse)

    }

    try {
        await User.updateOne(
            {
                _id : _id
            },
            {
                
                firstName: firstName,
                lastName: lastName,
                userName: userName,
                password: password

            });
        const succesfulUserProfileResponse: IUpdateUserProfileResponseDTO = {message: Responses.OK}
        res.json(succesfulUserProfileResponse)
    }catch(err){
        const errorUpdatingUserProfileResponse: IUpdateUserProfileResponseDTO = {message: Responses.DBERROR, error: err}

        res.json(errorUpdatingUserProfileResponse)
    }
}

