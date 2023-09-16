/**
 * @jest-environment jest-environment-jsdom
*/

const axios = require('axios');

const { renderHook, act } = require('@testing-library/react')
//const { useDeleteTodoListItem } = require('../../../../dist/hooks/api/use-delete-todolist-items')
const { useDeleteTodoListItem } = require('@ui/todo-list')

jest.mock('axios', () =>( {
    __esModule: true,
    default: jest.fn(() => Promise.resolve({ data: {message:'ok', error: ''} }))
}));

describe('delete list item api', () => {
    afterEach(() => jest.resetAllMocks());

    test('should return message of ok', async () => {
        const { result, rerender } = renderHook(() => useDeleteTodoListItem())
        await result.current.deleteListItemApiHandler('523465664', '12231234234')

        rerender()
        
        const { deleteApiState } = result.current
        const { loading, errorMessage, returnValue} = deleteApiState
        const {message, error} = returnValue
        
        expect(errorMessage).toBe('')
        expect(message).toBe('ok')

    })
})