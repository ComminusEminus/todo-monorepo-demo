/**
 * @jest-environment jest-environment-jsdom
*/

const axios = require('axios');

const { renderHook, act } = require('@testing-library/react')
const { useDeleteTodoListApi } = require('../../../../dist/hooks/api/use-delete-todolist')

const userId = "2342441"
localStorage.setItem(userId, "23334Token")

jest.mock('axios', () =>( {
    __esModule: true,
    default: jest.fn(() => Promise.resolve({ data: {message:'ok', error: ''} }))
}));

describe('delete list api', () => {
    afterEach(() => jest.resetAllMocks());

    test('should return message of ok', async () => {
        const { result, rerender } = renderHook(() => useDeleteTodoListApi())
        await result.current.deleteListApiHandler('12231234234', userId)
        
        rerender()
        
        const { deleteListApiState } = result.current
        const { loading, errorMessage, returnValue } = deleteListApiState
        const {message, error} = returnValue
        

        expect(message).toBe('ok')

    })
})
