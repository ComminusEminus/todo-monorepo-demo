import React from 'react'
import { useTheme } from 'styled-components'
import { Button } from '@reactui/common'
import { useOpenAddNewListFormHandler } from '../hooks/use-open-add-new-list-form-handler'

export const OpenAddNewListFormButton = () => {
    const { openAddNewListFormHandler, state } = useOpenAddNewListFormHandler()
    const theme = useTheme()

    return (
        <Button
            size={'sm'}
            type={'button'}
            color={theme.colors.secondary.onBase}
            buttonStyle={'tertiary'}
            text={'Add'}
            onClick={openAddNewListFormHandler}
        />
    )

}