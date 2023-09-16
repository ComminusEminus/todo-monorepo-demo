import React from 'react'
import {useSelectTodoListUI} from '../../hooks/ui-interactions/use-select-todolist-ui'
import {useTheme} from 'styled-components'
import {Text} from '@design/text'
import {Container} from '@design/container'
import {useListsContext} from '@ui/contexts'
import {SelectButton} from '@ui/common'
import {TextButton} from '@design/buttons'

export const SelectListButton = () => {
    const {selectListForDetailViewHandler, resultValues} = useSelectTodoListUI()
    const {listsData, selectedTodoListId} = resultValues
    const theme = useTheme()
    
    if(listsData){
        return(
            <TextButton
                width = {'100%'}
                onClick = {() => selectListForDetailViewHandler(listsData._id)}
                color = {theme.colors.neutral.onBackground}
                text = {listsData.title}
                buttonStateWidth = {'100%'}
                textAlign = {'start'}
            />
        )
    }else{
        return(
            <Text text = {'...Loading'} color = {theme.colors.neutral.onBackground} fontSize = {'xs'} fontFamily = {'Barlow'}/>
        )
    }
}