interface IReqUser {
    firstName?: string;
    lastName?: string;
    userName?: string;
    password?: string;
    _id?: string;
}
export {};
declare global {
    namespace Express {
        interface Request {
            user: IReqUser;
        }
    }
}
