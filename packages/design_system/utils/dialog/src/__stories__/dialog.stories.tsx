import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import {Dialog as DialogComponent} from '../Dialog'
import {Container} from '@design/container'
import {Text} from '@design/text'
const meta: Meta<typeof DialogComponent> = {
    //title: 'design_system/Container',
    component: DialogComponent,
    tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof DialogComponent>

const DialogWithContainer = () => {
    return(
        <Container
            width = {'25vw'}
            height = {'25vh'}
        >
            
        </Container>
    )
}

//background colored so it displays default is transparent 
export const Dialog: Story = {
    args:{
        elevation: 'xl',
        children: <Text text = {'This is test text'} color = {'#000000'} fontSize = {'30px'} fontFamily = {'Barlow'}/>
    },
    decorators: [
        (Story) => (
            <Container
                width = {'25vw'}
                height = {'25vh'}
            >
                <Story />
            </Container>
        )
    ]
}

