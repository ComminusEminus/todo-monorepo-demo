import React from 'react'
import {DeleteItemAnimationWrapper} from '@design/animationwrapper'
import {useListItemContext} from '@ui/contexts'
import {Text} from '@design/text'
import {useTheme} from 'styled-components'

/*
update false visibilityState to display nothing and animate out 

*/

interface ITodoListItemComponent{
    children: JSX.Element | JSX.Element[]
}
export const TodoListItemState = (props: ITodoListItemComponent) => {
    const {state} = useListItemContext()
    const {visibilityState} = state
    
    const theme = useTheme()
    return(
        <>
            {
                visibilityState && (
                    <DeleteItemAnimationWrapper animateState = {visibilityState}>
                        {props.children}
                    </DeleteItemAnimationWrapper>
                )
            }
        </>
    )
}
