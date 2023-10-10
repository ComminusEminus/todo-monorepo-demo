import {  ITodoList, ITodoListContainer } from '@core/entities'
import { Model } from 'mongoose'

export class CreateNewListService{
    listContainer: Model<ITodoListContainer>
    listModel: Model<ITodoList>
    constructor(listContainer: Model<ITodoListContainer>, listModel: Model<ITodoList> ){
        this.listContainer = listContainer;
        this.listModel = listModel
    }

    public async execute(title: string, userId: string){
        const newTodoList = await this.listModel.create({title: title})

        await this.listContainer.updateOne({userId: userId}, { $push: { todoLists: [newTodoList._id] } })

    }

}