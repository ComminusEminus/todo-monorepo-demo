import React from 'react'
import {useTheme} from 'styled-components'
import {useOpenAddNewListFormHandler} from '../../hooks/handlers/use-open-add-new-list-form-handler'
import {Button} from '@reactui/common'

export const OpenAddNewListFormButton = () => {
    const {openAddNewListItemFormHandler, state} = useOpenAddNewListItemFormHandler()
    const theme = useTheme()

    return (
        <Button
            size = {'sm'}
            type = {'button'} 
            color = {theme.colors.secondary.onBase}
            buttonStyle = {'tertiary'}
            text = {'Add'}
            onClick = {useOpenAddNewListFormHandler}
        />
    )

}