import React from 'react'
import { SvgButton } from '@reactui/common'
import {DeleteIconStyle} from '@design/icons'
import {useDeleteListHandler} from '../hooks/use-delete-list-handler'


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