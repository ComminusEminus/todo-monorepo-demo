import React from 'react'
import {DeleteItemAnimationWrapper} from '@design/animationwrapper'
import {useListItemContext} from '@ui/contexts'
import {Text} from '@design/text'
import {useTheme} from 'styled-components'

interface ITodoListItemComponent{
    children: JSX.Element | JSX.Element[]
}
export const TodoListItemState = (props: ITodoListItemComponent) => {
    const {visibilityState} = useListItemContext()
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
            {
                !visibilityState && (
                    <Text text = {'...Loading'} color = {theme.colors.neutral.onBackground} fontSize = {'xs'} fontFamily = {'Albert-Sans'} />
                )
            }
        </>
    )
}