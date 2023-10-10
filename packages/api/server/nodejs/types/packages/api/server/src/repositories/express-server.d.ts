import express from 'express';
export declare class ExpressServer {
    app: any;
    database: () => Promise<void>;
    listItemRouter: express.Router;
    todoListRouter: express.Router;
    userRouter: express.Router;
    constructor(app: any, database: () => Promise<void>, listItemRouter: express.Router, todoListRouter: express.Router, userRouter: express.Router);
    listen(): void;
    connectdb(): Promise<void>;
}
