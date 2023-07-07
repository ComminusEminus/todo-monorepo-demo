export class UserRepoImp {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async loginUser(userName, password) {
        const params = {
            url: 'user/login',
            data: {
                userName: userName,
                password: password
            }
        };
        return await this.dataSource.post(params);
    }
    ;
    async logoutUser(userName) {
        const params = {
            url: 'user/logout',
            data: {
                userName: userName
            }
        };
        return await this.dataSource.post(params);
    }
    ;
    async editUserProfile(userProfile) {
        const params = {
            url: 'user/updateProfile',
            data: {
                userProfile: userProfile
            }
        };
        return await this.dataSource.put(params);
    }
    ;
    async createUserProfile(userName, password, firstName, lastName) {
        const params = {
            url: 'user/createUser',
            data: {
                userName: userName,
                password: password,
                firstName: firstName,
                lastName: lastName
            }
        };
        return await this.dataSource.post(params);
    }
    ;
}
//# sourceMappingURL=user-repo-imp.js.map