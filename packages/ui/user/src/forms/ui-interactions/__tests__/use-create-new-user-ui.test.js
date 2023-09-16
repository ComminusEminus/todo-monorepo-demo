/**
 * @jest-environment jest-environment-jsdom
*/


const axios = require('axios');

const { renderHook, act } = require('@testing-library/react')
const { useCreateNewUserUpdateObserver } = require('../../../../dist/hooks/ui-interactions/use-create-new-user-update-observer')
const { useCreateNewUserProfile } = require('../../../../dist/hooks/api/use-create-new-user-profile')
const { useUIContext } = require('@ui/contexts')
const {UIACTIONS} = require('@core/entities')



const mockUIContextState = {
    formType: null,
    selectedTodoListItemId: null,
    selectedTodoListId: null,
    update: null,
    userProfile: null,
}


const mockUIContextDispatch = (state) => {
    const newState = state
    const updateState = (action) => {
        const {type, payload} = action
        switch(type){
            case UIACTIONS.UPDATE_OBSERVERS:
                newState.update = payload
                return newState
        }
    }
    return updateState
}


const mockToken = 'dsfsdf3545646'


jest.mock('@ui/contexts', () => ({
    __esModule: true,
    useUIContext: jest.fn(() => {
        const state = mockUIContextState

        return{
            state: state,
            dispatch: mockUIContextDispatch(state)
        }
    })
    
})).mock('../../../../dist/hooks/api/use-create-new-user-profile', () => ({
    __esModule: true,
    useCreateNewUserProfile: jest.fn(() => {
        return{
            createNewUserApiHandler: jest.fn(),
            requestState: {
                loading: false,
                error: false,
                returnValue: {
                    message: 'ok',
                    error: ''
                }
            }

        }
    })
}))


const mockUserProfile = {
    _id: "23423234",
    firstName: "Jim",
    lastName: "Jones",
    userName: "JJones",
}
const updatePayload = "User source data has been updated"

describe('updating ui context and localStorage with user profile and token respectivly', () => {
    test('userProfile is same as mockUserProfile', async () => {
        const { result, rerender } = renderHook(() => useCreateNewUserUpdateObserver())
        await result.current.createNewUserApiHandler()
        
        rerender()
        const {requestState, update} = result.current
        const {loading, error, returnValue} = requestState
        const {message, error:err} = returnValue
        
        expect(update).toBe(updatePayload)
    })
})

/*

describe('', () => {
    test('', async () => {

    })
})


*/