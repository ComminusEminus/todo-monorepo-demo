import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { 
    mapUserProfileUpdateRequest, 
    mapUserProfileRequest, 
    mapUserLoginRequest 
} from '@api/services'
import { User, IUserDocument, TodoListContainer } from '@api/models'
import {
    Responses,
    ICreateNewUserResponseDTO,
    ILoginUserResponseDTO,
    ILogOutUserResponseDTO,
    IUpdateUserProfileResponseDTO
} from '@core/entities'
import env from 'dotenv'

env.config({path: '../../server/.env'})

/*
removed module Isession data from on page declaration from module located in middlewares if anything goes wrong
*/

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



export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    console.log(body)
    const { error, password, username } = mapUserLoginRequest(body);
    
    if (error) {
        
        const missingDataResponse: ILoginUserResponseDTO = {message: Responses.MISSING_DATA}

        res.status(418).json({ message: 'Missing username or password from request' })
    }

    const user: IUserDocument | null = await User.findOne({ userName: username });

    if (!user) {
        
        const missingDataResponse: ILoginUserResponseDTO = {message: Responses.NO_USER}

        return res.json({ message: missingDataResponse })
    }
    const validate = await user.isValidPassword(req.body.password);
    
    if (!validate) {
        const userNotfoundError: ILoginUserResponseDTO = {message: Responses.NO_USER} 

        res.json(userNotfoundError)
    }

    const token = jwt.sign({id: user._id}, 'TOPSY_CRETS');

    const successResponse: ILoginUserResponseDTO = {message: Responses.OK, error: null}
    console.log(successResponse)
    res.cookie("token", token, {path: '/', httpOnly: true, secure: true}).send(successResponse)
}




export const logoutUser = async (req: Request, res: Response, next: NextFunction) => {
    
    const successLogoutUserResponse: ILogOutUserResponseDTO = {message: Responses.OK}
    res.cookie("", "", { expires: new Date()}).json(successLogoutUserResponse)

}




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

