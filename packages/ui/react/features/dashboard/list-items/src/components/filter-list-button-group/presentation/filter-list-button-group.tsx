import React from 'react'
import { useTheme } from 'styled-components'
import { Filter } from '@core/entities'
import { Container, GroupButton } from '@reactui/common'
//import { useFilterListItemsHandler } from '../hooks/use-filter-list-items-handler'

export interface IFilterListButtonGroup{
    filterListHandler: (filterString: Filter) => void; 
    filterListState: string;
}


export const FilterListButtonGroup = ({filterListHandler, filterListState}: IFilterListButtonGroup) => {


    const theme = useTheme()
    return (
        <>
            <Container
                width={'100%'}
                justifyContent={'stretch'}
                alignItems = {'center'}

            >
                <GroupButton
                    type={'button'}
                    background={filterListState === Filter.ALL_LIST_ITEMS ? theme.colors.primary.baseFocus : '#ffffff'}
                    text={'All'}
                    onClick={() => filterListHandler(Filter.ALL_LIST_ITEMS)}
                />
                <GroupButton
                    type={'button'}
                    background={filterListState === Filter.COMPLETE_LIST_ITEMS ? theme.colors.primary.baseFocus : '#ffffff'}
                    text={'Complete'}
                    onClick={() => filterListHandler(Filter.COMPLETE_LIST_ITEMS)}
                />
                <GroupButton
                    type={'button'}
                    background={filterListState === Filter.INCOMPLETE_LIST_ITEMS ? theme.colors.primary.baseFocus : '#ffffff'}
                    text={'Incomplete'}
                    onClick={() => filterListHandler(Filter.INCOMPLETE_LIST_ITEMS)}
                />
            </Container>
        </>
    )

}








/*
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
*/
