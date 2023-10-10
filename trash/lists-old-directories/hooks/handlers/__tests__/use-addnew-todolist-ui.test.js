/**
 * @jest-environment jest-environment-jsdom
*/


const axios = require('axios');

const { renderHook, act } = require('@testing-library/react')
const { useOpenNewListForm } = require('@ui/todo-lists')
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



describe("updating the form type of ui context using dispatch from reducer function", () => {
    test("mock ui context formtype property should reflect the value of NEW_TODOLIST", async() => {
        
        const { result, rerender } = renderHook(() => useOpenNewListForm())

        await result.current.openNewListFormHandler()
        rerender()
        const {addNewTodoListHandler, formType} = result.current
        expect(formType).toBe('NEW_TODOLIST')

    })
})