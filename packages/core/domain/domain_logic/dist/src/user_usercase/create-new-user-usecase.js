export class CreateNewUserUseCase {
    constructor(repository) {
        this.repository = repository;
        this.repository = repository;
    }
    async execute(firstName, lastName, userName, password) {
        return await this.repository.createUserProfile(firstName, lastName, userName, password);
    }
}
//# sourceMappingURL=create-new-user-usecase.js.map