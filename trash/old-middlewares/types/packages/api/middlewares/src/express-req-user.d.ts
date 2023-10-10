import { IUser } from '@core/entities';
export {};
declare global {
    namespace Express {
        interface Request {
            user: IUser;
        }
    }
}
