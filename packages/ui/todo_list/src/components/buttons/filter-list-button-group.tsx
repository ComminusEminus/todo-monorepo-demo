import React from 'react'
import {ButtonProps, ButtonStyle} from '@design/buttons'
import {Container} from '@design/container'
import styled, {useTheme, css} from 'styled-components'
import {MapTodoListItems} from '../other/map-todo-list-items'
import {ITodoListItemDescription, Filter} from '@core/entities'


const FilterButtonStyle = styled(ButtonStyle)<ButtonProps>`
    border-radius: 0px;
    padding: 5px;
    width: ${props => props.width};
    background: ${props => props.background};
`   

interface IFilterButton{
    mt?: string;
    mb?: string;
    ml?: string;
    mr?: string;
    borderRadius?: string;
    elevation?: string;
    buttonStateWidth?: string;
    type?: 'button' | 'submit'| 'reset'| undefined;
    onClick?: () => void;
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
    background?: string;
    
}

const FilterButton = (props: IFilterButton) => {
    return(
        <FilterButtonStyle
            type = {'button'} 
            buttonStyle = { props.buttonStyle}
            value = {props.value}
            onClick = {props.onClick}
            width = {'100%'}
            background = {props.background}
            color = {props.color}
        >
            {props.text}
        </FilterButtonStyle>
    )
}

export interface IFilterListButtonGroup{
    filterListHandler: (filterString: Filter) => void;
    filterListState?: string;
}

export const FilterListButtonGroup = (props: IFilterListButtonGroup) => {
    const {filterListHandler, filterListState} = props
 
    const theme = useTheme()

    return (
        <>
            <Container
                width = {'100%'}
                flexBasis = {'0'}
                flexGrow = {'0'}
                justifyContent = {'stretch'}
                
            >
                <FilterButton 
                    type = {'button'} 
                    background = {filterListState === Filter.ALL_LIST_ITEMS ? theme.colors.primary.baseFocus : '#ffffff'}
                    text = {'All'}
                    onClick = {() => filterListHandler(Filter.ALL_LIST_ITEMS)}
                />
                <FilterButton 
                    type = {'button'} 
                    background = {filterListState === Filter.COMPLETE_LIST_ITEMS ? theme.colors.primary.baseFocus : '#ffffff'}
                    text = {'Complete'}
                    onClick = {() => filterListHandler(Filter.COMPLETE_LIST_ITEMS)}
                />
                <FilterButton 
                    type = {'button'} 
                    background = {filterListState === Filter.INCOMPLETE_LIST_ITEMS ? theme.colors.primary.baseFocus : '#ffffff'}
                    text = {'Incomplete'}
                    onClick = {() => filterListHandler(Filter.INCOMPLETE_LIST_ITEMS)}
                />
            </Container>
        </>
    )
}