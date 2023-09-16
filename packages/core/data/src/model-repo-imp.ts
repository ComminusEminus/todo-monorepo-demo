import { IModelRepository } from '@core/abstractions'
import { DeleteResult } from 'mongodb'
import { Model, HydratedDocument, UpdateWriteOpResult, PopulatedDoc, UnpackedIntersection } from 'mongoose'

export class ModelRespository<T> implements IModelRepository<T> {
    model: Model<T>
    constructor(model: Model<T>) {
        this.model = model
    }

    async create(data: Object): Promise<HydratedDocument<T>> {
        const newDocument = await this.model.create(data)
        return newDocument
    }

    async updateOneRemove(id: string, update: Object): Promise<UpdateWriteOpResult> {
        const updateAddResponse = await this.model.updateOne({userId: id}, { $pull: update})
        return updateAddResponse
    }

    async updateOneAdd(id: string, update: Object | []): Promise<UpdateWriteOpResult> {
        const updateRemoveResponse = await this.model.updateOne({userId: id}, { $push: update})
        return updateRemoveResponse
    }

    async delete(id: string): Promise<DeleteResult> {
        const deleteResponse = await this.model.deleteOne({_id: id})
        return deleteResponse
    }

    async findOneByField(field: Object, populate?: string) {
        if(populate){
            const findOneByFieldResponse = await this.model.findOne(field).populate(populate)
            return findOneByFieldResponse
        }
        const findOneByFieldResponse = await this.model.findOne(field)
        return findOneByFieldResponse
        
    }

    async findById(id: string, populate?: string) {
        if(populate){
            const findOneByFieldResponse = await this.model.findById(id).populate(populate)
            return findOneByFieldResponse
        }else{
            const findOneByFieldResponse = await this.model.findById(id)
            return findOneByFieldResponse
        }
        
    }
}