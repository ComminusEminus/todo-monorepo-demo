import React from 'react'
import {Button} from '@design/buttons'
import {useTheme} from 'styled-components'

interface IOpenFormButton{
    onClick: () => void;
}

export const OpenFormButton = (props: IOpenFormButton) => {
    
    const theme = useTheme()

    return (
        <Button 
            size = {'sm'}
            type = {'button'} 
            color = {theme.colors.secondary.onBase}
            buttonStyle = {'tertiary'}
            text = {'Add'}
            onClick = {() => props.onClick()}
        />
    )

}