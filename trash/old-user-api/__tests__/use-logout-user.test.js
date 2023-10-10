/**
 * @jest-environment jest-environment-jsdom
*/

const axios = require('axios');

const { renderHook, act } = require('@testing-library/react')
const { useLogoutUser } = require('../../../../dist/hooks/api/use-logout-user')

const userId = "2342441"
localStorage.setItem(userId, "23334Token")

jest.mock('axios', () =>( {
    __esModule: true,
    default: jest.fn(() => Promise.resolve({ data: {message:'ok', error: ''} }))
}));

describe('logout user api', () => {
    afterEach(() => jest.resetAllMocks());

    test('should return message of ok', async () => {
        const { result, rerender } = renderHook(() => useLogoutUser())
        await result.current.logoutApiHandler( userId)
        
        rerender()
        
        const { requestState } = result.current
        const { loading, errorMessage, returnValue } = requestState
        const {message, error} = returnValue
        
        //expect(errorMessage).toBe('')
        expect(message).toBe('ok')

    })
})
