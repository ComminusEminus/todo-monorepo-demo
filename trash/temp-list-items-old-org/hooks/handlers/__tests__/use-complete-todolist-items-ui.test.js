/**
 * @jest-environment jest-environment-jsdom
*/

const axios = require('axios');

const { renderHook, act } = require('@testing-library/react')
const {useCompleteTodoListItemUI} = require('@ui/todo-list')
const {useListItemContext} = require('@ui/contexts')
const {LIST_ITEM_ACTIONS, CompleteState} = require('@core/entities')

const mockListItemData = {
    _id: '3243234',
    title: 'Mock Title',
    description: "Mock Description",
    complete: CompleteState.INCOMPLETE,
}

const mockListItemContextState = {
    listItemData: {...mockListItemData},
    completeState: CompleteState.INCOMPLETE,
    visibilityState: 'VISIBLE'
}



const mockListItemContextDispatch = (state) => {
    const newState = state
    const updateState = (action) => {
        const {type, payload} = action
        switch(type){
            case LIST_ITEM_ACTIONS.UPDATE_COMPLETE_STATE:
                if(newState.listItemData.complete === CompleteState.INCOMPLETE){
                    newState.completeState = CompleteState.COMPLETED
                    return newState
                }else{
                    newState.completeState = CompleteState.INCOMPLETE
                    return newState
                }
        }
    }
    
    return updateState
}


jest.mock('@ui/contexts', () => {
    
    const originalModule = jest.requireActual('@ui/contexts');

    return{
        __esModule: true,
        ...originalModule,
        useListItemContext: jest.fn(() => {
            const state = mockListItemContextState
            return{ 
                state: state,
                dispatch: mockListItemContextDispatch(state)
                
            }
        })
    }
})





describe("useCompleteStateUI hook", () => {
    test("mock list item complete property should reflect the value of COMPLETED", async() => {
        
        const { result, rerender } = renderHook(() => useCompleteTodoListItemUI())

        await result.current.completeHandler()
        rerender()
        const {completeState, completeHandler, completeApiState} = result.current
        expect(completeState).toBe('COMPLETED')

    })
})