export class AddNewTodoListUseCase {
    constructor(repository) {
        this.repository = repository;
        this.repository = repository;
    }
    async execute(todoList, userId) {
        return await this.repository.addNewTodoList(todoList, userId);
    }
}
//# sourceMappingURL=addnew-todolist-usecase.js.map