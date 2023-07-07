export class GetAllTodoListsUseCase {
    constructor(repository) {
        this.repository = repository;
        this.repository = repository;
    }
    async execute(userId) {
        return await this.repository.getAllTodosLists(userId);
    }
}
//# sourceMappingURL=get-all-todo-lists-usecase.js.map