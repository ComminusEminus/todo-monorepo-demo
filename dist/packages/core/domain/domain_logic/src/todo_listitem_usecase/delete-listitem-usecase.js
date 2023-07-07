//add list id 
export class DeleteListItemUseCase {
    constructor(repository) {
        this.repository = repository;
        this.repository = repository;
    }
    async execute(listItemId, listId) {
        return await this.repository.deleteTodoListItem(listItemId, listId);
    }
}
//# sourceMappingURL=delete-listitem-usecase.js.map