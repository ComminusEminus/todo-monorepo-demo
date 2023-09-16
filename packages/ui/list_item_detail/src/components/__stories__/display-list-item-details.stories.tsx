import React from 'react'
import { withReactContext } from 'storybook-react-context';
import type { Meta, StoryObj } from '@storybook/react';
import {DisplayListItemDetails as DisplayListItemComponent} from '../display-list-item-details'
import {UIProvider, ListItemProvider} from '@ui/contexts'
import {CompleteState} from '@core/entities'
const meta: Meta<typeof DisplayListItemComponent> = {
    //title: 'design_system/Container',
    component: DisplayListItemComponent,
    tags: ['autodocs'],
    
}

export default meta;

type Story = StoryObj<typeof DisplayListItemComponent>

export const DisplayListItemDetails: Story = {
    args:{
        displayItem:{
            _id: '3423423432',
            title: 'Test List Item',
            description: 'Here is where the details of the Todo List Item will be displayed',
            complete: CompleteState.COMPLETED,
        }
    }
}
