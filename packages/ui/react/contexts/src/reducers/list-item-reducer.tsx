import React from 'react';
import { VisibilityState} from '@core/entities'
import { IList_Item_DefaultState, LIST_ITEM_ACTIONS, IList_Item_Action} from '../interfaces/list-item-interfaces'


export const List_Item_DefaultState: IList_Item_DefaultState = {
    listItemData: null,
    completeState: null,
    visibilityState: VisibilityState.VISIBLE
}

export const listItemReducer = (state: IList_Item_DefaultState, action:IList_Item_Action): IList_Item_DefaultState => {
 
    switch(action.type){
        case LIST_ITEM_ACTIONS.SET_COMPLETE_STATE: 
            return {...state, completeState: action.payload}
        case LIST_ITEM_ACTIONS.UPDATE_VISIBILITY_STATE:
            if(!state.listItemData){
                throw new Error('List Item does not have any data')
            }
            return{...state, visibilityState: VisibilityState.INVISIBLE}
        case LIST_ITEM_ACTIONS.ADD_LIST_ITEM_DATA:
            return{...state, listItemData: action.payload}
        default:
            return state;
    }
}