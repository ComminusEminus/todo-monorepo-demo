import {useUIContext} from '@ui/contexts';
import {updateListItem} from '@core/di'
import {ITodoListItem} from '@core/entities'
import {IUser, ListItemStatus} from '@core/entities'


export const useCompleteTodoListItem = () => {
    const {setUpdate, userProfile} = useUIContext();

    const apiHandler = async (originalState: ITodoListItem, newCompleteState: ListItemStatus) => {
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
    return {apiHandler} ;
} 