import {useUIContext} from '@todo/ui-context';
import {updateListItem} from '@todo/di'
import {ITodoListItem} from '@todo/entities'
import {IUser} from '@todo/entities'
import {ITodoListItemDescription} from '@todo/todolist-ui-services'

export const useCompleteTodoListItem = () => {
    const {setUpdate, userProfile} = useUIContext();

    const apiHandler = async (originalState: ITodoListItem, newCompleteState: string) => {
        originalState.complete = newCompleteState
        if(!userProfile){
            return;
        }
        try{
            const response = await updateListItem.execute(originalState);
            setUpdate?.(`${originalState.id} complete property has been updated`)
        }catch(err){
            console.log('an error occured updating complete property: ' + err)
        }
    }
    return {apiHandler} as const;
} 