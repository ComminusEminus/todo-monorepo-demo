import React from 'react'
import {useCompleteTodoListItemUI} from '../../hooks/ui-interactions/use-complete-todolist-items-ui'
import {CompleteState} from '@core/entities'
import {SvgButton} from '@design/buttons'
import {useTheme} from 'styled-components'
import {CompleteIconStyle} from '@design/icons'
import {Text} from '@design/text'

export const CompleteListItemButton = () => {
    const {listItemData, completeHandler, completeApiState} = useCompleteTodoListItemUI()
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
