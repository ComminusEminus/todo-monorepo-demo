import {Responses, ILogOutUserResponseDTO} from '@core/entities'

export class LogoutUserApiUseCase{

    public async execute(req: any, res: any) {
        const successLogoutUserResponse: ILogOutUserResponseDTO = {message: Responses.OK}

        res.clearCookie('token', {path: '/', httpOnly: true, secure: true}).send(successLogoutUserResponse)
    }

}