export class GetTodoListItemByIdUseCase {
    constructor(repository) {
        this.repository = repository;
        this.repository = repository;
    }
    async execute(todoListItemid) {
        return await this.repository.getTodoListItemById(todoListItemid);
    }
}
//# sourceMappingURL=get-todolist-item-by-id-usecase.js.map