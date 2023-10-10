import React from 'react'
import { useTheme } from 'styled-components'
import { Button } from '@reactui/common'
import { useOpenAddNewListItemFormHandler } from '../hooks/use-open-new-list-item-form-handler'


export const OpenAddNewTodoListItemFormButton = () => {
    const theme = useTheme()

    const { openAddNewListItemFormHandler } = useOpenAddNewListItemFormHandler()

    return (
        <Button
            size={'sm'}
            type={'button'}
            color={theme.colors.secondary.onBase}
            buttonStyle={'tertiary'}
            text={'Add'}
            onClick={openAddNewListItemFormHandler}
        />
    )
}