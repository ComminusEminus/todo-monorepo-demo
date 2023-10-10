/**
 * @jest-environment jest-environment-jsdom
*/

const { renderHook, act } = require('@testing-library/react')
const { useDeleteTodoListUI } = require('@ui/todo-lists')
const {useListsContext, useUIContext} = require('@ui/contexts')
const {LISTS_ACTIONS, VisibilityState, ITodoList} = require('@core/entities')

const mockListData = {
    _id: '4564564566',
    title: 'Mock List',
    listItems: [],
}

const mockListsContextState = {
    listData: {...mockListData},
    visibilityState: VisibilityState.VISIBLE
}



const mockListsContextDispatch = (state) => {
    const newState = state
    const updateState = (action) => {
        const {type, payload} = action
        switch(type){
            case LISTS_ACTIONS.UPDATE_VISIBILITY_STATE:
                newState.visibilityState = VisibilityState.INVISIBLE
                return newState
        }
    }
    return updateState
}

const mockUserProfile = {
    _id: "56445645646",
    userName: "John",
    firstName: "Doe",
    lastName: "JJDoe",
}

const mockUIContextState = {
    formType: null,
    selectedTodoListItemId: null,
    selectedTodoListId: "234534345",
    update: null,
    userProfile: {...mockUserProfile},
}

jest.mock('@ui/contexts', () => {
    
    const originalModule = jest.requireActual('@ui/contexts');

    return{
        __esModule: true,
        ...originalModule,
        useListsContext: jest.fn(() => {
            const state = mockListsContextState
            return{ 
                state: {...state},
                dispatch: mockListsContextDispatch(state)
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

describe("updating visibility state of component stored in context using dispatch from reducer", () => {
    test("mock list item context state's visibilityState should reflect the value of INVISIBLE", async () => {
        const { result, rerender } = renderHook(() => useDeleteTodoListUI())
        await result.current.visibilityHandler()
        rerender()
        const {visibilityState, visibilityHandler, deleteListApiState} = result.current
        expect(visibilityState).toBe('INVISIBLE')
    })
})