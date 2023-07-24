import {deleteTodoList} from '@core/di'
import {useUIContext} from '@ui/contexts'

export const useDeleteTodoListHandler = () => {
    const {setUpdate, userProfile} = useUIContext()

    const apiHandler = async (listId: string) => {
        if(!userProfile){
            return;
        }
        try{
            const response = await deleteTodoList.execute(listId, userProfile.id);
            setUpdate?.(`${listId} todo list has been deleted`)
        }catch{
            //set up error boundary
            console.log('An error occured deleting list')
        }
    } 

    return {apiHandler} as const 
}
