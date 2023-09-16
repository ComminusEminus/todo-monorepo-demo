import { Request, Response, NextFunction } from 'express';
export declare const createNewUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const loginUser: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const logoutUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const updateUserProfile: (req: Request, res: Response, next: NextFunction) => Promise<void>;
