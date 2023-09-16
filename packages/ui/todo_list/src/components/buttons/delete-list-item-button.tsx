import React from 'react'
import { useDeleteTodoListItemUI } from '../../hooks/ui-interactions/use-delete-todolist-items-ui'
import { SvgButton } from '@design/buttons'
import { useTheme } from 'styled-components'
import {DeleteButton} from '@ui/common'

export const DeleteListItemButton = () => {
    const { visibilityHandler } = useDeleteTodoListItemUI()
    const theme = useTheme()

    return (
        <DeleteButton onClick = {visibilityHandler}/>
    )
}
