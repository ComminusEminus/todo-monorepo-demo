import React from 'react'
import {DeleteItemAnimationWrapper} from '@design/animationwrapper'
import {useListsContext} from '@ui/contexts'

interface IListStateWrapper{
    children: JSX.Element | JSX.Element[]
}


export const ListsStateWrapper = (props: IListStateWrapper) => {
    const {visibilityState} = useListsContext()
    
    if(visibilityState){
        return(
            <DeleteItemAnimationWrapper animateState = {visibilityState}>
                {props.children}
            </DeleteItemAnimationWrapper>
        )
    }else{
        return(
            <p>Loading</p>
        )
    }
    
}