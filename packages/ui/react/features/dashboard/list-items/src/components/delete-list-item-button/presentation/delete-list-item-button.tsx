import React from 'react'
import { useTheme } from 'styled-components'
import {DeleteIconStyle} from '@design/icons'
import { SvgButton } from '@reactui/common'
import { useDeleteListItemHandler } from '../hooks/use-delete-list-item-handler'


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
