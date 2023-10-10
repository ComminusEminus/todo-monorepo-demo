import React from 'react'
import { useTheme } from 'styled-components'
import { TextButton, Text, Container } from '@reactui/common'
import { useSelectListHandler } from '../hooks/use-select-list-handler'

export const SelectListButton = () => {
    const { selectListHandler, resultValues } = useSelectListHandler()
    const { listsData, selectedTodoListId } = resultValues
    const theme = useTheme()

    if (listsData) {
        return (
            <TextButton
                width={'100%'}
                onClick={() => selectListHandler(listsData._id)}
                color={theme.colors.neutral.onBackground}
                text={listsData.title}
                buttonStateWidth={'100%'}
                textAlign={'start'}
            />
        )
    } else {
        return (
            <Text text={'...Loading'} color={theme.colors.neutral.onBackground} fontSize={'xs'} fontFamily={'Barlow'} />
        )
    }
}