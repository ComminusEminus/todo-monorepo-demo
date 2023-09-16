import React from 'react'
import { withReactContext } from 'storybook-react-context';
import type { Meta, StoryObj } from '@storybook/react';
import {ListItem as ListItemComponent} from '../list-item'
import {UIProvider, ListItemProvider} from '@ui/contexts'
import {CompleteState} from '@core/entities'
const meta: Meta<typeof ListItemComponent> = {
    //title: 'design_system/Container',
    component: ListItemComponent,
    tags: ['autodocs'],
    
}

export default meta;

type Story = StoryObj<typeof ListItemComponent>

export const ListItem: Story = {
    args:{
        item:{
            _id: '34234234',
            title: 'TestItem',
            description: 'Test Item Description',
            complete: CompleteState.INCOMPLETE
        }
    },
    decorators: [
        (Story) => (
            <UIProvider>
              <Story />
            </UIProvider>
        ),
    ]
}
