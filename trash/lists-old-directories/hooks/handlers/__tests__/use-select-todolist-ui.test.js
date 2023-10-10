/**
 * @jest-environment jest-environment-jsdom
*/

const { renderHook, act } = require('@testing-library/react')
const { useSelectTodoListUI } = require('@ui/todo-lists')
const {useListsContext, useUIContext} = require('@ui/contexts')
const {UIACTIONS, VisibilityState, ITodoList} = require('@core/entities')

const mockListData = {
    _id: '4564564566',
    title: 'Mock List',
    listItems: [],
}

const mockListsContextState = {
    listsData: {...mockListData},
    visibilityState: VisibilityState.VISIBLE
}



const mockListsContextDispatch = (state) => {
    const newState = state
    const updateState = (action) => {
        const {type, payload} = action
        switch(type){
            case UIACTIONS.SELECT_TODO_LIST_BY_ID:
                newState.selectedTodoListId = payload
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
    selectedTodoListId: null,
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
                
            }

        }),
        useUIContext: jest.fn(() => {
            const state = mockUIContextState
            return{
                state: {...state},
                dispatch: mockListsContextDispatch(state)
            }
        })
        
    }
})

describe("selectedListItemForDetailViewHandler updates ui context selectedListItemId property to its own listItem context _id using dispatch", () => {
    test("selectedTodoListItemId should be updated to be the _id of mockListItemData", async () => {
        const { result, rerender } = renderHook(() => useSelectTodoListUI())
        await result.current.selectListForDetailViewHandler()
        rerender()
        const {resultValues} = result.current
        const {listsData, selectedTodoListId} = resultValues
        const {_id, title} = listsData
        
        expect(selectedTodoListId).toBe(_id)
    })
})
