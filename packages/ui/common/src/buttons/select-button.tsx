import React from 'react'
//import {useSelectTodoListItem} from '../../hooks/ui-interactions/use-select-todolist-item'
import {Container} from '@design/container'
import {Text} from '@design/text'
import {ButtonProps, ButtonStyle} from '@design/buttons'
import styled, {useTheme, css} from 'styled-components'

export const SelectListButtonStyle = styled(ButtonStyle)<ButtonProps>`
    border-radius: 0px;
    padding: 20px 50% 20px 20px;
    width: ${props => props.width};
    background: ${props => props.background};
    font-family: ${props => props.fontFamily};
    border: none;
        
`

export interface ISelectListButton{
    mt?: string;
    mb?: string;
    ml?: string;
    mr?: string;
    borderRadius?: string;
    elevation?: string;
    buttonStateWidth?: string;
    type?: 'button' | 'submit'| 'reset'| undefined;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
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
    fontFamily?: string;
    
    
}

export const SelectButton = (props: ISelectListButton) => {
    return(
        <SelectListButtonStyle
            type = {'button'} 
            buttonStyle = { props.buttonStyle}
            value = {props.value}
            onClick = {() => props.onClick}
            width = {'100%'}
            background = {props.background}
            color = {props.color}
            fontFamily = {props.fontFamily}
            display = {'flex'}
            justifyContent = {'flex-end'}

        >
            {props.text}
        </SelectListButtonStyle>
    )
}

/*
export const SelectListItemButton = () => {
    const {selectListItemForDetailViewHandler, resultValues} = useSelectTodoListItem()
    const {listItemData} = resultValues

    const theme = useTheme()
    if(listItemData){
        return(
            <SelectListButton 
                //background = {theme.colors.neutral.surfaceLow} 
                color = {theme.colors.neutral.onSurfaceVariant} 
                fontFamily = {'Albert_Sans'}
                text = {listItemData.title}
                onClick = {selectListItemForDetailViewHandler}
            />
        )
    }else{
        return(
            <Text text = {'...Loading'} color = {theme.colors.neutral.onBackground} fontSize = {'xs'} fontFamily = {'Barlow'}/>
        )
    }

}


<Container onClick = {selectListItemForDetailViewHandler} flexDirection = {'column'}>
                <Text text = {listItemData.title} color = {theme.colors.neutral.onBackground} fontSize = {'xs'} fontFamily = {'Barlow'}/>
            </Container>

*/