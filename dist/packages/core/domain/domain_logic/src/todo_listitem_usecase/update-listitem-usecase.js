export class UpdateListItemUseCase {
    constructor(repository) {
        this.repository = repository;
        this.repository = repository;
    }
    async execute(updateData) {
        return await this.repository.updateTodoListItem(updateData);
    }
}
//# sourceMappingURL=update-listitem-usecase.js.map