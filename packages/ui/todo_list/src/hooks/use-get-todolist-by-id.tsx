import {useUIContext} from '@todo/ui-context'
import {mapToListDescription, ITodoListItemDescription} from '@todo/todolist-ui-services'
import {getTodoListById} from '@todo/di'
import {useEffect, useState} from 'react'


export const useGetTodoListById = () => {
    const {viewTodoList, userProfile} = useUIContext();
    const [todoList, setTodoList] = useState<ITodoListItemDescription[] | undefined>(undefined)

    const getTodoList = async () => {
        if(!userProfile){
            return;
        }
        if(!viewTodoList){
            return;
        }
        try{
            const response = await getTodoListById.execute(viewTodoList)
            const mappedResponse = mapToListDescription(response)
            setTodoList(mappedResponse)
        }catch(err){
            //set up error boundary
            console.log('an error occured getting all todoLists')
        }
    }
    useEffect(() => {
        getTodoList()
    }, [viewTodoList])

    return {todoList} as const 
}