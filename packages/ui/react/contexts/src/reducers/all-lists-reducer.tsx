import React from 'react';

import {ALL_LISTS_ACTIONS, IAll_Lists_Action, IAll_Lists_DefaultState} from '../interfaces/all-lists-interfaces'

export const All_Lists_DefaultState: IAll_Lists_DefaultState = {
    allLists: null,
    update: false
    
}

export const allListsReducer = (state: IAll_Lists_DefaultState, action:IAll_Lists_Action): IAll_Lists_DefaultState => {
    switch(action.type){
        case ALL_LISTS_ACTIONS.ADD_ALL_LISTS:

            return {...state, allLists: action.payload}
        case ALL_LISTS_ACTIONS.UPDATE_ALL_LISTS:
            return {...state, update: !state.update}
        default:
            return state;
    }
}