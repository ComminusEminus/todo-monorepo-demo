export class LoginUserUseCase {
    constructor(repository) {
        this.repository = repository;
        this.repository = repository;
    }
    async execute(userName, password) {
        return await this.repository.loginUser(userName, password);
    }
}
//# sourceMappingURL=login-user-usecase.js.map