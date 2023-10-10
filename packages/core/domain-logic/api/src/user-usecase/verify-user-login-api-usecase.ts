import {Responses} from '@core/entities'

export class VerifyUserLoginApiUseCase{
    constructor(){}

    public async execute(req: any, res: any){
        const {token} = req.cookies;

        if(token){
            res.json({message: Responses.LOGGED_IN})
        }else{
            res.json({message: Responses.INVALID})
            
        }

    }
}