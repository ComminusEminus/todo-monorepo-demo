export class TodoListItemRepoImp {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async getTodoListItemById(todoListItemId) {
        const params = {
            url: 'listItem/getById',
            data: {
                todoListItemId: todoListItemId
            }
        };
        return await this.dataSource.get(params);
    }
    async updateTodoListItem(updateData) {
        const params = {
            url: 'listItem/update',
            data: {
                updateData
            }
        };
        return await this.dataSource.put(params);
    }
    async deleteTodoListItem(listItemId, listId) {
        const params = {
            url: 'listItem/delete',
            data: {
                listItemId: listItemId,
                listId: listId
            }
        };
        return await this.dataSource.delete(params);
    }
    async addTodoListItem(todoListItemId, listItem) {
        const params = {
            url: 'listItem/add',
            data: {
                todoListItemId: todoListItemId,
                listItem: listItem
            }
        };
        return await this.dataSource.post(params);
    }
}
//# sourceMappingURL=todolist-item-repo-imp.js.map