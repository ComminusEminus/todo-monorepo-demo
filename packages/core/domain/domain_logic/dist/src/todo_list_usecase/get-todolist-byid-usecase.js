export class GetTodoListByIdUseCase {
    constructor(repository) {
        this.repository = repository;
        this.repository = repository;
    }
    async execute(listId) {
        return await this.repository.getTodoListById(listId);
    }
}
//# sourceMappingURL=get-todolist-byid-usecase.js.map