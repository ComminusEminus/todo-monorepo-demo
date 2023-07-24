interface IMapNewUser{
    firstName:string;
    lastName:string;
    userName: string;
    password:string;
}

export const mapNewUser = (body: IMapNewUser) => {
    return{
        firstName: body.firstName,
        lastName: body.lastName,
        userName: body.userName,
        password: body.password
    }
}