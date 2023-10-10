/**
 * @jest-environment jest-environment-jsdom
*/

const axios = require('axios');
import {renderHook} from '@testing-library/react'
import {useAddNewTodoListApi} from '@ui/todo-lists'

const userId = "2342441"
localStorage.setItem(userId, "23334Token")

const testData = {
    title: 'test title'
}

jest.mock('axios', () =>( {
    __esModule: true,
    default: jest.fn(() => Promise.resolve({ data: {message:'ok', error: ''} }))
}));

describe('add new todo list api', () => {
    afterEach(() => jest.resetAllMocks());

    test('should return message of ok', async () => {
        
        const { result, rerender } = renderHook(() => useAddNewTodoListApi())
        await result.current.addNewTodoListApiHandler(testData, userId)

        rerender()

        const { addNewListApiState } = result.current
        const { loading, errorMessage, returnValue} = addNewListApiState
        const {message, error} = returnValue
        expect(message).toBe('ok')

    })
})