import { Request, Response, NextFunction } from 'express';
import {Responses, ILogOutUserResponseDTO} from '@core/entities'
import env from 'dotenv'

export const logoutUser = async (req: Request, res: Response, next: NextFunction) => {
    
    const successLogoutUserResponse: ILogOutUserResponseDTO = {message: Responses.OK}
    res.clearCookie('token', {path: '/', httpOnly: true, secure: true}).send(successLogoutUserResponse)

}

