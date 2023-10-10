import cookieParser from 'cookie-parser'
import express, {Request, Response, NextFunction, ErrorRequestHandler} from 'express'
import cors from 'cors'
import env from 'dotenv'
env.config({path: '../../../../../.env'})

export class ExpressServer{
    app: any
    database: () => Promise<void>
    listItemRouter: express.Router
    todoListRouter: express.Router
    userRouter: express.Router
    constructor( 
        app: any, 
        database: () => Promise<void>, 
        listItemRouter: express.Router, 
        todoListRouter: express.Router, 
        userRouter: express.Router,
    ){
        this.app = app
        this.database = database
        this.listItemRouter = listItemRouter
        this.userRouter = userRouter
        this.todoListRouter = todoListRouter
    }

    listen(){
        const instance  = this.app()

        instance.use(cookieParser())

        instance.use(express.urlencoded({ extended: true }));

        instance.use(express.json());
        
        instance.use(cors({
          credentials: true,
          origin: `http://localhost:${process.env.CLIENT_PORT}`
        }))

        instance.use((req: Request, res: Response, next: NextFunction)=>{
          console.log(req.originalUrl)
          next()
        })

        instance.use('/listItem', this.listItemRouter)
        instance.use('/list', this.todoListRouter)
        instance.use('/user', this.userRouter)

        instance.listen(process.env.API_PORT, async () => {
          console.log(`Application started on URL http://localhost:${process.env.API_PORT}`);
        });
        instance.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
        
          res.status(500).send('An unknown issue was encountered please try again later')
        })
    }

    async connectdb(){
      await this.database()
    }

} 