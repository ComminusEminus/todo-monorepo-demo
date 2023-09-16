/**
 * @jest-environment jest-environment-jsdom
*/

const axios = require('axios');

const { renderHook, act } = require('@testing-library/react')
const { useCreateNewUserProfile } = require('../../../../dist/hooks/api/use-create-new-user-profile')




jest.mock('axios', () =>( {
    __esModule: true,
    default: jest.fn(() => Promise.resolve({ data: {message:'ok', error: ''} }))
}));

describe('create new user api', () => {
    afterEach(() => jest.resetAllMocks());

    test('should return message of ok', async () => {
        const { result, rerender } = renderHook(() => useCreateNewUserProfile())
        await result.current.createNewUserApiHandler("jeff", "jones", "jjones", "password")
        
        rerender()
        
        const { requestState } = result.current
        const { loading, errorMessage, returnValue } = requestState
        const {message, error} = returnValue
        
        //expect(errorMessage).toBe('')
        expect(message).toBe('ok')

    })
})
