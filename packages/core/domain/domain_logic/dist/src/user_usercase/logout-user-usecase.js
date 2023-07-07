export class LogoutUserUseCase {
    constructor(repository) {
        this.repository = repository;
        this.repository = repository;
    }
    async execute(userName) {
        return await this.repository.logoutUser(userName);
    }
}
//# sourceMappingURL=logout-user-usecase.js.map