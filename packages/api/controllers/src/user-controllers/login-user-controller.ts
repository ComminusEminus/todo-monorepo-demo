import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { mapUserLoginRequest } from '@api/services'
import { User, IUserDocument } from '@api/models'
import {Responses, ILoginUserResponseDTO} from '@core/entities'
import env from 'dotenv'

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
    
    res.cookie("token", token, {path: '/', httpOnly: true, secure: true}).send(successResponse)
}
