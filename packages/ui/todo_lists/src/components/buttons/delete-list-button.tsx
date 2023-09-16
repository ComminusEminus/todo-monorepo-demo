import React from 'react'
import {useDeleteTodoListUI} from '../../hooks/ui-interactions/use-delete-todolist-ui'
import {Button} from '@design/buttons'
import {DeleteIconStyle} from '@design/icons'
import {SvgButton} from '@design/buttons'
import {DeleteButton} from '@ui/common'

export const DeleteListButton = () => {
    const {visibilityState, visibilityHandler, deleteListApiState} = useDeleteTodoListUI()

    return(
        <DeleteButton onClick = {visibilityHandler}/>
    )
}