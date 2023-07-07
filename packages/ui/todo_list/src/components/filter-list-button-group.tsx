import React from 'react'
import {useFilterTodoListItems} from "@todo/todo-list"
import {Filter} from '@todo/entities'
import {Button, ButtonProps, ButtonStyleProps, ButtonStyle} from '@design/buttons'
import {Container} from '@design/container'
import styled, {useTheme, css} from 'styled-components'


const FilterButtonStyle = styled(ButtonStyle)<ButtonStyleProps>``

interface FilterButton extends ButtonStyleProps{
    mt?: string;
    mb?: string;
    ml?: string;
    mr?: string;
    borderRadius?: string;
    elevation?: string;
    buttonStateWidth?: string;
    type?: 'button' | 'submit'| 'reset'| undefined;
    onClick?: (event: React.MouseEvent) => void;
    size?: string;
    alignSelf?: string;
    width?: string;
    children?: JSX.Element | JSX.Element[] | string;
    icon?: string;
    buttonStyle?: string;
    display?: string;
    color?: string;
    text?: string;
    value?: string;
}

const FilterButton = (props: FilterButton) => {
    return(
        <FilterButtonStyle
            type = {props.type} 
            buttonStyle = { props.buttonStyle}
            value = {props.value}
            onClick = {props.onClick}
        >
            {props.text}
        </FilterButtonStyle>
    )
}

export const FilterListButtonGroup = () => {
    const {filterListHandler} = useFilterTodoListItems()
    const theme = useTheme()

    return (
        <Container>
            <FilterButton size = {'sm'} 
                type = {'button'} 
                buttonStyle = { 'primary'}
                text = {'All'}
                value = {Filter.ALL_LIST_ITEMS}
                onClick = {() => filterListHandler}
            />
            <FilterButton size = {'sm'} 
                type = {'button'} 
                buttonStyle = {'primary'}
                text = {'Complete'}
                value = {Filter.COMPLETE_LIST_ITEMS}
                onClick = {() => filterListHandler}
            />
            <FilterButton size = {'sm'} 
                type = {'button'} 
                buttonStyle = { theme.colors.primary.base }
                text = {'Incomplete'}
                value = {Filter.INCOMPLETE_LIST_ITEMS}
                onClick = {() => filterListHandler}
            />
        </Container>
    )
}