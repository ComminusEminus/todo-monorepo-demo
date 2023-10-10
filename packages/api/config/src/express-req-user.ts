import {IUser} from '@core/entities'

export {}

declare global {
  namespace Express {
    export interface Request {
      user: IUser;
    }
  }
}