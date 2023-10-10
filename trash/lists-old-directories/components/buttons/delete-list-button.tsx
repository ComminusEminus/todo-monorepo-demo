import React from 'react'
import {useDeleteListHandler} from '../../hooks/handlers/use-delete-list-handler'
import { SvgButton } from '@reactui/buttons'
import {DeleteIconStyle} from '@design/icons'
import { useTheme } from 'styled-components'

export const DeleteListButton = () => {
    const {deleteListHandler, deleteListApiState} = useDeleteListHandler()

    return (
        <SvgButton
            viewBox={DeleteIconStyle.viewBox}
            iconWidth={DeleteIconStyle.width}
            iconHeight={DeleteIconStyle.height}
            path={DeleteIconStyle.path}
            type={'button'}
            fill = {'red'}
            onClick = {() => deleteListHandler()}
        />
    )
}