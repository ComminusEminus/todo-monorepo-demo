import type { Meta, StoryObj } from '@storybook/react';
import {Card as CardComponent} from '../Card'

const meta: Meta<typeof CardComponent> = {
    //title: 'design_system/Container',
    component: CardComponent,
    tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof CardComponent>

export const Card: Story = {
    args:{
        headline: 'Headline',
        subHeader: 'Sub-Header',
        content: 'The is the content section.',
    }
}

export const CardShadow: Story = {
    args:{
        ...Card.args,
        cardType: 'shadow',
    }
}

export const CardFilled: Story = {
    args:{
        ...Card.args,
        cardType: 'filled',
    }
}

export const CardOutline: Story = {
    args:{
        ...Card.args,
        cardType: 'outline',
    }
}
