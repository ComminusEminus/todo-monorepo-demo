import mongoose from 'mongoose';
import { IUser } from '@core/entities';
export type IUserInput = {
    firstName: IUser['firstName'];
    lastName: IUser['lastName'];
    userName: IUser['userName'];
    password: IUser['password'];
};
export declare const User: mongoose.Model<IUser, {}, {}, {}, mongoose.Document<unknown, {}, IUser> & IUser & Required<{
    _id: string;
}>, any>;
