export interface IPageDisplayState {
    page: 'LOGIN_PAGE' | 'CREATE_NEW_PAGE';
}
export declare const useSwitchPage: () => {
    pageDisplay: "LOGIN_PAGE" | "CREATE_NEW_PAGE";
    pageDisplayHandler: () => void;
};
