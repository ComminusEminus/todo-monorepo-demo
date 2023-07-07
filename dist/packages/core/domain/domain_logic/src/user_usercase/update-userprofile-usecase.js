export class UpdateUserProfileUseCase {
    constructor(repository) {
        this.repository = repository;
        this.repository = repository;
    }
    async execute(userProfile) {
        return await this.repository.editUserProfile(userProfile);
    }
}
//# sourceMappingURL=update-userprofile-usecase.js.map