import { ITodoList } from '@core/entities'
import { Model} from 'mongoose'

export class GetListByIdService{
    listModel: Model<ITodoList>
    constructor(listModel: Model<ITodoList> ){
        this.listModel = listModel;
        
    }

    public async execute(listId: string): Promise<ITodoList | null>{
        const getListById = this.listModel.findById(listId).populate('listItems')
        console.log(getListById)
        return getListById
    }

}