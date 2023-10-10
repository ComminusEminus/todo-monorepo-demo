import jwt from 'jsonwebtoken';
import {Responses, ILoginUserResponseDTO, IUser } from '@core/entities'
import {mapUserLoginRequest} from './mappers/map-user-login-req'
import env from 'dotenv'

env.config({path: '../../../../../../.env'})


export interface ILoginUserCallSignature{
    (username: string, password: string): Promise<null | IUser>
}

export interface ILoginUserService{
    execute: ILoginUserCallSignature
}
export class LoginUserApiUseCase{
    loginUserService: ILoginUserService
    
    constructor(loginUserService: ILoginUserService){
        this.loginUserService = loginUserService
    
    }

    public async execute(req: any, res: any) {
        const { body } = req;
        const { error, password, username } = mapUserLoginRequest(body)
        let token

        if (error) {
        
            const missingDataResponse: ILoginUserResponseDTO = {message: Responses.MISSING_DATA}
    
            res.status(418).json({ message: 'Missing username or password from request' })
        }
        
        const validateUser = await this.loginUserService.execute(username, password)

        if (!validateUser) {
        
            const missingDataResponse: ILoginUserResponseDTO = {message: Responses.NO_USER}
    
            return res.json({ message: missingDataResponse })
        }

        if(process.env.SECRET_KEY){
            token = jwt.sign({id: validateUser._id}, process.env.SECRET_KEY);
        }else{
            throw new Error('Secret key has not been set')
        }
        

        const successResponse: ILoginUserResponseDTO = {message: Responses.OK, error: null}
    
        res.cookie("token", token, {path: '/', httpOnly: true, secure: true}).send(successResponse)

    }

}