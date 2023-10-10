import {expressMongoDbServer} from './config/config-express-mongodb'
import env from 'dotenv'
env.config({path: '../../../../.env'})

expressMongoDbServer.listen()
expressMongoDbServer.connectdb()
