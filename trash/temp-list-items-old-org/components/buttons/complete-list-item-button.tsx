import React from 'react'
import {useCompleteListItemHandler} from '../../hooks/handlers/use-complete-list-item-handler'
import {CompleteState} from '@core/entities'
import {SvgButton} from '@reactui/buttons'
import {useTheme} from 'styled-components'
import {CompleteIconStyle} from '@design/icons'
import {Text} from '@reactui/text'

export const CompleteListItemButton = () => {
    const {listItemData, completeHandler, completeApiState} = useCompleteListItemHandler()
    const theme = useTheme()
    if(!listItemData){
        return(
            <Text text = {'...Loading'} color = {theme.colors.neutral.onBackground} fontSize = {theme.space.sm} fontFamily = {'Albert_Sans'} />
        )
    }else{
        return (
            <SvgButton 
                viewBox =  {CompleteIconStyle.viewBox}
                iconWidth =  {CompleteIconStyle.width}
                iconHeight =  {CompleteIconStyle.height}
                path =  {CompleteIconStyle.path}
                type = {'button'} 
                fill = {listItemData.complete === CompleteState.INCOMPLETE? theme.colors.semantic.error : theme.colors.semantic.success}
                onClick = {completeHandler}
            />
        )
    }
    
}
