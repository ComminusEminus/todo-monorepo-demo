import { Request, Response, NextFunction } from 'express';
export declare const addNewTodoList: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const deleteTodoList: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getTodoListById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getAllTodoLists: (req: Request, res: Response, next: NextFunction) => Promise<void>;
