import React from 'react'
import {Button} from '@design/buttons'
import {useTheme} from 'styled-components'
import {useOpenAddNewListItemForm} from '../../hooks/ui-interactions/use-open-new-list-item-form'
import {OpenFormButton} from '@ui/common'
//!!!!!! Remove component
export const OpenAddNewTodoListItemFormButton = () => {
    const {openAddNewListItemFormHandler, state} = useOpenAddNewListItemForm()
    const theme = useTheme()

    return (
        <OpenFormButton onClick = {openAddNewListItemFormHandler}/>
    )

}