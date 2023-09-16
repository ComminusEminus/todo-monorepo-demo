import React, {createContext, useState, useContext, Reducer, Dispatch} from 'react';
import {ITodoListItem, CompleteState, VisibilityState, IList_Item_DefaultState, LIST_ITEM_ACTIONS, IList_Item_Action} from '@core/entities'


export const List_Item_DefaultState: IList_Item_DefaultState = {
    listItemData: null,
    completeState: null,
    visibilityState: VisibilityState.VISIBLE
}

export const listItemReducer = (state: IList_Item_DefaultState, action:IList_Item_Action): IList_Item_DefaultState => {
 
    switch(action.type){
        case LIST_ITEM_ACTIONS.SET_COMPLETE_STATE: 
            return {...state, completeState: action.payload}
        /*case LIST_ITEM_ACTIONS.UPDATE_COMPLETE_STATE:
            
            if(!state.listItemData){
                throw new Error('List Item does not have any data')
            }
            console.log(state.listItemData.complete)
            if(state.listItemData.complete === CompleteState.INCOMPLETE){
                return {...state, completeState: CompleteState.COMPLETED}
            }else{
                return {...state, completeState: CompleteState.INCOMPLETE}
            }*/
            
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