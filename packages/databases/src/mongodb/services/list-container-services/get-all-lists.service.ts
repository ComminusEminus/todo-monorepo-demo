import { ITodoListContainer } from '@core/entities'
import { Model } from 'mongoose'


export class GetAllListsService{
    listContainer: Model<ITodoListContainer>
    constructor(listContainer: Model<ITodoListContainer> ){
        this.listContainer = listContainer;
        
    }

    public async execute(userId: string): Promise<ITodoListContainer | null>{
        try{
            const getAllLists = await this.listContainer.findOne({userId: userId}).populate('todoLists')
            
            
            
            return getAllLists

        }catch{
            return null
        }
    }

}