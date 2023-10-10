/**
 * @jest-environment jest-environment-jsdom
*/

const { renderHook, act } = require('@testing-library/react')
const { useGetAllTodoListsApi } = require('../../../../dist/hooks/api/use-getall-todolists-state.js')

const userId = "2342441"
let returnTodoLists= [
    {
        _id: '523465664',
        title: 'Test TodoList Item',
        listItems: []
    },
    {
        _id: '324234',
        title: 'Test TodoList Item2',
        listItems: []
    }

]
localStorage.setItem(userId, "23334Token")

jest.mock('axios', () => ({
    __esModule: true,
    default: jest.fn(() => Promise.resolve({ data: returnTodoLists }))
}));

describe('', () => {
    afterEach(() => jest.resetAllMocks());

    test('it returns a the correct component and saves it to local state requestedTodoListrItem', async () => {
        const { result, rerender } = renderHook(() => useGetAllTodoListsApi())
        await result.current.getAllTodoListsApiHandler(userId)
        rerender()
        const { getAllTodoListsApiState } = result.current
        const { allTodoLists, loading, errorMessage} = getAllTodoListsApiState


        expect(allTodoLists).toStrictEqual({...returnTodoLists})

    })
})