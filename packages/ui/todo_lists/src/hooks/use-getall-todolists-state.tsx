import {getAllTodoLists} from '@core/di'
import {mapToListsDescription, IMapToListDescription, ITodoListAsListDescription} from '@ui/todo-lists'
import {useUIContext} from '@ui/contexts'
import {useState, useEffect} from 'react'



export const useGetAllTodoListsState = () => {
    const {userProfile, update} = useUIContext()
    const [todoLists, setTodoLists] = useState<ITodoListAsListDescription[] | undefined>(undefined)

    const getTodoLists = async () => {
        if(!userProfile){
            return;
        }
        try{
            const response: IMapToListDescription = await getAllTodoLists.execute(userProfile.userName)
            const mappedResponse: ITodoListAsListDescription[] = mapToListsDescription(response)
            setTodoLists(mappedResponse)
        }catch(err){
            //set up error boundary
            console.log('an error occured getting all todoLists')
        }
    }

    useEffect(() => {
        getTodoLists()
    }, [update])
    

    return {todoLists} as const 
}