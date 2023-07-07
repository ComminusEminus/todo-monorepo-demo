import React from 'react'
import {Container} from '@design/container'
import {TodoListsView} from '@ui/todo-lists'
import {TodoListView} from '@ui/todo-list'
import {ListDetailView} from '@ui/list-item-detail'
import {FormDisplayView} from '@ui/form-display'

export const Dashboard = () => {
    return(
        <Container
            justifyContent = {'space-evenly'}
        >
            <Container
                flexGrow = {0}
            >
                <TodoListsView />
            </Container>
            <Container
                flexGrow = {1}
                flexDirection = {'column'}
            >
                <ListDetailView />
                <FormDisplayView />
            </Container>
            <Container
                flexGrow = {0}
            >
                <TodoListView />
            </Container>
        </Container>

    )
}