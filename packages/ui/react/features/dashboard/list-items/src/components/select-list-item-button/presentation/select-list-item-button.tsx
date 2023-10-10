import React from 'react'
import { useTheme } from 'styled-components'
import { TextButton } from '@reactui/common'
import { useSelectListItemHandler } from '../hooks/use-select-list-item-handler'

export const SelectListItemButton = () => {
    const { selectListItemHandler, resultValues } = useSelectListItemHandler()
    const { listItemData } = resultValues

    const theme = useTheme()
    if(!listItemData){
        return(
            <></>
        )
    }
    return (
        <TextButton
            color={theme.colors.neutral.onSurface}
            text={listItemData.title}
            onClick={selectListItemHandler}
            width={'100%'}
            buttonStateWidth={'100%'}
            textAlign={'left'}
        />
    )
}
