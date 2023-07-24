import { Request, Response, NextFunction } from 'express';
export declare const addNewListItem: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const deleteListItem: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getTodoListItemById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const updateListItem: (req: Request, res: Response, next: NextFunction) => Promise<void>;
