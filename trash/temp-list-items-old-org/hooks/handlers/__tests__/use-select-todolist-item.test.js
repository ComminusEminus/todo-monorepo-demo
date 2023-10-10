/**
 * @jest-environment jest-environment-jsdom
*/


const axios = require('axios');

const { renderHook, act } = require('@testing-library/react')
const { useSelectTodoListItem } = require('@ui/todo-list')
const {useListItemContext, useUIContext} = require('@ui/contexts')
const {UIACTIONS, CompleteState} = require('@core/entities')
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


const mockUIContextState = {
    formType: null,
    selectedTodoListItemId: null,
    selectedTodoListId: '54654646',
    update: null
}

const mockUIContextDispatch = (state) => {
    const newState = state
    const updateState = (action) => {
        const {type, payload} = action
        switch(type){
            case UIACTIONS.SELECT_TODO_LIST_ITEM_BY_ID:
                newState.selectedTodoListItemId = payload
                return newState
        }
    }
    return updateState
}


jest.mock('@ui/contexts', () => ({
    __esModule: true,
    useListItemContext: jest.fn(() => {
        return{
            state: {...mockListItemContextState}
        }
    }),
    useUIContext: jest.fn(() => {
        const state = mockUIContextState

        return{
            state: state,
            dispatch: mockUIContextDispatch(state)
        }
    })
    
}))




describe("useSelectTodoLIstItem hook", () => {
    test("selectedTodoListItemId property in uiContext should be updated to be the _id of mockListItemData", async () => {
        const { result, rerender } = renderHook(() => useSelectTodoListItem())
        await result.current.selectListItemForDetailViewHandler()
        rerender()
        const {resultValues} = result.current
        const {listItemData, selectedTodoListItemId} = resultValues
        const {_id, title, description, complete} = listItemData
        
        expect(selectedTodoListItemId).toBe(_id)
    })
})