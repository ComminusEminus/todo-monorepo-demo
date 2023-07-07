export class TodoListRepoImp {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async getAllTodosLists(userId) {
        const params = {
            url: 'todoList/all',
            data: userId
        };
        return await this.dataSource.get(params);
    }
    async addNewTodoList(listData, userId) {
        const params = {
            url: 'todoList/add',
            data: {
                listData,
                userId
            }
        };
        return await this.dataSource.post(params);
    }
    async deleteTodoList(listId, userId) {
        const params = {
            url: 'todoList/delete',
            data: {
                listId,
                userId
            }
        };
        return await this.dataSource.delete(params);
    }
    async getTodoListById(listId) {
        const params = {
            url: 'todoList/getById',
            data: {
                listId: listId
            }
        };
        return await this.dataSource.get(params);
    }
}
//# sourceMappingURL=todolist-repo-imp.js.map