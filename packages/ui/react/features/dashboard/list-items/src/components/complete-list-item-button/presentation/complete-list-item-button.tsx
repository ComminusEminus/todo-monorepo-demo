import React from 'react'
import { useTheme } from 'styled-components'
import { CompleteState } from '@core/entities'
import { CompleteIconStyle } from '@design/icons'
import { Text, SvgButton } from '@reactui/common'
import { useCompleteListItemHandler } from '../hooks/use-complete-list-item-handler'

export const CompleteListItemButton = () => {
    const { listItemData, completeHandler, completeApiState } = useCompleteListItemHandler()
    const theme = useTheme()
    if(!listItemData){
        return (
            <></>
        )
    }
    return (
        <SvgButton
            viewBox={CompleteIconStyle.viewBox}
            iconWidth={CompleteIconStyle.width}
            iconHeight={CompleteIconStyle.height}
            path={CompleteIconStyle.path}
            type={'button'}
            fill={listItemData.complete === CompleteState.INCOMPLETE ? theme.colors.semantic.error : theme.colors.semantic.success}
            onClick={completeHandler}
        />
    )

}
