import React from 'react';
import {SELECTED_LIST_ACTIONS, ISelected_List_Action, ISelectedList_DefaultState} from '../interfaces/selected-list-interfaces'

 

export const SelectedList_DefaultState: ISelectedList_DefaultState = {
    selectedList: null,
    filteredList: null,
    update: false
}

export const selectedListReducer = (state: ISelectedList_DefaultState, action:ISelected_List_Action): ISelectedList_DefaultState => {

    switch(action.type){
        case SELECTED_LIST_ACTIONS.UPDATE_SELECTED_LIST:
            console.log('inside update selectedlist')
            return{...state, selectedList: action.payload}
        case SELECTED_LIST_ACTIONS.UPDATE_FILTERED_LIST:
            return{...state, filteredList: action.payload}
        case SELECTED_LIST_ACTIONS.UPDATE_LIST:
            return{...state, update: !state.update}
        default:
            return state;
    }
}