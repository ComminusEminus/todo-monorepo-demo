/**
 * @jest-environment jest-environment-jsdom
*/


const axios = require('axios');

const { renderHook, act } = require('@testing-library/react')
const { useOpenAddNewListItemForm } = require('@ui/todo-list')
const { useUIContext} = require('@ui/contexts')
const {UIACTIONS, CompleteState} = require('@core/entities')

const mockUserProfile = {
    _id: "23423234",
    firstName: "Jim",
    lastName: "Jones",
    userName: "JJones",
}


const mockUIContextState = {
    formType: null,
    selectedTodoListItemId: null,
    selectedTodoListId: '54654646',
    update: null,
    userProfile: mockUserProfile,
}

const mockUIContextDispatch = (state) => {
    const newState = state
    const updateState = (action) => {
        const {type, payload} = action
        switch(type){
            case UIACTIONS.SELECT_FORM_TYPE:
                newState.formType = payload
                return newState
        }
    }
    return updateState
}

jest.mock('@ui/contexts', () => ({
    __esModule: true,
    useUIContext: jest.fn(() => {
        const state = mockUIContextState

        return{
            state: state,
            dispatch: mockUIContextDispatch(state)
        }
    })
    
}))

describe("hook to update ui state's formType property for todo list items form", () => {
    
    test("formType property should be NEW_TODOLIST_ITEM", async() => {
        const { result, rerender } = renderHook(() => useOpenAddNewListItemForm())
        await result.current.openAddNewListItemFormHandler()
        rerender()
        const {state} = result.current
        const {formType} = state
        expect(formType).toBe('NEW_TODOLIST_ITEM')
    })
})
