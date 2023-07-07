export class AddNewListItemUseCase {
    constructor(repository) {
        this.repository = repository;
        this.repository = repository;
    }
    async execute(todoListId, listItem, userId) {
        return await this.repository.addTodoListItem(todoListId, listItem);
    }
}
//# sourceMappingURL=addnew-listitem-usecase.js.map