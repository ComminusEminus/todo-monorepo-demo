import React from 'react'
import { withReactContext } from 'storybook-react-context';
import type { Meta, StoryObj } from '@storybook/react';
import {FilterListButtonGroup as FilterButtonComponent} from '../filter-list-button-group'
import {UIProvider, ListItemProvider} from '@ui/contexts'
import {CompleteState, Filter} from '@core/entities'

const meta: Meta<typeof FilterButtonComponent> = {
    //title: 'design_system/Container',
    component: FilterButtonComponent,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <UIProvider>
              <ListItemProvider listItem = {{
                        _id: '34234234',
                        title: 'TestItem',
                        description: 'Test Item Description',
                        complete: CompleteState.INCOMPLETE
                    }}>
                <Story />
              </ListItemProvider>
            </UIProvider>
        ),
    ]
}

export default meta;

type Story = StoryObj<typeof FilterButtonComponent>

export const FilterListButtonGroup: Story = {
    args:{
        filterListHandler: () => {},
        filterListState: Filter.ALL_LIST_ITEMS
    }
}
