/**
 * @jest-environment jest-environment-jsdom
*/

const axios = require('axios');

const { renderHook, act } = require('@testing-library/react')
const { useAddNewTodoListItemApi } = require('@ui/todo-list')

const testData = {
    title: 'test title',
    description: 'test description '
}

jest.mock('axios', () =>( {
    __esModule: true,
    default: jest.fn(() => Promise.resolve({ data: {message:'ok', error: ''} }))
}));

describe('useAddNewTodoListItem hook', () => {
    afterEach(() => jest.resetAllMocks());

    test('should return message of ok', async () => {
        const { result, rerender } = renderHook(() => useAddNewTodoListItemApi())
        await result.current.addNewTodoListItemApiHandler(testData, '32432434243')

        rerender()
        
        const { addNewTodoListApiState } = result.current
        const { loading, errorMessage, returnValue} = addNewTodoListApiState
        const {message, error} = returnValue
        
        expect(message).toBe('ok')

    })
})