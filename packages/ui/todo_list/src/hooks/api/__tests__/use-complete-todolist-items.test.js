/**
 * @jest-environment jest-environment-jsdom
 */

const axios = require('axios');

const { renderHook, act } = require('@testing-library/react')
//const { useCompleteTodoListItem } = require('../../../../dist/hooks/api/use-complete-todolist-items.js')
const { useCompleteTodoListItem } = require('@ui/todo-list')
const { CompleteState } = require('@core/entities')

jest.mock('axios', () =>( {
        __esModule: true,
        default: jest.fn(() => Promise.resolve({ data: {message:'ok', error: ''} }))
}));

const todoListItem = {
    _id: "3243242",
    title: "Test Title",
    description: "Test Desscription",
    complete: "INCOMPLETE",
}

const newCompleteState = "COMPLETED"

        
describe('complete api call', () => {
    afterEach(() => jest.resetAllMocks());

    test('it returns a value of ok after sending new todolist item data', async () => {
        const { result, rerender } = renderHook(() => useCompleteTodoListItem())
        await result.current.updateTodoListItemCompleteStateApi(todoListItem, newCompleteState)
        rerender()
        const { completeApiState } = result.current
        const { loading, returnValue, error } = completeApiState
        const { error: err, message } = returnValue
        
        expect(message).toBe('ok')

    })
})
