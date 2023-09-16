/**
 * @jest-environment jest-environment-jsdom
*/


const axios = require('axios');

const { renderHook, act } = require('@testing-library/react')
//const { useGetTodoListById } = require('../../../../dist/hooks/api/use-get-todolist-by-id')
const { useDeleteTodoListItem } = require('@ui/todo-list')

const listItemsResponse = [
    {
        _id: '324234234234',
        title: 'Title1',
        description: 'Title 1 description',
        complete: 'INCOMPLETE',
    },
    {
        _id: '324234234',
        title: 'Title2',
        description: 'Title 2 description',
        complete: 'INCOMPLETE',
    }
]
const listResponse = {
    _id: '4353453453',
    title: 'List Title',
    listItems: listItemsResponse,
}

const getListByIdResponse = {
    list: listResponse,
    message: 'ok',
    error: ''
}

jest.mock('axios', () => ({
    __esModule: true,
    default: jest.fn(() => Promise.resolve({ data: getListByIdResponse }))
}));

describe('get todo list item by id api call', () => {
    afterEach(() => jest.resetAllMocks());

    test('it returns listItemsResponse in returnValue without error', async () => {
        const { result, rerender } = renderHook(() => useGetTodoListById())
        await result.current.getTodoListApiHandler('523465664')
        rerender()
        const { todoListApiState } = result.current
        const { returnValue, loading, errorMessage } = todoListApiState
        const {message, error, list} = returnValue

        expect(message).toBe('ok')
        expect(error).toBe('')
        expect(list).toStrictEqual(listItemsResponse)

    })
})