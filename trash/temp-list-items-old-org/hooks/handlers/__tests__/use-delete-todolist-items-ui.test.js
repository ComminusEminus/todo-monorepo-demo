/**
 * @jest-environment jest-environment-jsdom
*/


const axios = require('axios');

const { renderHook, act } = require('@testing-library/react')
const { useDeleteTodoListItemUI } = require('@ui/todo-list')
const {useListItemContext, useUIContext} = require('@ui/contexts')
const {LIST_ITEM_ACTIONS, VisibilityState} = require('@core/entities')

const mockListItemData = {
    _id: '3243234',
    title: 'Mock Title',
    description: "Mock Description",
    complete: 'INCOMPLETE',
}

const mockListItemContextState = {
    listItemData: {...mockListItemData},
    completeState: 'INCOMPLETE',
    visibilityState: VisibilityState.VISIBLE
}



const mockListItemContextDispatch = (state) => {
    const newState = state
    const updateState = (action) => {
        const {type, payload} = action
        switch(type){
            case LIST_ITEM_ACTIONS.UPDATE_VISIBILITY_STATE:
                newState.visibilityState = VisibilityState.INVISIBLE
                return newState
        }
    }
    return updateState
}

const mockUIContextState = {
    formType: null,
    selectedTodoListItemId: null,
    selectedTodoListId: "234534345",
    update: null,
}

jest.mock('@ui/contexts', () => {
    
    const originalModule = jest.requireActual('@ui/contexts');

    return{
        __esModule: true,
        ...originalModule,
        useListItemContext: jest.fn(() => {
            const state = mockListItemContextState
            return{ 
                state: {...state},
                dispatch: mockListItemContextDispatch(state)
            }

        }),
        useUIContext: jest.fn(() => {
            const state = mockUIContextState
            return{
                state: {...state}
            }
        })
        
    }
})


describe("useDeleteTodoListItems Hook", () => {
    test("mock list item context state's visibilityState should reflect the value of INVISIBLE", async() => {
        const { result, rerender } = renderHook(() => useDeleteTodoListItemUI())
        await result.current.visibilityHandler()
        rerender()
        const {state, visibilityHandler, deleteApiState} = result.current
        const {listItemData, visibilityState} = state
        expect(visibilityState).toBe('INVISIBLE')
    })
})