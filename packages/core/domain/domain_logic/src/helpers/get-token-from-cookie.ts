const getToken = () => {
    const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];
    return token;
}


export const getTokenFromCookie = (): string | undefined => {
    const token: string | undefined = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];
    return token;
}