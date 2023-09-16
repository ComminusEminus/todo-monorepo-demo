import type { Meta, StoryObj } from '@storybook/react';
import {Container as ContainerComponent} from '../Container'

const meta: Meta<typeof ContainerComponent> = {
    //title: 'design_system/Container',
    component: ContainerComponent,
    tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof ContainerComponent>

//background colored so it displays default is transparent 
export const Container: Story = {
    args:{
        background: '#859fdb',
        width: '25vh',
        height: '25vh'
    }
}

export const ContainerBorderRadius: Story = {
    args:{
        ...Container.args,
        borderRadius: '25px'
    }
}
