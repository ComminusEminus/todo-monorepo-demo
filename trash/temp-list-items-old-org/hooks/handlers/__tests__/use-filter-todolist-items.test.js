
const mockListItemData = {
    _id: '3243234',
    title: 'Mock Title',
    description: "Mock Description",
    complete: 'INCOMPLETE',
}

const mockListItemContextState = {
    listItemData: {...mockListItemData},
    completeState: 'INCOMPLETE',
    visibilityState: 'VISIBLE'
}

const { renderHook, act } = require('@testing-library/react')
const { useCompleteTodoListItemUI } = require('@ui/todo-list')
const {useListItemContext} = require('@ui/contexts')

jest.mock('@ui/contexts', () => {
    
    const originalModule = jest.requireActual('@ui/contexts');

    return{
        __esModule: true,
        ...originalModule,
        useListItemContext: jest.fn(() => {
            const state = mockListItemContextState
            return{ 
                state: state,
                dispatch: jest.fn()
            }

        })
        
    }
})