import React from 'react'
import {CardStyle, CardStyleProps} from './Card.style'
import {Container} from '@design/container'
import {Text} from '@design/text'
import {useTheme} from 'styled-components'

export interface CardProps extends CardStyleProps {
    headline?: string;
    subHeader?: string;
    content?: string;
    actionComponents?: JSX.Element | JSX.Element[];
}
export const Card = (props: CardProps): JSX.Element => {
    const theme = useTheme()
    return (
        <CardStyle 
            cardType = {props.cardType} 
            borderRadius = {props.borderRadius} 
            display = {props.display}>
            {
                props.headline && <Container fontFamily = "'Albert Sans', sans-serif" flexGrow = {1} flexShrink = {2} justifyContent = 'flex-start' alignItems = 'center' pl = "5%" pr = "5%">
                    <Text text = {props.headline} color = {theme.colors.neutral.onBackground} fontSize = {'25px'} fontFamily = {'Albert_Sans'} />
                </Container>
            }
            {
                props.subHeader && <Container fontFamily = "'Barlow', sans-serif" flexGrow = {1} flexShrink = {2} justifyContent = 'flex-start' alignItems = 'center' pl = "5%" pr = "5%">
                    <Text text = {props.subHeader} color = {theme.colors.neutral.onBackground} fontSize = {'15px'} fontFamily = {'Barlow'} />
                </Container>    
            }
            {
                props.content && <Container fontFamily = "'Barlow', sans-serif" flexGrow = {4} flexShrink = {0} justifyContent = 'flex-start' alignItems = 'center' pl = "5%" pr = "5%">
                    <Text text = {props.content} color = {theme.colors.neutral.onBackground} fontSize = {'12px'} fontFamily = {'Barlow'} />
                </Container>
            }
            {
                props.actionComponents && <Container flexGrow = {1} flexShrink = {2} justifyContent = 'flex-end' alignItems = 'center' pl = "5%" pr = "5%">
                    {props.actionComponents}
                </Container>
            }
        </CardStyle>
    )
}