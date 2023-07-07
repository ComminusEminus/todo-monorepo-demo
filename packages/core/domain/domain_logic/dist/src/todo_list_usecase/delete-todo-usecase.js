export class DeleteTodoListUseCase {
    constructor(repository) {
        this.repository = repository;
        this.repository = repository;
    }
    async execute(listId, userId) {
        return await this.repository.deleteTodoList(listId, userId);
    }
}
//# sourceMappingURL=delete-todo-usecase.js.map