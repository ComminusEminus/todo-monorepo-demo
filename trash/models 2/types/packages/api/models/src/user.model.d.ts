import mongoose, { Types, Document } from 'mongoose';
export interface IUser {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    hash: string;
    salt: string;
}
export interface IUserDocument extends IUser, Document {
    isValidPassword(password: string): Promise<boolean>;
}
export type IUserInput = {
    firstName: IUser['firstName'];
    lastName: IUser['lastName'];
    userName: IUser['userName'];
    password: IUser['password'];
};
export declare const User: mongoose.Model<IUserDocument, {}, {}, {}, mongoose.Document<unknown, {}, IUserDocument> & IUserDocument & {
    _id: Types.ObjectId;
}, any>;
