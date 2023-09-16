/**
 * @jest-environment jest-environment-jsdom
*/

const axios = require('axios');

const { renderHook, act } = require('@testing-library/react')
const { useLoginUser } = require('../../../../dist/hooks/api/use-login-user')

const username = "JJones"

let mockReturnLoginResponse = {
    user: {
        _id: "23423234",
        firstName: "Jim",
        lastName: "Jones",
        userName: "JJones",
    },
    token: "2343245y66",
    message: 'ok',
    error: '',
}


jest.mock('axios', () => ({
    __esModule: true,
    default: jest.fn(() => Promise.resolve({ data: mockReturnLoginResponse }))
}));

describe('login user api', () => {
    afterEach(() => jest.resetAllMocks());

    test('it returns the correct login response data', async () => {
        const { result, rerender } = renderHook(() => useLoginUser())
        await result.current.loginApiHandler('JJones', 'password')
        rerender()
        const { requestState } = result.current
        const { loading, error, returnValue } = requestState
        const {user, token, message, error: err } = returnValue
        const {_id, firstName, lastName, userName} = user
        //add check to todolistitem state

        expect(returnValue).toStrictEqual(mockReturnLoginResponse)

    })
})