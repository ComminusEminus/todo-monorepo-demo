import React from 'react';
import {VisibilityState} from '@core/entities'
import {LISTS_ACTIONS, ILists_Action, ILists_DefaultState} from '../interfaces/lists-interfaces'

export const Lists_DefaultState: ILists_DefaultState = {
    listsData: null,
    visibilityState: VisibilityState.VISIBLE
}

export const listsReducer = (state: ILists_DefaultState, action:ILists_Action): ILists_DefaultState => {

    switch(action.type){
        case LISTS_ACTIONS.UPDATE_VISIBILITY_STATE:
            if(!state.listsData){
                throw new Error('Lists does not have any data')
            }
            return{...state, visibilityState: VisibilityState.INVISIBLE}
        case LISTS_ACTIONS.ADD_LIST_DATA:
            return {...state, listsData: action.payload}
        default:
            return state;
    }
}