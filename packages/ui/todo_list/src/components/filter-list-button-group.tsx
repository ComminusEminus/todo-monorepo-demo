import React from 'react'
import {useFilterTodoListItems} from "../hooks/index"
import {ButtonProps, ButtonStyle} from '@design/buttons'
import {Container} from '@design/container'
import styled, {useTheme, css} from 'styled-components'
import {MapTodoListItems} from './map-todo-list-items'
import {ITodoListItemDescription, Filter} from '@core/entities'

const FilterButtonStyle = styled(ButtonStyle)<ButtonProps>``

interface IFilterButton{
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

const FilterButton = (props: IFilterButton) => {
    return(
        <FilterButtonStyle
            type = {props.type} 
            buttonStyle = { props.buttonStyle}
            value = {props.value}
            onClick = {() => props.onClick}
        >
            {props.text}
        </FilterButtonStyle>
    )
}

export interface IFilterListButtonGroup{
    list: ITodoListItemDescription[];
}

export const FilterListButtonGroup = (props: IFilterListButtonGroup) => {
    
    const {filterListHandler, filteredList} = useFilterTodoListItems(props.list)
    const theme = useTheme()

    return (
        <>
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
            <MapTodoListItems list = {filteredList}/>
        </>
    )
}