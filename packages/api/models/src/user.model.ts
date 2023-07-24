import mongoose, {Types, Schema, Model, Document, InferSchemaType } from 'mongoose';
import crypto from 'crypto';
//import {IUser as IUserBase} from '@core/entities'
export interface IUser{
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  hash: string;
  salt: string;
}

export interface IUserDocument extends IUser, Document{
    isValidPassword(password: string): Promise<boolean>;
}




export type IUserInput = {
    firstName: IUser['firstName']
    lastName: IUser['lastName']
    userName: IUser['userName']
    password: IUser['password']
}

const usersSchema = new Schema<IUserDocument>(
    {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      userName: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      hash: {
        type: String,
      },
      salt: {
        type: String,
      },
    },
    {
      collection: 'users',
      timestamps: true,
    },
);

usersSchema.pre(
  'save',
  async function(next) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(this.password, this.salt, 1000, 64, `sha512`).toString(`hex`);
    next();
  }
);

usersSchema.methods.isValidPassword = async function(this: IUserDocument, password: string) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString(`hex`);
  return this.hash === hash;
}



export const User = mongoose.model<IUserDocument>('User', usersSchema);


