import React from 'react'
import {useTheme} from 'styled-components'
import {useOpenAddNewListItemFormHandler} from '../../hooks/handlers/use-open-new-list-item-form-handler'
import {Button} from '@reactui/common'

export const OpenAddNewTodoListItemFormButton = () => {
    const {openAddNewListItemFormHandler, state} = useOpenAddNewListItemFormHandler()
    const theme = useTheme()

    return (
        <Button
            size = {'sm'}
            type = {'button'} 
            color = {theme.colors.secondary.onBase}
            buttonStyle = {'tertiary'}
            text = {'Add'}
            onClick = {openAddNewListItemFormHandler}
        />
    )

}