import React from 'react'
import { SvgButton } from '@design/buttons'
import { useTheme } from 'styled-components'
import {DeleteIconStyle} from '@design/icons'

export interface IDeleteButton{
    onClick: () => void;

}


export const DeleteButton = (props: IDeleteButton) => {
    const theme = useTheme()

    return (
        <SvgButton
            viewBox={DeleteIconStyle.viewBox}
            iconWidth={DeleteIconStyle.width}
            iconHeight={DeleteIconStyle.height}
            path={DeleteIconStyle.path}
            type={'button'}
            fill = {'red'}
            onClick = {() => props.onClick()}
        />
    )
}
