import React from 'react';
import {UIACTIONS, USER_STATUS, IUIAction, IUIDefaultState} from '@core/entities'

export const UIDefaultState: IUIDefaultState = {
    formType: null,
    selectedTodoListItemId: null,
    selectedTodoListId: null,
    updateTodoListItems: true,
    updateTodoList: true,
    loggedIn: false
}

export const uiReducer = (state: IUIDefaultState, action: IUIAction): IUIDefaultState => {
    
    switch(action.type){
        case UIACTIONS.SELECT_FORM_TYPE :
            return{...state, formType: action.payload}
        case UIACTIONS.SELECT_TODO_LIST_ITEM_BY_ID :
            return {...state, selectedTodoListItemId: action.payload}
        case UIACTIONS.SELECT_TODO_LIST_BY_ID :
            return{...state, selectedTodoListId: action.payload}
        case UIACTIONS.UPDATE_TODO_LIST_ITEMS :
            return{...state, updateTodoListItems: !state.updateTodoListItems}            
        case UIACTIONS.UPDATE_TODO_LIST :
            return{...state, updateTodoList: !state.updateTodoList}            
        case UIACTIONS.LOGGED_IN :
            return{...state, loggedIn: !state.loggedIn}                      
        default: 
            return state;
    }
}