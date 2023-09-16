import {IHttpResponse, IAddNewTodoListItemFormResponse} from '@core/entities'
import { UpdateWriteOpResult, HydratedDocument } from 'mongoose'
import { DeleteResult } from 'mongodb'
export interface IModelRepository<T>{
    create(data: Object) : Promise<HydratedDocument<T>>;
    updateOneAdd(id: string, update: Object) : Promise<UpdateWriteOpResult>;
    updateOneRemove(id: string, update: Object) : Promise<UpdateWriteOpResult>;
    delete(id: string) : Promise<DeleteResult>;
    findOneByField(field: Object, populate?: string) : Promise<any>;
    findById(id: string, populate?: string) : Promise<any>;
}