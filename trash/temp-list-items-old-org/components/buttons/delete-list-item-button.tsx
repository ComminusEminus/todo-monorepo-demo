import React from 'react'
import { useTheme } from 'styled-components'
import { useDeleteListItemHandler } from '../../hooks/handlers/use-delete-list-item-handler'
import { SvgButton } from '@reactui/buttons'
import {DeleteIconStyle} from '@design/icons'


export const DeleteListItemButton = () => {
    const { deleteListItemHandler } = useDeleteListItemHandler()
    const theme = useTheme()

    return (
        <SvgButton
            viewBox={DeleteIconStyle.viewBox}
            iconWidth={DeleteIconStyle.width}
            iconHeight={DeleteIconStyle.height}
            path={DeleteIconStyle.path}
            type={'button'}
            fill = {'red'}
            onClick = {() => deleteListItemHandler()}
        />
    )
}
