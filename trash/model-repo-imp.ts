import { IModelRepository } from './model-repository'
import { DeleteResult } from 'mongodb'
import { HydratedDocument } from 'mongoose'

export class ModelRespository implements IModelRepository {
    model: any
    constructor(model: any) {
        this.model = model
    }

    async create(data: Object): Promise<Object> {
        const newDocument = await this.model.create(data)

        return newDocument
    }

    async update(id: string, update: Object){
        await this.model.updateOne(
            {
                _id: id,
            },
            {
                update
            }
        )
    }

    updatePush(id: any, addToSet: Object){
        this.model.updateOne(
            {
                _id: id
            }, 
            { 
                $addToSet: addToSet 
            }
        )
    }

    updatePull(id: any, pull: Object){
        this.model.updateOne(
            {
                _id: id
            }, 
            { 
                $pull: pull 
            }
        )
    }
   

    async delete(id: string){
        await this.model.deleteOne({_id: id})

    }

    async findByField(query: Object, populate?: string): Promise<Object | null> {
        if(populate){
            const foundDocument = this.model.findOne(query).populate(populate)
        
            return foundDocument
        }
        
        const foundDocument = this.model.findOne(query).populate(populate)
        
        return foundDocument

        
    }

    async findById(id: string, populate?: string): Promise<Object | null> {
        if(populate){
            const foundDocument =  await this.model.findById(id).populate(populate)

            return foundDocument    
        }

        const foundDocument =  await this.model.findById(id)

        return foundDocument
    }
}