import { Request, Response, NextFunction } from 'express';
import { mapUserProfileRequest} from '@api/services'
import { User, TodoListContainer } from '@api/models'
import {Responses, ICreateNewUserResponseDTO} from '@core/entities'
import env from 'dotenv'

export const createNewUser = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const mappedRequest = mapUserProfileRequest(body);

    const { firstName, lastName, userName, password, error } = mappedRequest

    if (error) {
        const missingDataResponse: ICreateNewUserResponseDTO = {message: Responses.MISSING_DATA}

        res.status(418).json(missingDataResponse)
    }

    try {
        const newUser = await User.create(
            {
                firstName: firstName,
                lastName: lastName,
                userName: userName,
                password: password
            })
        await TodoListContainer.create({ userId: newUser._id })

        const successNewUserCreationResponse : ICreateNewUserResponseDTO = {message: Responses.OK}

        res.json(successNewUserCreationResponse)

    } catch (err) {
        
        const errorCreatingNewUserResponse: ICreateNewUserResponseDTO = {message: Responses.DBERROR, error: err}

        res.json(errorCreatingNewUserResponse)
    }

}
