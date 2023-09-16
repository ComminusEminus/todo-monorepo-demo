/**
 * @jest-environment jest-environment-jsdom
*/


const axios = require('axios');

const { renderHook, act } = require('@testing-library/react')
const { useLoginUserUpdateObserver} = require('../../../../dist/hooks/ui-interactions/use-login-user-update-observer')
const { useLoginUser } = require('../../../../dist/hooks/api/use-login-user')
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
            case UIACTIONS.UPDATE_USER_PROFILE:
                newState.userProfile = payload
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
    
})).mock('../../../../dist/hooks/api/use-login-user', () => ({
    __esModule: true,
    useLoginUser: jest.fn(() => {
        return{
            loginApiHandler: jest.fn(),
            requestState: {
                loading: false,
                error: false,
                returnValue: {
                    user: {...mockUserProfile},
                    token: 'sdfsdfsd445455',
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


describe('updating ui context and localStorage with user profile and token respectivly', () => {
    test('userProfile is same as mockUserProfile', async () => {
        const { result, rerender } = renderHook(() => useLoginUserUpdateObserver())
        await result.current.loginApiHandler()
        
        rerender()
        const {userProfile, requestState} = result.current
        const {loading, error, returnValue} = requestState
        expect(userProfile).toStrictEqual(mockUserProfile)
    })
    test('userProfile is key for token value', async () => {
        const tokenValue = localStorage.getItem(mockUserProfile._id)
        expect(tokenValue).toBe('sdfsdfsd445455')
    })
})

/*

describe('', () => {
    test('', async () => {

    })
})


*/